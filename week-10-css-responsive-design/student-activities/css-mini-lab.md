# Week 10 CSS Mini-Lab

Use a temporary neutral HTML file or sandbox. Do not use your assessed project for the first part of this activity.

## Part 1 – Link the stylesheet

Create `index.html` and `style.css`.

Add the stylesheet link to the `<head>` of the HTML document.

Record the exact line you used:

```html

```

How did you confirm the stylesheet was connected successfully?


## Part 2 – CSS rule anatomy

Create a rule for a heading.

```css
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
```

Identify:

| Item | Answer |
|---|---|
| Selector |  |
| Property 1 |  |
| Value 1 |  |
| Property 2 |  |
| Value 2 |  |

Now change one value. Predict the result before refreshing.

**Prediction:**

**Actual result:**

## Part 3 – Box model experiment

Create a class called `.panel` and apply:

```css
.panel {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 20px;
}
```

1. What visible effect does padding have?
2. What visible effect does margin have?
3. What happens if `box-sizing: border-box;` is added?
4. Why can understanding this prevent layout problems?

## Part 4 – Custom properties

Create three custom properties for:

- a page background
- a text colour
- an accent colour

```css
:root {
    --page-bg: ;
    --text: ;
    --accent: ;
}
```

Use them in at least three rules.

Explain one maintenance advantage of using custom properties.

## Part 5 – Flexbox

Create a container holding three boxes.

Start with:

```css
.flex-container {
    display: flex;
    gap: 1rem;
}
```

Experiment with:

- `flex-direction`
- `justify-content`
- `align-items`
- `flex-wrap`

Complete:

| Property changed | Value tested | Effect observed |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

Which type of interface element might suit this layout method?

## Part 6 – Grid

Using the same three or more boxes, test:

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}
```

Change the number of columns.

What becomes easier to express using Grid than your earlier Flexbox example?

## Part 7 – Responsive image

Add an image and test it with and without:

```css
img {
    max-width: 100%;
    height: auto;
}
```

Resize the browser.

What problem does this rule solve?

## Part 8 – Media query

Add:

```css
@media (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

Test at widths above and below 600px.

Record:

| Width | Number of columns | Usable? Why? |
|---:|---:|---|
| 900px |  |  |
| 650px |  |  |
| 599px |  |  |
| 400px |  |  |

## Final reflection

Complete this sentence with a reasoned response:

> CSS should be selected from the needs of the content and design rather than copied from another website because…