# Week 12 Lesson Plan – Development, Compatibility & Implementation Evidence

**W/B:** 30 November 2026  
**Duration:** 3 hours  
**Learning Aim:** C

## Learning objectives

Learners will:

- consolidate HTML, CSS and JavaScript into a coherent website;
- compare implementation against reviewed designs and client requirements;
- test compatibility during development rather than waiting until the end;
- diagnose and record defects systematically;
- preserve meaningful evidence of development and refinement.

## Key terminology

compatibility, defect, bug, regression, implementation, traceability, validation, debugging, browser, viewport, responsive, consistency, severity, priority, retest, evidence, version, refinement, technical debt.

## Resources

- Week 12 slides
- retrieval quiz
- implementation-status audit
- compatibility matrix
- defect and fix log
- requirement traceability audit
- readiness checklist
- exit ticket
- learners' own reviewed designs and developing websites
- repository development/testing examples

## Lesson sequence

| Time | Teacher activity | Learner activity | Assessment / evidence |
|---|---|---|---|
| 00:00–00:15 | Run retrieval and explain the difference between a working feature and a coherent finished implementation. | Complete retrieval and implementation-status audit. | Diagnostic evidence. |
| 00:15–00:35 | Model a whole-site consistency check: navigation, headings, paths, stylesheet/script links, content hierarchy and responsive behaviour. | Audit one page, then compare it with a second page. | Page consistency notes. |
| 00:35–00:55 | Demonstrate compatibility checks across viewport sizes and browsers. Explain that device presets are approximations, not proof of device testing. | Complete initial compatibility checks on one key user journey. | Compatibility matrix entries. |
| 00:55–01:20 | Facilitate development sprint 1. Use questioning rather than supplying assessed code. | Implement highest-priority missing features or fixes from audit. | Code/version evidence. |
| 01:20–01:30 | Break. | — | — |
| 01:30–01:50 | Model debugging using a neutral defect: reproduce → isolate → inspect → fix → retest → record. | Complete defect/fix record for one genuine issue. | Defect log. |
| 01:50–02:15 | Facilitate development sprint 2 and require evidence capture. | Continue development; preserve before/after evidence for at least one change. | Screenshots/code/version notes. |
| 02:15–02:35 | Run compatibility/responsive workshop. | Test key pages/features at multiple widths and available browsers. | Compatibility matrix. |
| 02:35–02:50 | Model requirement traceability. | Map requirements to implemented features and evidence; identify gaps. | Traceability audit. |
| 02:50–03:00 | Complete readiness review. | Complete checklist and exit ticket. | Individual readiness evidence. |

## Teacher modelling

### Model one defect properly

Avoid instantly editing the code. Demonstrate:

1. reproduce the issue;
2. state the expected result;
3. observe the actual result;
4. inspect relevant HTML/CSS/JS;
5. isolate the likely cause;
6. make one justified change;
7. retest under the same condition;
8. record the outcome.

Emphasise that a fix without a retest is incomplete.

### Model compatibility as risk checking

Use one feature and vary:

- viewport width;
- browser;
- keyboard/mouse interaction;
- content length if appropriate.

Ask what breaks first and why.

## Adaptive teaching

### Support

- page-level audit before whole-site audit
- traffic-light status for requirements
- fixed debugging checklist
- sentence stems: **Expected… Actual… Cause… Fix… Retest…**
- focus on one key user journey first

### Stretch

- prioritise defects by severity and user impact
- explain browser/viewport differences
- identify regressions after a fix
- refactor duplicate CSS/JavaScript
- explain when an implementation difference from the original design is justified

## English and mathematics

**English:** concise technical records, causal explanation, precise defect descriptions, evidence-based justification.

**Mathematics/computational thinking:** breakpoint thresholds, dimensions, proportional layouts, Boolean conditions, prioritisation and test coverage.

## EDI / employability

Require checks that consider keyboard users, different screen sizes and readable interfaces. Relate the workflow to professional QA, browser testing, ticketing, code review and iterative development.

## Misconceptions to anticipate

- if it works in one browser it is finished
- responsive mode proves real-device compatibility
- a screenshot is enough development evidence
- every difference from the wireframe is a mistake
- fixing code automatically proves the defect is resolved
- more features are more important than reliable existing features

## Assessment boundary

Tutor support should focus on process, debugging strategy, compatibility methodology and evidence structure. Do not write learner-specific assessed solutions.

## End-of-week readiness

Before Week 13, learners should ideally have:

- all core pages present
- consistent navigation
- responsive styling substantially implemented
- required interactive features functioning
- initial compatibility evidence
- a defect/fix record
- requirement traceability showing remaining gaps
- a clear list of issues to address through formal testing.