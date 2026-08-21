# Week 14 Teacher Guidance – Optimisation & Refinement

## Teaching intent

Week 14 should make optimisation visible as a **reasoned development process**. The most important learning is not the final code change; it is the evidence trail that explains why the change was made and whether it worked.

Use the existing Hot Wheels optimisation example to model methodology. The exemplar describes a genuine narrow-screen navigation weakness, compares alternative responses, implements a selected change, retests and evaluates the result. It also explicitly warns learners not to manufacture the same issue in their own assessed project.

---

## Core message

Repeat throughout the lesson:

> **Newer is not automatically better. Improvement must be demonstrated.**

A strong optimisation record contains:

**evidence → issue → user/client impact → alternatives → justified decision → change → retest → regression check → judgement**

---

## Retrieval indicative answers

1. Expected = what should happen; actual = what did happen.
2. Recording the failure preserves evidence of the development process and provides a baseline for comparison.
3. Repeating a test after a change to determine whether the issue has been resolved.
4. Comparable conditions make before/after comparison meaningful.
5. Testing related/previously working functionality after a change to ensure it has not been broken.
6. Example: Chrome vs Edge; desktop vs mobile; different viewport/browser environments.
7. Example: whether users can locate vacancies or complete a form journey effectively.
8. Example: keyboard navigation, visible focus, form labels, status feedback or contrast checks.
9. Requirement-linked testing establishes relevance and fitness for purpose.
10. Before/after screenshots, test outcomes, file sizes, viewport behaviour, user observations or performance measurements.
11. A value immediately around a threshold where behaviour changes.
12. Feedback should be evaluated against requirements and evidence; not every suggestion is appropriate.

Challenge questions might include: *What evidence shows the original design was weak?* and *How will you prove the new version is better?*

---

## Worked Hot Wheels optimisation

Key points from the repository example:

- the original navigation technically worked;
- the identified weakness was excessive use of narrow-screen space;
- the issue was related to mobile-user experience;
- several responses were considered;
- the selected response used JavaScript and CSS together;
- accessibility state was retained with `aria-expanded`;
- the original navigation tests should be repeated;
- before/after evidence is required;
- success is judged using retest evidence rather than the presence of new code.

Do not imply that hamburger navigation is universally superior. The value lies in the decision process.

---

## Prioritisation guidance

Learners often gravitate toward cosmetic changes because they are easy to see. Redirect them toward impact:

- Does the issue prevent a requirement being met?
- How many users/features does it affect?
- Is it a critical journey?
- Does it create an accessibility barrier?
- Does it appear at common viewport conditions?
- Is there evidence rather than personal preference?

An impact/effort matrix is a thinking tool, not a mathematical grading formula.

---

## Appropriate optimisation areas

Depending on evidence, learners may reasonably improve:

### Performance
- image dimensions/compression;
- inappropriate image format;
- unnecessary assets;
- page weight.

### Usability
- unclear navigation;
- content hierarchy;
- spacing/control sizing;
- error recovery;
- feedback after actions.

### Accessibility
- keyboard/focus behaviour;
- labels;
- contrast;
- semantic hierarchy;
- live/status feedback.

### Responsiveness
- overflow;
- awkward card/grid behaviour;
- image cropping;
- navigation usability;
- breakpoint choices.

### JavaScript
- validation quality;
- state handling;
- accessible state synchronisation;
- defensive checks;
- unnecessary scripting.

---

## Common misconceptions

### “Optimisation means adding more features”

No. Removing unnecessary complexity can be an optimisation.

### “A prettier page is optimised”

Only if the change is supported by relevant evidence and improves fitness for purpose.

### “If the retest passes, the work is finished”

Related regression checks may still reveal side effects.

### “I must accept user feedback”

No. Learners can accept, adapt or reject feedback, but should justify the decision.

### “I need lots of optimisations”

Depth of evidence is more valuable than a long list of weak cosmetic changes.

---

## Assessment-safe coaching prompts

Use questions rather than prescribing a solution:

- Which test or feedback item identified this issue?
- What requirement does it affect?
- What alternatives have you considered?
- Why is this option preferable?
- What evidence have you captured before editing?
- Which exact test will you repeat?
- What else could this change accidentally break?
- What evidence would make you reverse the change?
- Was the optimisation successful, partly successful or unsuccessful?

Avoid selecting the learner's optimisation or writing the assessed implementation for them.

---

## Evidence quality

Encourage a compact but complete record. A marker should be able to see:

1. **Before:** evidence of the weakness.
2. **Reasoning:** why it matters and what alternatives exist.
3. **Change:** what the learner changed.
4. **After:** comparable retest evidence.
5. **Quality assurance:** regression checks.
6. **Judgement:** whether the change improved the solution and any trade-off.

Screenshots alone are insufficient if they do not explain what changed or why.

---

## Extension prompts

For stronger learners ask:

- Can you quantify the improvement?
- What trade-off did the change introduce?
- Could a different user group prefer another solution?
- How might this optimisation affect performance/accessibility/compatibility elsewhere?
- If you had another development iteration, what would you optimise next and why?

---

## Exit-ticket indicative answers

1. A fix corrects behaviour that failed; a refinement improves something that already works but could be better.
2. Evidence establishes that a real issue exists and provides a baseline.
3. Alternatives allow comparison and justification rather than assuming the first idea is best.
4. Before evidence is necessary to demonstrate change and improvement.
5. Regression testing checks that a change has not broken related or previously working behaviour.
6. Examples: image file size, page weight, number of failed tests, load measure, viewport dimension.
7. Examples: user can locate information more easily, keyboard journey is clearer, feedback is more understandable.
8. Accept any response showing evidence → priority → change → method of proof.

---

## Preparation for Week 15

By the end of Week 14 learners should have evidence of at least one complete refinement cycle. Week 15 can then move from **improving the solution** to **reviewing and evaluating the final solution against the original client requirements**, using testing, feedback and optimisation evidence as support.