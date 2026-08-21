# Week 13 Lesson Plan – Formal Website Testing

**Duration:** 3 hours  
**Learning Aim:** C  
**Assessment preparation:** C.P5 and evidence for later optimisation/evaluation

## Learning objectives

Learners will:

- plan tests from requirements;
- identify suitable test categories;
- use normal, boundary and erroneous data appropriately;
- define expected results before execution;
- record actual results and evidence;
- log defects clearly;
- apply fixes and retest under comparable conditions;
- evaluate what testing reveals about their website.

## Success criteria

### Developing
I can create and execute basic tests for website features.

### Secure
I can link tests to requirements, use suitable test data, and record defects and retests accurately.

### Extending
I can use systematic testing evidence to justify development decisions and identify meaningful improvements.

---

## Lesson sequence

| Time | Phase | Teacher activity | Learner activity | Evidence |
|---|---|---|---|---|
| 0–15 | Retrieval | Review implementation evidence and test terminology | Complete retrieval quiz | Retrieval responses |
| 15–30 | What makes testing formal? | Contrast vague checking with planned testing | Improve weak test statements | Annotated examples |
| 30–50 | Test design | Model requirement → method → condition/data → expected result | Build tests from neutral requirements | Test-plan draft |
| 50–70 | Test data | Model normal, boundary and erroneous data for forms/logic | Complete test-data workshop | Test-data table |
| 70–80 | Break | — | — | — |
| 80–100 | Worked example | Use Hot Wheels testing example to model evidence chain | Analyse why NAV-01 is useful despite partial functionality | Written analysis |
| 100–120 | Build assessed test plan | Coach with questions only | Create own Hot Beans test plan | Individual test plan |
| 120–145 | Execute tests | Demonstrate disciplined recording before fixing | Execute selected tests; record actual results/evidence | Test execution evidence |
| 145–160 | Defects | Model defect record: symptom, likely cause, change | Log genuine defects | Defect record |
| 160–172 | Retesting | Model same-condition retest | Fix one issue and retest | Before/after evidence |
| 172–180 | Audit/plenary | Review evidence quality | Complete checklist and exit ticket | Checklist + exit ticket |

---

## Teacher input: weak vs strong tests

### Weak

> Test the contact form.

### Stronger

> Submit the contact form with the email field containing `alex.example.com` and all other required fields valid. Expected: submission is prevented and the user receives an email-format error message.

Ask learners why the second statement is reproducible.

---

## Test categories to model

### Functionality
Does the feature perform its intended behaviour?

### Compatibility
Does it work acceptably across available browsers/devices/viewports?

### Usability
Can intended users complete tasks efficiently and understand feedback?

### Accessibility
Can keyboard users operate controls? Is focus visible? Are labels and states meaningful?

### Responsive behaviour
Does layout/content remain usable through viewport changes?

### Content
Are text, links, qualifications/job details and labels accurate and complete?

### Performance
Do large assets or implementation choices produce noticeable loading/performance concerns?

---

## Test-data teaching

### Normal
Typical valid input or use.

### Boundary
Data immediately around a threshold, length or branch condition.

### Erroneous/invalid
Input that should be rejected or handled gracefully.

Do not make learners force every test into all three categories. Use them where the feature actually has data or boundaries.

---

## Evidence discipline

Before a learner changes a failed feature, ask them to capture:

1. test ID;
2. condition/input;
3. expected result;
4. actual result;
5. evidence;
6. defect description.

Then allow the fix.

This protects the development story from disappearing.

---

## Adaptive teaching

### Support

- provide test sentence frames;
- provide category prompts;
- allow learners to begin with one user journey rather than the whole site;
- use the existing testing workbook structure;
- give examples of normal/boundary/invalid data;
- pair learners for independent usability observations while keeping records individual.

### Stretch

Ask learners to:

- design tests that combine browser and viewport conditions;
- identify false positives or ambiguous expected results;
- test state persistence/repeated interaction;
- explain why a defect may be low severity but high frequency;
- prioritise defects by user impact;
- distinguish verification against a design from validation against user need.

---

## English and maths

### English
Testing records require concise technical writing and unambiguous descriptions.

### Maths/computational thinking
- boundary values;
- ranges and thresholds;
- Boolean outcomes;
- systematic coverage;
- comparison of before/after conditions.

---

## Employability

This week mirrors professional QA/development habits:

- reproducibility;
- defect logging;
- evidence-based fixes;
- retesting;
- prioritisation;
- traceability to requirements.

---

## Assessment boundary

Model methodology with Hot Wheels or neutral examples. Do not author the learner's Hot Beans test cases for them. Appropriate prompts include:

- Which requirement are you proving?
- What condition would make this test reproducible?
- What would count as a pass?
- What value sits at the boundary?
- What evidence will you capture?
- How will you know the fix worked?

## Preparation for Week 14

Learners should leave Week 13 with a populated test plan, executed tests, genuine defect evidence, at least one fix/retest cycle, and a clear shortlist of improvements that testing has revealed.