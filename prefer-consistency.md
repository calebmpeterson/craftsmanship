Prefer consistency

**Rationale**

Following consistent naming conventions, like using a formatting standard, allows the reader to focus on the logic rather than attempting to determine why a naming convention might not have been followed.

Furthermore, consistent naming conventions can allow the reader to quickly distinguish and then ignore non-relevant parts of the code.

> What the convention is matters _far less_ than consistent adherence.

**Example**

When using a CSS-in-JS library, always add a suffix such as `Css` to CSS rule declarations like this:

```js
const buttonCss = css`
  background-color: #fefefe;
  color: #222;
`;
```

If the occasion should arise where an element-specific style needs to be used, then appending a `Style` suffix like so:

```js
// If numerous degree values will be used, this is faster
// than using CSS-in-JS because the CSS needn't be added
// to the DOM, parsed, and then applied.
const transformStyle = (degree: number) = {
  transform: `rotate(${degree}deg)`
}
```

With the above conventions in place, the reader can quickly determine when a CSS-in-JS rule is being used versus an element-specific `style`.
