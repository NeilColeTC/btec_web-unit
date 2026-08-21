# Week 10 Slides – CSS and Responsive Design

## Slide 1 – Week 10
**CSS and Responsive Design**  
B2 / C1 – preparation for C.P4

---

## Slide 2 – Today’s big question
How do we turn meaningful HTML structure into a usable, responsive visual interface?

---

## Slide 3 – Learning outcomes
By the end of today you should be able to:
- explain HTML vs CSS responsibilities
- write and link an external stylesheet
- use selectors, properties and values
- apply spacing, typography and colour
- choose Flexbox or Grid appropriately
- build responsive layouts
- use media queries
- test keyboard focus and responsive behaviour

---

## Slide 4 – Retrieval
What is the role of:
- `<!DOCTYPE html>`
- `<head>`
- `<main>`
- `<nav>`
- `alt`
- `<label>`
- a relative link?

---

## Slide 5 – HTML vs CSS
**HTML** describes structure and meaning.

**CSS** controls presentation and layout.

A useful website should not need presentation rules to preserve its core meaning.

---

## Slide 6 – External CSS
Link one stylesheet from the HTML `<head>`:

```html
<link rel="stylesheet" href="style.css">
```

Why is this better than repeating the same styles in every page?

---

## Slide 7 – CSS rule anatomy

```css
nav a {
    color: white;
    text-decoration: none;
}
```

- `nav a` = selector
- `color` = property
- `white` = value
- property/value pair = declaration

---

## Slide 8 – Selector thinking
Common selector types:
- element: `p`
- class: `.card`
- id: `#main-heading`
- descendant: `nav a`
- pseudo-class: `a:hover`

Question: Which selectors are most reusable?

---

## Slide 9 – The cascade
When several CSS rules affect the same element, the browser must decide which one wins.

Factors include:
- origin/order
- specificity
- inheritance

Do not solve every conflict with `!important`.

---

## Slide 10 – Box model
Every element can be thought of as:

**content → padding → border → margin**

Which parts add space inside the element? Which add space outside?

---

## Slide 11 – `box-sizing`
A common rule:

```css
* {
    box-sizing: border-box;
}
```

This makes declared widths easier to reason about because padding and border are included in the width.

---

## Slide 12 – Typography matters
Consider:
- font family
- size
- line height
- line length
- hierarchy
- weight
- contrast

Readable typography is a usability decision, not decoration.

---

## Slide 13 – Consistent spacing
Good interfaces use a repeatable spacing system rather than random values.

Ask:
- Which elements need separation?
- Which elements belong together?
- Is the spacing consistent across pages?

---

## Slide 14 – CSS custom properties

```css
:root {
    --accent: #d84a2f;
    --surface: #ffffff;
    --radius: 0.65rem;
}
```

Use later with:

```css
color: var(--accent);
```

Why might this improve maintainability?

---

## Slide 15 – Flexbox
Flexbox is strong for one-dimensional layout:
- row **or** column
- alignment
- distribution of space
- wrapping

Useful examples:
- navigation
- header layout
- button groups

---

## Slide 16 – Flexbox mini example

```css
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}
```

Predict what each declaration does.

---

## Slide 17 – CSS Grid
Grid is strong for two-dimensional layout:
- rows and columns
- card galleries
- structured page regions

Example:

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}
```

---

## Slide 18 – Flexbox or Grid?
Choose based on the layout problem, not because one is newer.

Ask:
- Is the content mainly flowing in one direction?
- Do rows and columns both matter?
- What happens when content wraps?

---

## Slide 19 – Responsive images
A common base rule:

```css
img {
    max-width: 100%;
    height: auto;
}
```

This prevents an image from overflowing its container.

---

## Slide 20 – `object-fit`
When images need consistent display dimensions:

```css
.card img {
    height: 220px;
    object-fit: cover;
}
```

What trade-off does `cover` introduce?

---

## Slide 21 – What is responsive design?
Responsive design means the interface adapts to available space and remains usable.

It is not simply:
- shrinking everything
- building a separate mobile site
- copying standard device widths

---

## Slide 22 – Media queries

```css
@media (max-width: 800px) {
    header {
        flex-direction: column;
    }
}
```

The rule applies when the condition is true.

---

## Slide 23 – Content-led breakpoints
A breakpoint should appear when the layout or content needs to change.

Ask:
- When does navigation become crowded?
- When do cards become too narrow?
- When does text become uncomfortable to read?

---

## Slide 24 – Stage 1 prediction
Before viewing Stage 2, inspect Stage 1.

Predict five things CSS should improve.

Possible categories:
- readability
- spacing
- navigation
- layout
- images
- forms
- responsive behaviour
- focus states

---

## Slide 25 – Stage 2 reveal
Stage 2 keeps the same recognisable five-page structure but adds an external stylesheet.

Most of the visual development happens in `style.css`.

What does that tell us about separation of concerns?

---

## Slide 26 – Find the design system
In Stage 2 locate:
- `:root`
- custom properties
- base typography
- max width
- colours
- radius
- shadow

Which values are reused most often?

---

## Slide 27 – Find Flexbox
Locate where Stage 2 uses:

```css
display: flex;
```

What problem is it solving?

What would happen if it were removed?

---

## Slide 28 – Find Grid
Locate the gallery grid.

Questions:
- How many columns are used at wide viewports?
- What happens below 800px?
- What happens below 560px?

---

## Slide 29 – Stage 2 breakpoint experiment
Temporarily change a breakpoint.

Record:
1. original value
2. temporary value
3. viewport width tested
4. visible effect
5. whether the change improved or damaged usability

Restore the original afterwards.

---

## Slide 30 – Responsive heading size
Stage 2 uses `clamp()`:

```css
font-size: clamp(2rem, 5vw, 3.5rem);
```

This creates a minimum, flexible value and maximum.

---

## Slide 31 – Hover is not enough
Pointer users may see `:hover`.

Keyboard users need a visible focus state such as:

```css
a:focus-visible {
    outline: 3px solid #1769aa;
}
```

---

## Slide 32 – Test by keyboard
Without using the mouse:
- press Tab repeatedly
- identify the current interactive element
- activate links/buttons
- check whether focus is visible

If you cannot tell where you are, there is a usability problem.

---

## Slide 33 – Contrast
Do not assume colours are accessible because they look different to you.

Good practice:
- use strong foreground/background contrast
- do not rely on colour alone to communicate state
- test rather than guess

---

## Slide 34 – From exemplar to your own design
Do **not** ask:
“What values did Hot Wheels use?”

Ask:
“What does my reviewed design require?”

Then select CSS techniques to implement that decision.

---

## Slide 35 – Independent implementation
Your priorities:
1. link one external stylesheet
2. implement consistent typography/colour/spacing
3. build navigation/layout
4. make images responsive
5. add responsive adaptation
6. test widths and keyboard focus

---

## Slide 36 – Evidence of development
Useful evidence can include:
- screenshots at different widths
- code excerpts
- defect notes
- before/after fixes
- explanation of why a layout technique was selected

The important part is showing that your own website develops from your own design.

---

## Slide 37 – Exit ticket
Explain:
1. one difference between HTML and CSS responsibility
2. when you would choose Flexbox
3. when you would choose Grid
4. why breakpoints should be content-led
5. one CSS decision you made today and why

---

## Slide 38 – Next week
**JavaScript and Purposeful Interaction**

We will add behaviour only where it solves a genuine user/interface problem.