Prefer:

```js
if (condition) {
  return "something else";
}

return "a thing"
```

Instead of:

```js.avoid
let myValue = "a thing";

if (isConditionTrue) {
  myValue = "something else";
}

return myValue;
```

**Rationale**

This improves maintainability because the reader never need ask/answer the question "under what circumstances might `myValue` be re-assigned to a different value?"
