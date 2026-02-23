"""
Minions Test-runs SDK — Type Schemas
Custom MinionType schemas for Minions Test-runs.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_run_type = MinionType(
    id="test-runs-test-run",
    name="Test run",
    slug="test-run",
    description="An execution of a test scenario against a target.",
    icon="▶️",
    schema=[
        FieldDefinition(name="scenarioId", type="string", label="scenarioId"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="startedAt", type="string", label="startedAt"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
        FieldDefinition(name="passedAssertions", type="number", label="passedAssertions"),
        FieldDefinition(name="failedAssertions", type="number", label="failedAssertions"),
        FieldDefinition(name="totalAssertions", type="number", label="totalAssertions"),
        FieldDefinition(name="promptVersionRef", type="string", label="promptVersionRef"),
    ],
)

turn_log_type = MinionType(
    id="test-runs-turn-log",
    name="Turn log",
    slug="turn-log",
    description="A single turn in a test conversation.",
    icon="💬",
    schema=[
        FieldDefinition(name="runId", type="string", label="runId"),
        FieldDefinition(name="turnIndex", type="number", label="turnIndex"),
        FieldDefinition(name="userMessage", type="string", label="userMessage"),
        FieldDefinition(name="agentResponse", type="string", label="agentResponse"),
        FieldDefinition(name="responseTimeMs", type="number", label="responseTimeMs"),
        FieldDefinition(name="toolCallsMade", type="string", label="toolCallsMade"),
        FieldDefinition(name="assertionResults", type="string", label="assertionResults"),
    ],
)

custom_types: list[MinionType] = [
    test_run_type,
    turn_log_type,
]

