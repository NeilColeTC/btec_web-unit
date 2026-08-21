# Week 13 Teacher Guidance – Formal Website Testing

## Teaching intent

Week 13 should make testing visible as a professional development process rather than a final checklist. The objective is not to produce the greatest number of rows in a table; it is to produce credible evidence that important requirements and risks have been tested systematically.

The repository's existing testing workbook already structures evidence into a test plan, execution record, defect record, retesting and evaluation. Use Week 13 to turn that structure into disciplined learner practice.

---

## Core model

Repeat throughout the session:

> **requirement → test → expected result → actual result → defect → change → retest → evidence**

If learners can narrate that chain using their own work, the testing evidence is becoming meaningful.

---

## Retrieval indicative answers

1. A requirement states what the client/user needs; a design decision is the learner's chosen way of responding.
2. A layout/interface adapts appropriately to different viewport sizes/content conditions.
3. Important website behaviour remains acceptable across relevant/available browsers and environments.
4. It provides immediate browser-side input checks/feedback; it does not replace secure server-side validation.
5. The result that should occur if the feature behaves correctly.
6. A value at or immediately around a decision/limit.
7. Because the failure provides evidence for diagnosis, improvement and retesting.
8. Repeating a test after a change to determine whether the issue is resolved.
9. Examples: keyboard-only navigation, visible focus, form labels, alt text, heading structure, state announcements.
10. It does not define conditions, expected outcomes, coverage or reproducible evidence.

---

## Worked Hot Wheels example

The existing worked example is useful because NAV-01 does not simply say “Fail”. It records that all links remain available, but narrow-screen usability is weak because the navigation occupies too much vertical space. This models an important idea: a feature can technically function and still reveal a usability issue worth refining.

Do not let learners copy NAV-01 etc. into assessed work. Ask them to identify equivalent risks in their own implementation.

---

## Test-plan quality

A useful test should answer:

1. **What** requirement/feature is being tested?
2. **How** will it be tested?
3. **Under what condition/data**?
4. **What should happen**?
5. **What evidence** can be captured?

If a test says only “Test home page” or “Check form”, return it for refinement.

---

## Test data

### Normal
Typical valid behaviour/data.

### Boundary
At or immediately around a threshold or rule change.

### Erroneous
Invalid/unexpected data that should be handled gracefully.

Stress that these categories are useful where appropriate. Navigation links and layout checks often need conditions rather than artificial “boundary data”.

---

## Defect discipline

Learners often fix defects as soon as they notice them. For assessment evidence, encourage this sequence:

1. reproduce;
2. record expected/actual;
3. capture evidence;
4. assign defect ID;
5. diagnose likely cause;
6. change code/content;
7. retest;
8. preserve before/after evidence.

This prevents the development journey disappearing.

---

## Severity

Use impact rather than difficulty-to-fix:

- **High:** essential requirement/user journey blocked;
- **Medium:** significant usability/accessibility/functionality issue;
- **Low:** minor issue with limited user impact.

A one-line CSS fix could still address a high-severity defect.

---

## Retesting and regression

Retesting should repeat the original condition as closely as possible. This enables fair comparison.

Introduce regression thinking gently:

> If I changed this feature, what else might I have affected?

Examples:

- mobile navigation fix → recheck desktop navigation;
- form validation change → recheck valid and invalid cases;
- shared CSS change → recheck other pages/components.

---

## Adaptive teaching

### Support

Provide sentence frames such as:

> At **condition**, I will **action**. I expect **result**.

> The defect observed was **specific symptom**. I think the cause is **cause** because **evidence**.

> After changing **change**, I repeated **test** and observed **new result**.

Allow learners to begin with five high-value tests, then expand coverage.

### Stretch

Ask learners to:

- prioritise tests by requirement risk;
- identify ambiguous pass/fail criteria;
- distinguish compatibility from pixel-identical rendering;
- combine browser and viewport conditions;
- design regression tests;
- explain whether an unresolved low-severity issue should block submission;
- evaluate testing limitations.

---

## Assessment-safe support

Appropriate prompts:

- Which requirement does this prove?
- What exact condition will you use?
- What should happen before you run it?
- Is there a meaningful boundary here?
- How will another person reproduce this test?
- What evidence proves the failure?
- What nearby feature might the fix affect?

Avoid composing the learner's full assessed test plan or inventing defects for them.

---

## Evidence expectations by the end of the session

A secure learner should have:

- a requirement-linked test plan;
- executed tests across sensible categories;
- expected and actual results;
- captured evidence;
- genuine defect records where issues occur;
- at least one documented fix and retest;
- remaining issues/gaps identified honestly.

---

## Exit-ticket indicative answers

1. It defines success objectively before the observed result can influence judgement.
2. Example: one character and two characters for a minimum length of two; 69/70 for a `>=70` branch.
3. A failed test is an outcome; a defect record documents the specific problem, evidence/cause and subsequent change.
4. To preserve evidence of the issue and demonstrate the reason for improvement.
5. Repeating a relevant test after a change.
6. So before/after results are comparable.
7. Any valid example such as keyboard navigation and visible focus.
8. `test`; `actual result`; `retest`.
9–10. Individual evidence-based responses.

---

## Preparation for Week 14

Week 14 should use the testing evidence produced here to move into optimisation/refinement. Learners should choose improvements because evidence identifies a genuine weakness, not because they want to add another feature.