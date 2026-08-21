# Week 14 Lesson Plan – Optimisation & Refinement

**Duration:** 3 hours  
**Learning Aim:** C  
**Prior learning:** Formal testing, defect logging, compatibility checking, implementation evidence.

## Learning objectives

Learners will:

- identify genuine optimisation opportunities from evidence;
- prioritise refinements according to impact and effort;
- compare possible solutions rather than implementing the first idea;
- make justified changes linked to requirements and users;
- preserve before/after evidence;
- retest changed features using comparable conditions;
- check for regression effects;
- judge whether a refinement produced a worthwhile improvement.

## Success criteria

### Developing
I can identify a weakness and make a relevant change.

### Secure
I can justify a change using testing evidence and demonstrate improvement through retesting.

### Extending
I can compare alternatives, prioritise refinements, check for regressions and make a reasoned judgement about the value of the optimisation.

---

## Lesson sequence

| Time | Phase | Teacher activity | Learner activity | Evidence/check |
|---|---|---|---|---|
| 0–10 | Retrieval | Revisit Week 13 testing process | Complete retrieval quiz | Quiz responses |
| 10–25 | Concept | Model difference between fix, refinement and optimisation | Classify example changes | Cold-call questioning |
| 25–45 | Worked example | Walk through Hot Wheels optimisation example | Identify issue, alternatives, evidence and retest | Annotated example |
| 45–65 | Prioritisation | Model impact × effort thinking | Build optimisation priority matrix from own test evidence | Priority matrix |
| 65–75 | Break | — | — | — |
| 75–95 | Alternatives | Model how to compare possible solutions | Complete refinement decision log | Decision rationale |
| 95–125 | Implementation | Coach learners through one evidence-led change | Implement selected refinement | Versioned code/screenshots |
| 125–145 | Retest | Demonstrate comparable retest conditions | Repeat original test and record result | Retest evidence |
| 145–160 | Regression | Model nearby checks after change | Complete regression check | Regression record |
| 160–172 | Before/after | Model evidence comparison | Complete before/after evidence log | Comparison evidence |
| 172–180 | Plenary | Review success of optimisation | Exit ticket | Exit ticket |

---

## Teacher modelling

Use the existing Hot Wheels optimisation example. The key teaching point is not the menu itself; it is the process:

1. identify a real weakness from testing;
2. link the weakness to a user need;
3. consider multiple possible responses;
4. select and justify one response;
5. change the implementation;
6. repeat the original test;
7. perform related regression checks;
8. compare before/after evidence;
9. judge whether the result is genuinely better.

## Distinguish three ideas

### Defect fix
Something did not meet its expected behaviour and is corrected.

### Refinement
Something works, but evidence suggests it can be improved.

### Optimisation
A targeted change improves an aspect such as usability, accessibility, performance, responsiveness, compatibility or efficiency.

These can overlap. The important factor is the evidence trail.

---

## Adaptive teaching

### Support

- provide completed examples of issue → change → retest;
- allow learners to select one high-impact issue rather than many minor ones;
- use impact/effort sentence stems;
- supply a shortlist of optimisation categories;
- encourage screenshots with annotations;
- pair debugging support with independent decision-making.

### Stretch

Ask learners to:

- compare at least three alternatives;
- quantify performance changes where meaningful;
- identify trade-offs introduced by a refinement;
- test at more than one viewport/browser;
- explain why a visually appealing change may still be poor optimisation;
- check whether the optimisation affects another user journey.

---

## English and maths

### English

Learners should write causal, comparative explanations:

> Testing showed… This mattered because… I considered… I selected… because… After retesting… Therefore…

### Maths

Potential quantitative evidence:

- image file size before/after;
- page-weight differences;
- viewport widths;
- time/interaction counts;
- number of failed/passed tests;
- prioritisation scores.

---

## Employability and transferable skills

- evidence-based decision-making;
- iterative development;
- prioritisation;
- change control;
- debugging;
- testing discipline;
- explaining trade-offs;
- quality assurance.

---

## Assessment boundary

Do not tell learners which specific feature to optimise in Hot Beans. Direct them to their own test results and feedback. The learner should choose, justify and implement the change.

## Evidence to retain

Learners should retain:

- original test/feedback evidence;
- the identified weakness;
- alternatives considered;
- reason for priority;
- before version;
- changed version;
- retest result;
- regression checks;
- before/after comparison;
- final judgement.