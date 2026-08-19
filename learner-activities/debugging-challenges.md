# Debugging Challenges

These challenges are designed to be completed by making a temporary copy of the relevant exemplar file. Do not break the repository version.

The aim is not merely to repair a fault. Record how you identified the cause.

## Recommended debugging process

For each challenge:

1. predict what the fault will cause
2. reproduce the problem
3. inspect the page/code using appropriate developer tools
4. identify the cause
5. make one controlled change
6. retest
7. explain why the change fixed the problem

## HTML challenges

### 1. Broken navigation

In a temporary copy of a page, change one navigation `href` so it points to a filename that does not exist.

Diagnose the failure using the browser and explain how relative paths work.

### 2. Form association

Change the `for` value of one form label so it no longer matches its input's `id`.

Investigate the effect when clicking the label and consider the accessibility impact.

### 3. Missing image

Introduce a spelling error into one image `src` path. Use developer tools to identify the failed request.

## CSS challenges

### 4. Flexbox failure

In a temporary Stage 2 copy, remove or alter the declaration that creates a Flexbox layout in one component.

Record how the layout changes and identify which declaration caused it.

### 5. Responsive rule not firing

Alter a media-query breakpoint or introduce a syntax error into its condition. Resize the browser and diagnose why the expected layout change does not occur.

### 6. Selector mismatch

Change one HTML class name without changing the corresponding CSS selector. Explain why the styling disappears.

## JavaScript challenges

### 7. Menu event failure

In a temporary Stage 3 `script.js`, alter the ID used to locate the menu button. Use the console and code inspection to diagnose the resulting behaviour.

### 8. Missing defensive check

Choose a feature whose target does not exist on every page. In a temporary copy, remove the defensive existence check and investigate the console error on another page.

Explain why checking for an element can be important in shared JavaScript files.

### 9. Storage key mismatch

Change the `localStorage` key used when saving a preference but not the key used when retrieving it. Test across a page reload and explain the behaviour.

## Debugging evidence

For at least three challenges record:

| Challenge | Symptom | Evidence/tool used | Root cause | Fix | Retest result |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

## Reflection

Which debugging technique was most useful: visual inspection, Elements/Inspector, Console, Network panel, controlled code changes, or another approach? Explain with evidence from your investigation.
