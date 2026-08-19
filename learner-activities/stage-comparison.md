# Stage Comparison Activity

## Purpose

The three versions of Hot Wheels show a development journey rather than three unrelated websites. Your task is to identify what changes, explain why it changes and decide when the techniques might be useful in your own work.

## Stage 1 → Stage 2: HTML to responsive presentation

Compare the same pages in `stage-1-html-foundation/` and `stage-2-responsive-design/`.

### Investigation

1. Identify at least five differences between the two stages.
2. Which new file is introduced in Stage 2? Explain its purpose.
3. Find examples of:
   - class selectors
   - Flexbox
   - CSS Grid
   - a media query
   - hover/focus styling
4. For each example, explain what problem the CSS is solving.
5. Locate the responsive breakpoint. Change it temporarily and record what happens at different browser widths.
6. Identify accessibility features that were already present in Stage 1 before CSS was added.
7. Disable the stylesheet in your browser developer tools. What remains usable? Why does that matter?

### Reflection

Choose two Stage 2 design decisions that you would make differently for another client. Explain your alternative and why it would better suit that client or audience.

---

## Stage 2 → Stage 3: responsive presentation to interaction

Compare `stage-2-responsive-design/` with `stage-3-javascript-refinement/`.

### Investigation

1. Identify every feature that depends on JavaScript.
2. Locate where `script.js` is connected to each page.
3. Find examples of event listeners. What user/browser events are being detected?
4. Find an example where JavaScript changes the DOM.
5. Explain how `localStorage` is used and why this is useful.
6. Find defensive checks that test whether an element exists before using it. Why are these useful on a multi-page website?
7. Disable JavaScript. Which parts of the website still work?
8. Explain why maintaining useful core content/navigation without JavaScript is desirable.

### Experiment

Make one temporary change to a JavaScript feature. Predict the outcome before refreshing the page, then record the actual result.

### Reflection

For each Stage 3 JavaScript feature, classify it as:

- essential to the site's purpose
- useful enhancement
- mainly cosmetic

Justify your classifications. Different answers are acceptable when they are supported by reasoning.

## Final question

What does the progression HTML → CSS → JavaScript suggest about the different responsibilities of these three technologies?
