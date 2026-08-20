"""Provider boundary definitions without a provider implementation."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Protocol

from .context import RuntimeContext


@dataclass(frozen=True)
class ProviderResult:
    """A future provider's unpersisted candidate response."""

    response_text: str | None = None


class AIProvider(Protocol):
    """The minimal contract a future provider must satisfy."""

    def generate(self, context: RuntimeContext) -> ProviderResult:
        """Return an unpersisted provider result for the supplied context."""
