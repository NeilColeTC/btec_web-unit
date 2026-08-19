# Weekly Teaching Notes

These notes provide practical prompts for delivery of the four-week exemplar journey. They are intentionally concise and adaptable rather than scripted lesson plans.

## Week 1 — Requirements and HTML

### Useful opening questions

- What information does this fictional client appear to need on the site?
- Who might use the site?
- Which pages would you expect before seeing any code?
- What belongs in HTML and what does not?

### Teaching emphasis

Focus on:

- document structure
- headings and paragraphs
- semantic elements
- navigation and relative paths
- images and alternative text
- forms and labels
- metadata

### Likely misconceptions

- HTML is mainly for visual formatting.
- A heading is chosen because of its size rather than structure.
- `alt` text should simply repeat a filename.
- Links between local pages need full web addresses.
- A form is complete merely because controls are visible.

### Practical prompts

Ask learners to:

- trace the navigation manually
- predict what will happen if a relative path is changed
- identify semantic landmarks
- inspect label/input relationships
- add one appropriate section without styling it

### Plenary ideas

Ask learners to explain one decision in Stage 1 that supports accessibility or maintainability.

---

## Week 2 — CSS and responsive design

### Useful opening questions

- Stage 1 works, so why do we need CSS?
- Which visual problems should be solved without changing page meaning?
- When should Grid be preferred to Flexbox?
- What makes a breakpoint appropriate?

### Teaching emphasis

Focus on:

- external CSS
- selectors
- cascade/inheritance at an introductory practical level
- box model
- reusable variables/custom properties
- Flexbox
- Grid
- responsive images
- media queries
- focus and hover states

### Likely misconceptions

- Grid and Flexbox are interchangeable.
- responsive design means making everything smaller
- every site should use the same standard breakpoints
- mobile design is a separate website
- accessibility is achieved simply by adding colour contrast

### Practical prompts

Ask learners to:

- disable the stylesheet and observe what remains
- find one Flexbox and one Grid example
- alter a breakpoint
- alter one custom property and observe site-wide impact
- keyboard-navigate through links and form controls

### Plenary ideas

Ask learners to justify one CSS technique and name a situation in which they would choose a different approach.

---

## Week 3 — JavaScript and interaction

### Useful opening questions

- Which useful behaviours cannot Stage 2 currently provide?
- Does every interactive-looking feature need JavaScript?
- What should still work if JavaScript fails?

### Teaching emphasis

Use visible features to teach:

- constants/variables
- functions
- parameters
- return values
- decisions
- arrays
- iteration
- events
- DOM selection/manipulation
- local storage
- defensive checks

### Likely misconceptions

- JavaScript should be added wherever possible.
- a feature is better because it is more complex
- DOM manipulation and HTML are the same thing
- client-side validation guarantees valid data
- a console error is only relevant to advanced programmers

### Practical prompts

Ask learners to:

- identify the event that triggers each feature
- disable JavaScript
- change one greeting threshold
- break an element ID in a temporary copy
- inspect the Console and Network panels
- explain why the shared script checks whether target elements exist

### Plenary ideas

Choose one Stage 3 feature and ask learners to argue whether it is essential, useful or cosmetic.

---

## Week 4 — Testing, optimisation and transition

### Useful opening questions

- How can we prove that Stage 3 works?
- Is a page with no obvious errors necessarily finished?
- Why are failed tests useful evidence?
- Can an optimisation make something worse?

### Teaching emphasis

Focus on:

- planned testing
- expected vs actual results
- test data/conditions
- defect recording
- retesting
- compatibility and accessibility
- performance investigation
- image size/format trade-offs
- evidence-led improvement

### Likely misconceptions

- testing means clicking around until nothing appears broken
- every test should pass
- screenshots alone prove successful testing
- smaller files are always better regardless of quality
- optimisation happens only after a site is complete

### Practical prompts

Ask learners to:

- write tests before executing them
- deliberately include edge/invalid conditions
- optimise a copy of one image and compare results
- record a defect and retest it
- explain whether evidence demonstrates a genuine improvement

### Final transition

End the exemplar explicitly. Use `learner-activities/now-build-yours.md` and return attention to the approved Hot Beans client brief.

The final discussion should emphasise that learners may reuse knowledge and techniques, but their assessed design and implementation decisions must arise from their own client requirements.
