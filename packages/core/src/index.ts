/**
 * Minions Test-runs SDK
 *
 * Execution records, turn-by-turn logs, and assertion results
 *
 * @module @minions-test-runs/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Test-runs.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
