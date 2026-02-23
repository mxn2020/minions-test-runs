---
title: Quick Start
description: Get up and running with Minions Test-runs in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-test-runs/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_test_runs import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
test-runs info
```
