When using a statically-typed language, such as TypeScript, use a discriminated union when you need to return a value that can represent multiple discrete states. This approach helps prevent invalid scenarios and ensures that your code is more robust and less prone to errors.

Instead of:

```ts.avoid
type Result = {
  // Did the operation succeed?
  success: boolean;
  // If not, include a user-facing
  // explanation of the problem.
  explanation?: string;
}

export function myOperation(): Result {
  // ...
}
```

Prefer:

```ts
type SuccessResult = {
  success: true;
  // There is no explanation needed. The type-checker
  // will flag any mistaken attempt to provide one.
};

type FailureResult = {
  success: false;
  // An explanation is required. The type-checker
  // will flag any mistaken omissions.
  explanation: string;
};

type Result = SuccessResult | FailureResult;

export function myOperation(): Result {
  // ...
}
```

In so doing, we've avoid any confusion for a future maintainer; a successful result will never have an explanation, and a failure is guaranteed to have an explanation.

The reader never need wonder if/when the optional `explanation` in our first `Result` type will be present.
