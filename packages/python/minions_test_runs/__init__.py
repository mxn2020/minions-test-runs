"""
Minions Test-runs Python SDK

Execution records, turn-by-turn logs, and assertion results
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Test-runs.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
