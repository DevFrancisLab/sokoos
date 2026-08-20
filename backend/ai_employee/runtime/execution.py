"""Read-only, provider-agnostic runtime decision execution."""

from __future__ import annotations

from conversations.models import Conversation

from .context import RuntimeDecision
from .providers import AIProvider
from .services import build_runtime_context, get_runtime_eligibility


class RuntimeExecutor:
    """Build context and make the next safe runtime decision.

    The conversation must already have been resolved through the authenticated
    caller's business.  No selector, domain mutation, or default provider is
    accepted here.
    """

    def __init__(self, provider: AIProvider | None = None):
        self._provider = provider

    def execute(self, *, conversation: Conversation) -> RuntimeDecision:
        context = build_runtime_context(conversation=conversation)
        eligibility = get_runtime_eligibility(context)

        if context.conversation.status == Conversation.Status.RESOLVED:
            return RuntimeDecision(action="ignore", reason="Conversation is resolved.")
        if not eligibility.allowed:
            return RuntimeDecision(action="handoff", reason=eligibility.reason)
        if self._provider is None:
            return RuntimeDecision(
                action="await_provider",
                reason="Conversation is eligible and awaiting a provider response.",
            )

        result = self._provider.generate(context)
        if result.response_text is None:
            return RuntimeDecision(
                action="await_provider",
                reason="Provider returned no response text.",
            )
        return RuntimeDecision(
            action="respond",
            reason="Provider returned an unpersisted response.",
            response_text=result.response_text,
        )
