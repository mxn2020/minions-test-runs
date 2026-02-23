# minions-test-runs

**Execution records, turn-by-turn logs, and assertion results**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-test-runs/sdk minions-sdk

# Python
pip install minions-test-runs

# CLI (global)
npm install -g @minions-test-runs/cli
```

---

## CLI

```bash
# Show help
test-runs --help
```

---

## Python SDK

```python
from minions_test_runs import create_client

client = create_client()
```

---

## Project Structure

```
minions-test-runs/
  packages/
    core/           # TypeScript core library (@minions-test-runs/sdk on npm)
    python/         # Python SDK (minions-test-runs on PyPI)
    cli/            # CLI tool (@minions-test-runs/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [test-runs.minions.help](https://test-runs.minions.help)
- Blog: [test-runs.minions.blog](https://test-runs.minions.blog)
- App: [test-runs.minions.wtf](https://test-runs.minions.wtf)

---

## License

[MIT](LICENSE)
