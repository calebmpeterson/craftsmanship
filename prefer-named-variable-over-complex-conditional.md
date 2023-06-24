Prefer:

```js
// Giving the variable a descriptive
// domain-relevant will clarify the
// code and often removes the need
// for an explanatory comment.
const isComplexCondition = isThis || (isThat && isAnother);
if (isComplexCondition) {
  // Handle the scenario
}
```

Instead of:

```js
// It's much harder to determine what
// the domain-specific intent is when
// conditional is inlined like this.
if (isThis || (isThat && isAnother)) {
  // Handle the scenario
}
```

**Rationale**

As noted above, extracting a clear, domain-relevant named local variable to capture the result of a complex conditional expression serves the purposes of clarifying the semantics of the conditional expression. Doing this often removes the need for explanatory comments completely.
