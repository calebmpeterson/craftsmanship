**Rationale**

Following consistent conventions - naming, stylistic, or otherwise - like using a formatting standard, allows the reader to focus on the logic rather than attempting to determine why a convention might not have been followed.

Furthermore, consistent conventions can allow the reader to quickly distinguish and then ignore non-relevant parts of the code.

> What the convention is matters _far less_ than consistent adherence.

**Principle**

Differences draws the reader's attention - take advantage of that fact and guide the reader by avoiding differences when additional attention from the reader isn't warranted.

**Example 1**

When using a CSS-in-JS library, always add a suffix such as `Css` to CSS rule declarations like this:

```js
const buttonCss = css`
  background-color: #fefefe;
  color: #222;
`;
```

If the occasion should arise where an element-specific style needs to be used, then append a `Style` suffix:

```js
// If numerous degree values will be used, this is faster
// than using CSS-in-JS because the CSS needn't be added
// to the DOM, parsed, and then applied.
const transformStyle = (degree: number) = {
  transform: `rotate(${degree}deg)`
}
```

With the above conventions in place, the reader can quickly determine when a CSS-in-JS rule is being used versus an element-specific `style`.
