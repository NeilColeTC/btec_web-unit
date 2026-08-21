# BTEC Unit 6 Website Development – Course & Teaching Exemplar

This repository contains a complete **17-week teaching framework** for Pearson BTEC Level 3 **Unit 6: Website Development**, together with a staged website-development exemplar used to teach practical techniques.

The assessed scenario is **Hot Beans Web**. The worked teaching exemplar deliberately uses a separate fictional **Hot Wheels** context so that learners investigate techniques and development methodology without being handed a near-complete assessed solution.

## Curriculum model

The overall course progression is:

> **analyse → design → review → implement → test → optimise → evaluate → finalise**

Learners should increasingly connect every decision to:

> **purpose → audience → requirements → evidence → judgement**

## Start here

### Teachers

- [`curriculum/curriculum-sequence.md`](curriculum/curriculum-sequence.md) — 17-week curriculum overview
- [`curriculum/assessment-map/criteria-to-weeks.md`](curriculum/assessment-map/criteria-to-weeks.md) — assessment progression by week
- [`assessment/assessment-evidence-map.md`](assessment/assessment-evidence-map.md) — evidence chains and criterion preparation
- [`teacher-notes/course-delivery-quick-start.md`](teacher-notes/course-delivery-quick-start.md) — practical delivery guide
- [`teacher-notes/specification-mapping.md`](teacher-notes/specification-mapping.md) — exemplar/specification mapping

### Learners

Each `week-XX-*` directory contains the resources for that stage of the course. An optional evidence-organisation model is available in [`templates/student-project/README.md`](templates/student-project/README.md).

## 17-week teaching sequence

| Weeks | Phase | Main focus |
|---|---|---|
| **1–4** | Understand websites | Purpose, audiences, design principles, creativity, SEO, performance, comparison, analysis and evaluation |
| **5–8** | Design | Client requirements, visual/technical design, alternatives, review, refinement and justification |
| **9–12** | Develop | Semantic HTML, CSS/responsive design, JavaScript, compatibility, debugging and implementation evidence |
| **13–14** | Test and optimise | Formal testing, defects, retesting, evidence-led refinement and regression checks |
| **15–17** | Evaluate and finalise | Evidence-based evaluation, professional practice, final verification and submission readiness |

Every teaching week follows a common framework built around:

```text
week-XX-topic/
├── README.md
├── lesson-plan/
├── slides/
├── student-activities/
├── assessment-checks/
└── teacher-resources/
```

The exact number of learner activities/checks varies according to the needs of the week.

## Repository structure

```text
curriculum/
    curriculum sequence and assessment progression

assessment/
    assessment/evidence mapping

templates/
    optional learner evidence-organisation structure

week-01-... through week-17-.../
    complete weekly teaching packages

client-brief/
    Hot Wheels exemplar brief

stage-1-html-foundation/
    HTML structure and content

stage-2-responsive-design/
    the same exemplar developed with external CSS and responsive layout

stage-3-javascript-refinement/
    the exemplar enhanced with purposeful client-side scripting

learner-resources/
    technique map, development process, testing and optimisation examples,
    and assessment-boundary guidance

learner-activities/
    reusable exemplar investigations and practical activities

teacher-notes/
    course delivery, specification mapping, teaching sequence,
    assessment-boundary guidance and Git/GitHub workflow

shared-assets/
    optional shared/source assets and attribution information
```

## The three exemplar stages

### Stage 1 – HTML Structure

Demonstrates semantic HTML, metadata, headings, navigation, links, images and alternative text, lists and a range of form controls.

### Stage 2 – CSS & Responsive Design

Develops the same pages using external CSS, custom properties, spacing, typography, Flexbox, Grid, responsive images, focus/hover states and media queries.

### Stage 3 – JavaScript & Refinement

Adds purposeful client-side behaviour including a time-based greeting, persistent theme preference, responsive menu, form validation and scroll-to-top interaction. The scripting demonstrates functions, parameters, decisions, events, methods, arrays, iteration and DOM manipulation.

The staged structure makes it possible to investigate **what changed, why it changed and which technology is responsible**.

## How learners should use the exemplar

Learners may inspect, run, modify, test and critique the Hot Wheels exemplar while learning. They should ask:

- what problem does this technique solve?
- what user/client need does it support?
- what alternatives could have been used?
- how could the feature be tested?
- what accessibility or performance considerations apply?
- would the same technique be appropriate in my own solution?

The intended transfer is **knowledge and method, not the finished exemplar solution**.

## Assessment and evidence

The weekly curriculum supports preparation for:

- Learning Aim A: A.P1, A.M1, A.D1
- Learning Aim B: B.P2, B.P3, B.M2
- Learning Aim C: C.P4, C.P5, C.P6, C.M3
- Combined B/C: BC.D2, BC.D3

Completing a repository activity does **not** automatically achieve a criterion. Assessment decisions must be based on the learner's own evidence produced in response to the approved assignment.

Useful recurring evidence chains include:

**Design:** requirement → option → decision → review → refinement → justification

**Development/testing:** requirement → implementation → test → result → issue → fix → retest

**Evaluation:** requirement → evidence → consequence → limitation/trade-off → alternative → judgement

## Assessment boundary

For the assessed Hot Beans Web project, learners should return to the approved client brief and make their **own** decisions about requirements, designs, assets, content, responsive behaviour, original client-side scripting, testing, optimisation and evaluation.

The repository deliberately does not provide completed Hot Beans wireframes, site maps, code, test results, optimisation evidence or assignment-ready evaluation.

The exemplar should also not be treated as a checklist of features every assessed website must contain. **Appropriate selection, justification, testing and refinement are more important than reproducing every demonstrated technique.**

## Evidence integrity

Learners should preserve authentic development evidence as they work. Missing historical reviews, tests, screenshots or development stages should not be fabricated at the end of the project. Existing evidence may be organised and explained more clearly; genuine evidence gaps should remain identifiable.

## Course end state

By the end of Week 17, a learner should be able to explain:

- what the client required;
- how their design responded;
- why key decisions were made;
- how the website was implemented;
- what testing revealed;
- what was refined and why;
- how successfully the final solution meets its purpose and user needs;
- what limitations remain;
- how their own working practices affected the outcome.