# Week 11 Teacher Guidance – JavaScript & Purposeful Interaction

## Teaching intent

Week 11 should not become a race to add effects. Its purpose is to establish **purposeful client-side scripting** and the ability to explain code as a response to a user/interface need.

The Stage 3 exemplar is especially useful because it develops the same site used in Stages 1 and 2. Learners can therefore see what JavaScript adds rather than confusing content, presentation and behaviour changes.

---

## Core message

Repeatedly ask:

> **Why does this feature need JavaScript?**

A technically impressive script that does not support the brief, audience, usability or functionality is weaker evidence than a modest feature that is clearly designed, implemented, tested and justified.

---

## Retrieval indicative answers

1. HTML provides document structure/meaning/content organisation.
2. CSS controls presentation/layout.
3. Semantic HTML uses elements according to meaning/purpose rather than appearance alone.
4. External stylesheets separate reusable presentation rules from page markup.
5. Content, padding, border and margin.
6. One-dimensional alignment/layout such as navigation/header arrangements.
7. Two-dimensional layouts such as galleries/card grids.
8. A conditional CSS rule based on media/environment characteristics such as viewport width.
9. Layout failures occur between arbitrary device categories; responsiveness is continuous.
10. Keyboard users need to know which interactive control currently has focus.
11. Text alternative/meaning for users who cannot access the image visually and for image failure contexts where appropriate.
12. Implementation should demonstrate fitness for purpose rather than arbitrary technique use.

Challenge: any question equivalent to *What requirement/user problem will the script solve?*

---

## Stage 3 feature guidance

### Time-based greeting

Constructs visible in the exemplar include:

- `DOMContentLoaded` initialisation;
- functions;
- parameter `hour`;
- `if / else if / else`;
- return values;
- `Date`;
- DOM selection;
- `textContent` update.

Useful boundary tests include 11/12 and 17/18 because they sit immediately either side of branch changes.

### Persistent theme

Look for:

- DOM selection;
- early return if button absent;
- `localStorage.getItem()`;
- class add/toggle/contains;
- click event;
- conditional expression;
- `localStorage.setItem()`;
- accessible button text/label update.

The storage key in the current exemplar is `hot-wheels-theme`.

### Responsive navigation

Look for:

- click event;
- navigation class toggle;
- returned Boolean from `classList.toggle()`;
- `aria-expanded` update;
- accessible hidden label update.

Emphasise synchronisation of visual and accessibility state.

### Form validation

The current exemplar:

- prevents default submission;
- reads name/email/message;
- trims strings;
- builds a `checks` array;
- iterates using `forEach`;
- pushes messages into `errors`;
- returns the errors array;
- creates DOM list elements for feedback.

The email test is deliberately simple (`@` and `.`). Learners should recognise that this is a teaching demonstration, not production-grade validation.

### Scroll-to-top

Look for:

- scroll event;
- nested helper function;
- threshold `window.scrollY > 300`;
- conditional class state;
- click event;
- `window.scrollTo()` with smooth behaviour.

Useful tests include values/positions around the threshold.

---

## Important misconceptions

### “JavaScript makes a website responsive”

Clarify that responsive **layout** is primarily demonstrated through CSS in Stage 2. JavaScript may coordinate responsive *behaviour* such as a menu control.

### “Client-side validation secures the form”

False. Client-side checks improve immediate feedback but can be bypassed. Real submitted data must be treated as untrusted and validated appropriately server-side.

### “More JavaScript means a higher grade”

Avoid technique counting. Evidence quality comes from appropriateness, implementation, testing, refinement and explanation against requirements.

### “I can use the Stage 3 code because it is in the teaching repo”

The exemplar exists for investigation and controlled modification. Learners' assessed implementation must arise from their own reviewed design and decisions.

---

## Mini-lab support

For learners who struggle, reduce the problem to four questions:

1. What element do I need?
2. What event am I waiting for?
3. What should happen?
4. What visible/state change proves it happened?

Encourage console inspection before code rewriting.

---

## Stage 3 investigation – expected observations

Learners should identify the staged separation:

- Stage 1: semantic HTML/content;
- Stage 2: external CSS/responsive presentation;
- Stage 3: client-side behaviour/validation/persistence/refinement.

Strong responses will discuss *why* a feature was added, not simply describe the effect.

For progressive enhancement, learners should recognise that the semantic content from earlier stages provides a baseline even when enhanced behaviours are unavailable.

---

## Assessment-safe implementation coaching

Appropriate teacher prompts:

- What requirement are you addressing?
- Show me where that appears in your design.
- What event should trigger it?
- What should the user see/hear afterwards?
- Can HTML or CSS already do this?
- What values would break this condition?
- How will a keyboard user operate it?
- What evidence will prove it works?

Avoid writing the learner's final assessed function for them.

---

## Evidence quality

Encourage learners to preserve development evidence while working:

**requirement → design intention → code → test → issue → refinement → retest → explanation**

This is much stronger than a final screenshot and a large unexplained code dump.

---

## Exit-ticket indicative answers

1. Code registering a function/handler to run when a specified event occurs.
2. Browser object representation of the document that scripts can inspect/change.
3. A parameter lets a function receive a value/input so the same behaviour can work with different data.
4. 69 and 70 are the strongest pair because the outcome changes at 70.
5. Browser-side code can be bypassed/altered; server-side validation is required for submitted data in real systems.
6. Examples: toggling a theme class, menu-open class, persistent preference.
7. To communicate interface state to assistive technologies, e.g. whether a controlled menu is expanded.
8. Accept any feature with a clear need → behaviour → justification chain.

---

## Preparation for Week 12

By the end of Week 11 learners should have enough implementation experience to move into broader development, compatibility and systematic testing. They should also have started collecting evidence rather than waiting until the website is finished.