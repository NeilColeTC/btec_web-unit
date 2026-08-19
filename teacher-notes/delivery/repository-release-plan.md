# Repository Release Plan

## Purpose

The repository is most effective when learners encounter it as a sequence of increasingly sophisticated examples rather than receiving every stage at once.

This release plan defines suggested access gates and the teaching purpose of each gate.

## Gate 1 — Brief only

Release:

- `client-brief/hot-wheels-exemplar-brief.md`

Do not yet release the exemplar stages.

### Purpose

Learners should first interpret the fictional requirements independently. Ask them to predict page structure, audience needs, content and likely functionality before seeing an implementation.

### Teacher check

Before moving on, learners should be able to explain at least one plausible site structure and justify it from the brief.

---

## Gate 2 — Stage 1 HTML

Release:

- `stage-1-html-foundation/`

Optional supporting material:

- relevant parts of `learner-resources/`

### Purpose

Learners compare their interpretation with one developer's HTML implementation and investigate semantic structure, navigation, forms, links and images.

### Hold back

- Stage 2
- Stage 3

The absence of CSS is useful. Learners should focus on structure and meaning before presentation.

---

## Gate 3 — Stage 2 CSS and responsive design

Release:

- `stage-2-responsive-design/`
- `learner-activities/stage-comparison.md`
- `learner-activities/design-decisions.md`
- `learner-activities/accessibility-audit.md`

### Purpose

Learners compare Stage 1 and Stage 2 and investigate why CSS techniques were selected.

### Hold back

- Stage 3 until learners have investigated the Stage 2 implementation

---

## Gate 4 — Stage 3 JavaScript

Release:

- `stage-3-javascript-refinement/`
- `learner-activities/debugging-challenges.md`
- optional `learner-activities/extension-challenges.md`

### Purpose

Learners identify purposeful client-side behaviour, connect visible features with programming constructs and investigate progressive enhancement and debugging.

---

## Gate 5 — Testing and optimisation

Release:

- `learner-activities/testing-workbook.md`
- `learner-activities/performance-investigation.md`
- `learner-resources/testing-example.md`
- `learner-resources/optimisation-example.md`

### Purpose

Learners move from implementation to evidence-led testing, defect recording, improvement and retesting.

---

## Gate 6 — Exit the exemplar

Release/use:

- `learner-activities/now-build-yours.md`
- approved assessed Hot Beans client brief

### Purpose

This is a deliberate transition point.

Learners should stop extending Hot Wheels and begin applying what they have learned to their own client problem.

A useful teacher statement is:

> The exemplar has now done its job. Your next decisions should come from your own brief, designs, audience and testing evidence.

## Why progressive release matters

Releasing the complete Stage 3 site on day one makes it easier for learners to treat the exemplar as a starting template.

Progressive release instead encourages:

- prediction before viewing a solution
- comparison between stages
- understanding of technology responsibilities
- explicit reasoning about changes
- independent transfer rather than surface imitation

## Practical release options

Depending on local systems, teachers may implement gates by:

- releasing folders/resources through the VLE at the appropriate time
- publishing tagged ZIP packages
- directing learners only to the relevant GitHub paths
- maintaining teacher and learner branches/repositories where appropriate

The exact technical method is less important than preserving the instructional sequence.
