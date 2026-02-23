/**
 * @module @minions-test-runs/sdk/schemas
 * Custom MinionType schemas for Minions Test-runs.
 */

import type { MinionType } from 'minions-sdk';

export const testrunType: MinionType = {
  id: 'test-runs-test-run',
  name: 'Test run',
  slug: 'test-run',
  description: 'An execution of a test scenario against a target.',
  icon: '▶️',
  schema: [
    { name: 'scenarioId', type: 'string', label: 'scenarioId' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'startedAt', type: 'string', label: 'startedAt' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
    { name: 'passedAssertions', type: 'number', label: 'passedAssertions' },
    { name: 'failedAssertions', type: 'number', label: 'failedAssertions' },
    { name: 'totalAssertions', type: 'number', label: 'totalAssertions' },
    { name: 'promptVersionRef', type: 'string', label: 'promptVersionRef' },
  ],
};

export const turnlogType: MinionType = {
  id: 'test-runs-turn-log',
  name: 'Turn log',
  slug: 'turn-log',
  description: 'A single turn in a test conversation.',
  icon: '💬',
  schema: [
    { name: 'runId', type: 'string', label: 'runId' },
    { name: 'turnIndex', type: 'number', label: 'turnIndex' },
    { name: 'userMessage', type: 'string', label: 'userMessage' },
    { name: 'agentResponse', type: 'string', label: 'agentResponse' },
    { name: 'responseTimeMs', type: 'number', label: 'responseTimeMs' },
    { name: 'toolCallsMade', type: 'string', label: 'toolCallsMade' },
    { name: 'assertionResults', type: 'string', label: 'assertionResults' },
  ],
};

export const customTypes: MinionType[] = [
  testrunType,
  turnlogType,
];

