# Week 10 Teacher Guidance – CSS and Responsive Design

## Curriculum purpose

Week 10 is the second implementation lesson. Learners should move from semantic HTML into presentation and responsive layout without losing the connection to their reviewed design documentation.

The intended progression is:

**semantic structure → presentation rules → layout system → responsive adaptation → accessibility check → test → justify**

The existing Stage 2 Hot Wheels exemplar is especially useful because it develops the same Stage 1 pages largely through one external stylesheet. This makes the separation between structure and presentation visible.

## Key teaching messages

### 1. CSS is not decoration added at the end

CSS decisions affect:

- readability
- hierarchy
- navigation clarity
- responsive behaviour
- accessibility
- maintainability
- perceived consistency and professionalism

Keep asking learners what problem a rule solves.

### 2. Preserve separation of concerns

Stage 2 is deliberately useful because most page structure remains recognisable from Stage 1 while CSS controls presentation. Encourage learners to inspect this relationship rather than treating Stage 2 as an unrelated finished website.

### 3. Teach layout methods as choices

Avoid teaching Flexbox and Grid as two boxes to tick.

Use the question:

> What relationship exists between these items?

Flexbox often suits one-dimensional alignment and distribution. Grid often suits explicit two-dimensional rows and columns. Either can sometimes solve the same problem; selection should be reasoned.

### 4. Breakpoints should emerge from failure

Stage 2 uses 800px and 560px as teaching examples. These are not recommended values for every learner website.

Demonstrate this process:

1. start at a wide viewport
2. reduce width gradually
3. observe where content/layout becomes crowded, unreadable or awkward
4. identify the failure
5. add an adaptation
6. retest above and below the breakpoint

This is stronger than saying “tablet = 800px”.

### 5. Responsive design includes more than columns

Look for:

- navigation behaviour
- line length
- control sizes
- image sizing
- wrapping
- whitespace
- content order
- readable headings
- form usability

### 6. Accessibility is part of implementation

Stage 2 retains semantic HTML/alt text and adds focus styling. Ask learners to navigate with a keyboard. A site with attractive hover effects but invisible focus is not equally usable for keyboard users.

## Stage 2 features worth locating

The exemplar demonstrates:

- `:root` custom properties
- `box-sizing: border-box`
- flex-based page/header layout
- reusable navigation styling
- `:hover` and `:focus-visible`
- constrained content width
- `clamp()` heading sizing
- responsive images
- card presentation
- Grid gallery
- `object-fit: cover`
- form styling
- 800px and 560px media queries

Do not feel obliged to teach every advanced selector in depth. The objective is understanding transferable CSS principles.

## Suggested live-code sequence

Use a neutral mini-page rather than Hot Beans.

1. open unstyled semantic HTML
2. link `style.css`
3. add base typography/background
4. demonstrate box sizing
5. create reusable custom properties
6. build one Flexbox layout
7. build one Grid layout
8. make images flexible
9. narrow the browser until something fails
10. add a media query
11. tab through interactive elements and add focus styling

Then investigate where the same concepts appear in Stage 2.

## Indicative retrieval answers

1. HTML provides structure/meaning.
2. CSS controls presentation/layout.
3. `<link>`.
4. A selector identifies the element(s) a rule applies to.
5. A property identifies what aspect is being styled.
6. A value defines the setting for that property.
7. Content, padding, border, margin.
8. Width/height include padding and border.
9. One stylesheet supports consistency/reuse/maintenance.
10. Navigation/header alignment is a suitable example.
11. Gallery/card rows and columns are suitable examples.
12. It helps stop an image overflowing its container.
13. A conditional block of CSS based on media/viewport characteristics.
14. A point at which responsive rules change layout/behaviour.
15. Because another layout/content set may fail at a different width.
16. It makes keyboard location visible.
17. Keyboard users do not trigger hover in the same way.
18. A reusable named CSS value, usually beginning `--`.
19. Adapting presentation/layout so content remains usable across available space.
20. Responsive.

## Common weak learner behaviours

### Copying the entire stylesheet

Intervention: ask the learner to close Stage 2 and explain their own design requirement. Which specific technique do they need and why?

### Random trial-and-error values

Intervention: require a prediction before changing the value and a brief record of the observed effect.

### Device-name breakpoint thinking

Intervention: resize continuously and ask the learner to point to the exact moment their content needs adaptation.

### Grid/Flexbox confusion

Intervention: sketch the content relationships as one direction versus rows/columns.

### Removing focus outlines

Intervention: require keyboard-only navigation before accepting the styling change.

### Fixed-width images/layout

Intervention: test at 390px and ask what is overflowing and why.

## Adaptive teaching

### Support

- keep an HTML/CSS syntax reference visible
- provide one small sandbox with named classes
- use browser dev tools to change rules before editing files
- limit initial responsive work to one clear layout problem
- pair a screenshot with a CSS rule and ask learners to match cause/effect
- use a fault checklist: syntax, selector, linked file, cascade, width, overflow

### Stretch

- inspect specificity and inherited styles
- compare custom properties with repeated literal values
- evaluate `clamp()` for type scaling
- investigate advanced selectors such as `:has()` without making them mandatory
- rebuild a gallery using both Grid and Flexbox, then justify the preferred approach
- test unusual content lengths to expose brittle layouts

## English, mathematics, EDI and employability

**English:** precise technical explanations and justified implementation decisions.

**Mathematics:** proportions, fractional grid units, viewport dimensions, spacing and relative sizing.

**EDI:** responsive layouts should not assume all users have large screens, pointer input or identical visual needs. Keep keyboard visibility and readable contrast in discussion.

**Employability:** connect to front-end workflows: design implementation, component styling, responsive QA, debugging and code review.

## Assessment integrity

Learners can inspect and alter Stage 2 in temporary copies. Do not allow the exemplar stylesheet to become the basis of the assessed Hot Beans visual design. When supporting assessed work, ask questions about the learner's own design evidence and help diagnose technical issues without creating their finished CSS for them.

## End-of-week readiness

A learner ready for Week 11 should be able to show:

- meaningful semantic HTML from Week 9
- an external stylesheet
- intentional typography/spacing/colour
- a coherent layout
- responsive images
- at least one tested responsive adaptation
- visible focus styling
- identified implementation defects

JavaScript should be added next only where the HTML/CSS solution genuinely needs behaviour.