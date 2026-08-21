# Week 10 Lesson Plan – CSS and Responsive Design

**W/B:** 16 November 2026  
**Duration:** 3 hours  
**Specification focus:** B2 / C1  
**Assessment preparation:** C.P4

## Learning outcomes

Learners will be able to:

1. Explain the different responsibilities of HTML and CSS.
2. Write valid CSS rules using selectors, properties and values.
3. Use an external stylesheet across multiple pages.
4. Apply spacing, typography, colour and the box model consistently.
5. Select Flexbox or Grid for an appropriate layout problem.
6. Build responsive layouts and images.
7. Use media queries and test breakpoint behaviour.
8. Include visible hover/focus states.
9. Transfer CSS techniques into their own reviewed website design.

## Key terminology

CSS, stylesheet, selector, declaration, property, value, cascade, specificity, inheritance, box model, content, padding, border, margin, custom property, variable, Flexbox, Grid, breakpoint, media query, responsive design, viewport, focus state, hover state, contrast, `object-fit`, `clamp()`.

## Resources

- Week 10 slides
- retrieval quiz
- CSS mini-lab
- Stage 1 → Stage 2 comparison activity
- responsive breakpoint investigation
- implementation checklist
- exit ticket
- `stage-1-html-foundation/`
- `stage-2-responsive-design/`
- learner reviewed design evidence

## Lesson sequence

| Time | Teacher activity | Learner activity | Assessment / evidence |
|---|---|---|---|
| 00:00–00:15 | Run retrieval from Week 9. Revisit structure vs presentation. | Complete retrieval quiz and explain HTML/CSS responsibilities. | Diagnostic questioning. |
| 00:15–00:35 | Model linking `style.css` and CSS rule anatomy. Introduce cascade/inheritance at an accessible level. | Complete short selector/property/value tasks and style a neutral HTML fragment. | Live code check. |
| 00:35–00:55 | Teach box model, spacing, typography, colour and custom properties. | Predict and test how margin/padding/border change element dimensions and spacing. | Mini-lab evidence. |
| 00:55–01:10 | Demonstrate Flexbox using a simple one-dimensional layout. | Modify direction, alignment and gap values. | Observation/questions. |
| 01:10–01:20 | Demonstrate Grid using a small card/gallery example. | Change column definitions and compare with Flexbox. | Technique-selection questions. |
| 01:20–01:30 | Show Stage 1 and ask learners to predict what CSS must solve before revealing Stage 2. | Record at least five predicted improvements. | Prediction notes. |
| 01:30–01:40 | Break. | — | — |
| 01:40–02:00 | Reveal Stage 2. Facilitate investigation rather than line-by-line explanation. | Compare Stage 1 and Stage 2; locate custom properties, Flexbox, Grid, focus styling and image rules. | Comparison activity. |
| 02:00–02:20 | Demonstrate responsive testing in browser dev tools. Explain content-led breakpoints and media queries. | Change Stage 2 breakpoint values temporarily and record effects at different widths. | Breakpoint investigation. |
| 02:20–02:35 | Model accessibility checks: keyboard focus, readable contrast, flexible text/images, controls. | Navigate by keyboard and identify whether interaction remains visible and usable. | Accessibility check. |
| 02:35–02:50 | Release learners to their own assessed project. Circulate with questions rather than solution code. | Implement CSS from their reviewed design and test at multiple widths. | Practical progress toward C.P4. |
| 02:50–03:00 | Run implementation audit and exit ticket. | Record what works, what needs fixing and one justified CSS decision. | Exit evidence. |

## Teacher modelling sequence

For each CSS technique, use this pattern:

1. identify the layout/presentation problem
2. show the smallest relevant CSS rule
3. predict its effect
4. run it
5. inspect the result
6. change one value
7. explain what changed and why
8. ask whether the same choice would suit another website

This prevents CSS becoming a collection of values to copy.

## Adaptive teaching

### Support

- provide a CSS rule frame:

```css
selector {
    property: value;
}
```

- use a labelled box-model diagram
- provide a small neutral sandbox before whole-site coding
- restrict initial layout choice to a simple Flexbox row/column
- provide a browser-width test table
- use prompts: **What problem are you solving? Which CSS feature solves it?**

### Stretch

- require explanation of cascade/specificity when rules conflict
- compare `rem`, `%`, `vw` and fixed pixels where appropriate
- redesign one Stage 2 layout using a different technique
- justify why a breakpoint occurs at a content failure point
- evaluate whether `:has()`, `clamp()` or custom properties improve maintainability

## English and mathematics

**English:** precise technical vocabulary, annotation, explanation of cause/effect, justified design decisions.

**Mathematics:** dimensions, proportions, percentages, grid fractions, spacing scales and viewport widths.

## EDI / British Values / employability

Discuss inclusive responsive design and keyboard accessibility. Emphasise that device access, visual needs and interaction methods vary. Link CSS debugging, code review and responsive QA to professional front-end development practice.

## Misconceptions to anticipate

- CSS changes the meaning/semantic structure of HTML
- every page should have its own duplicate stylesheet
- more CSS means a better website
- Flexbox and Grid are interchangeable in every situation
- responsive design means only making things smaller
- breakpoints should always use standard device widths
- hover styling alone is sufficient for keyboard users
- an image is responsive because it fits on one screen size
- copying the Stage 2 values demonstrates understanding

## Assessment boundary

Use Hot Wheels for demonstration and experimentation. When learners move to their assessed website, tutor support should focus on interpreting their reviewed design, debugging principles and technique selection rather than supplying a completed CSS solution.

## End-of-lesson readiness

Before Week 11, learners should ideally have:

- a linked external stylesheet
- core typography/colour/spacing implemented
- navigation/layout taking shape
- responsive images
- at least one responsive adaptation tested
- evidence that keyboard focus is visible
- notes on defects or unfinished CSS work

Week 11 can then add JavaScript to an HTML/CSS foundation that remains usable without scripting.