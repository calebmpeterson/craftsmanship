Prefer:

```typescript
try {
  // Some code that might throw
} catch (error: unknown) {
  if (isExpectedError(error)) {
    // Handle the expected error
  }
  else {
    // Handle the unexpected error
  }
}
```

Instead of:

```typescript
try {
  // Some code that might throw
} catch (error: unknown) {
  const expectedError = error as ExpectedError
  // Handle the expected error
}
```

**Rationale**

If something other than an `ExpectedError` were to be caught, referencing properties on the the unguarded cast of `expectedError` might cause an additional error in the catch block that would complicate diagnosing the issue.