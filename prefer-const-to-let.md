Prefer:

```js
const myValue = isConditionTrue ? maybeValue : undefined;
```

Instead of:

```js.avoid
let myValue;
if (isConditionTrue) {
  myValue = maybeValue;
}
```

**Rationale**

Though a bit more syntactically dense, this improves maintainability because the reader never need ask/answer the question "under what circumstances might `myValue` be re-assigned to a different value?"
