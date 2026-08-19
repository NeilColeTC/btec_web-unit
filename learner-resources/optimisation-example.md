# Worked Optimisation Example – Hot Wheels

Optimisation is demonstrated here as an evidence-led development process rather than a claim that the website has simply been "improved".

## Example: mobile navigation refinement

### 1. Identify the issue

Testing on a narrow viewport shows that the navigation is functional, but displaying all links continuously takes up a large proportion of the screen.

### 2. Relate it to the user

A mobile user should be able to reach navigation when required without it dominating the page content.

### 3. Consider alternatives

Possible responses include:

- leave the links visible and reduce their spacing
- use a horizontally scrolling navigation bar
- introduce a menu control that reveals the links when required

Each option has advantages and disadvantages. The selected solution should be justified rather than treated as the only possible answer.

### 4. Make a recorded change

In Stage 3, JavaScript and CSS are used together so the navigation can be revealed using a menu button on narrower screens. The button also exposes its state using `aria-expanded`.

### 5. Retest

Repeat the original navigation tests after the change. Check:

- narrow-screen usability
- keyboard operation
- menu state
- access to every page
- behaviour after returning to a wider viewport
- more than one browser/device where available

### 6. Compare before and after

Keep evidence of both versions. Screenshots can show visual changes, while test results should show whether the change actually addressed the identified issue.

### 7. Evaluate

An optimisation is not automatically successful because code was changed. The conclusion should be based on the retest evidence and any relevant user feedback.

## Transfer the process, not the solution

The assessed website may have completely different issues. Do not manufacture the Hot Wheels issue in another project merely so that it can be "fixed". Test the actual solution, identify genuine weaknesses, make justified refinements and retain evidence of the development.
