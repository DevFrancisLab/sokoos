"""Internal, provider-agnostic AI Employee runtime contracts."""

from .context import RuntimeContext, RuntimeDecision, RuntimeEligibility
from .execution import RuntimeExecutor
from .providers import AIProvider, ProviderResult
from .services import RuntimeContextError, build_runtime_context, get_runtime_eligibility

__all__ = [
    "AIProvider",
    "ProviderResult",
    "RuntimeContext",
    "RuntimeContextError",
    "RuntimeDecision",
    "RuntimeExecutor",
    "RuntimeEligibility",
    "build_runtime_context",
    "get_runtime_eligibility",
]
