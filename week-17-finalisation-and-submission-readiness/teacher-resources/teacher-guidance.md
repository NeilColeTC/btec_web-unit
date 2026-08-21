# Week 17 Teacher Guidance – Finalisation & Submission Readiness

## Teaching intent

Week 17 is a controlled close-down session. The main risk is that learners destabilise otherwise sound work by making unnecessary late changes, or attempt to compensate for weak historical evidence by recreating evidence retrospectively.

Keep returning to two questions:

> **What genuinely still needs fixing?**

and

> **What authentic evidence already exists?**

The session should improve clarity, reliability and submission quality without crossing the assessment boundary.

---

## Core workflow

Use this repeatedly:

**verify → organise → repair only where justified → retest → package → submit**

A late-stage technical change should normally satisfy all three conditions:

1. a real issue is evidenced;
2. the issue materially affects a requirement, functionality, usability or accessibility;
3. sufficient time remains to retest the changed area and relevant regression points.

If not, the professional response may be to document the limitation accurately rather than introduce fresh risk.

---

## Retrieval indicative answers

1. A client requirement defines something the solution must achieve; a design decision is the learner's chosen way of responding to requirements/needs.
2. Repeating a relevant test after a change to check whether the issue is resolved.
3. Checking that a change has not broken previously working functionality.
4. It preserves authentic evidence of the issue and the development process.
5. The ability to connect a requirement through design/implementation/testing/evaluation evidence.
6. A screenshot may show appearance but not prove behaviour, usability, accessibility, performance or why a decision was made.
7. A genuine weakness, constraint or unresolved issue that affects the quality/scope of the final solution or evidence.
8. Evidence supports only the environments actually checked; broader claims would be unsupported.
9. Examples: version control, milestone planning, frequent testing, clear file organisation, evidence capture, defect logging.
10. Uncontrolled expansion of functionality/scope beyond established requirements or plans.
11. New features may introduce bugs, inconsistent behaviour, missing evidence and insufficient retesting time.
12. Retest the original issue and run relevant regression checks.

Challenge: B is stronger because it responds to an evidenced requirement-related defect and includes retesting; A adds unsupported scope and risk.

---

## Essential correction vs feature creep

Useful teacher prompts:

- Which requirement does this affect?
- Where is the evidence that this is a real problem?
- What is the smallest change that solves it?
- What could this change break?
- How long will proper retesting take?
- What happens if you leave it and acknowledge the limitation instead?

The objective is not to prevent all final corrections. It is to make change management deliberate.

---

## Final smoke testing

The smoke test should run against the **actual intended submission copy**. This matters because learners often have working files cached/open in an editor, while the submitted copy may contain missing assets, renamed paths or outdated files.

A useful classroom routine:

1. save/close working files;
2. open the final folder independently;
3. identify the start page;
4. click through critical journeys;
5. inspect assets/styles/scripts;
6. test key interactions;
7. check representative responsive widths;
8. check important keyboard interactions;
9. record failures before changing them.

This is a release/readiness check, not a substitute for the earlier formal test plan.

---

## Evidence integrity

The existing repository assessment boundary is particularly important in Week 17.

Learners may legitimately:

- organise authentic evidence;
- rename files more clearly;
- create an evidence index;
- explain what an existing screenshot/test/document demonstrates;
- make and document a genuine final correction;
- complete present-time final verification.

Learners should not fabricate:

- old feedback;
- historical screenshots;
- earlier test results;
- fake dates/version stages;
- before/after evidence for a change that was never recorded;
- retrospective decision logs presented as contemporaneous evidence.

If a historical evidence gap exists, it is better to acknowledge it than to manufacture a trail.

---

## Assessment-safe conferencing

Appropriate support includes asking learners to locate and interpret their own evidence.

Useful questions:

- Which requirement are you checking?
- Where is the design evidence for that?
- Which test demonstrates it works?
- Where did the feedback influence the final solution?
- Is this evidence contemporary to the development stage you claim?
- What does your evidence allow you to conclude?
- Which claim should be qualified because evidence is limited?
- Is this work organisation, or are you trying to create evidence that did not previously exist?

Do not construct missing learner evaluation, justification or historical development records for them.

---

## Evidence indexing

Encourage clarity over volume.

A useful evidence index contains:

- evidence identifier;
- meaningful file/section name;
- what it demonstrates;
- relevant requirement/criterion area;
- exact location.

Discourage unexplained screenshot dumps and duplicate files.

If a learner has hundreds of screenshots, ask them to identify which actually prove important decisions, tests or outcomes.

---

## Technical packaging checks

Common final problems include:

- absolute links such as local `C:\Users\...` paths;
- missing image folders;
- stylesheet/script files omitted;
- incorrect case in filenames;
- old versions submitted instead of the latest version;
- duplicate final folders with ambiguous names;
- broken relative links after files are moved;
- submitting source files without a clear start page.

A peer handover check can be useful because another learner should be able to open the final copy without relying on the creator's development environment.

Peer checking should focus on technical packaging and navigation, not generate assessed evaluative conclusions.

---

## Adaptive teaching

### Learners with significant evidence disorganisation

Use a constrained sequence:

1. create named folders/categories;
2. locate existing evidence only;
3. build the index;
4. mark gaps Red rather than filling them artificially;
5. finish the smoke test;
6. complete the submission checklist.

Avoid allowing the learner to spend the session cosmetically reorganising minor material while critical requirements remain unchecked.

### Learners already submission-ready

Push them toward professional release thinking:

- residual-risk assessment;
- evidence quality vs quantity;
- controlled-change decisions;
- limitations in test coverage;
- handover clarity;
- reflection on self-management;
- why stopping development can itself be a professional decision.

---

## Final reflection guidance

Strong reflection is causal and specific.

Weak:

> I should manage my time better.

Stronger:

> I left compatibility testing until late in development, which meant one responsive problem appeared across several pages before I identified it. In future I would run the same viewport test set after each major layout change so defects are isolated earlier.

The learner should use examples from their own process.

---

## Exit-ticket indicative answers

1. Uncontrolled addition of features/scope beyond established requirements/plans.
2. Evidence of a real problem; material effect on requirements/user experience; enough time to retest.
3. The submission copy may contain different paths, missing assets or an outdated version compared with the working environment.
4. Amber = evidence exists but needs organisation/clarification or a minor check; Red = evidence genuinely absent or a significant issue remains.
5. The changed code/style/navigation may affect other previously working functionality.
6. Examples: “works in all browsers”, “fully accessible”, “loads quickly”, “easy for all users” where test scope is limited.
7. Individual response.

---

## End-of-unit position

By the end of Week 17, learners should not need further new teaching content. Remaining activity should be governed by the approved assignment and centre assessment procedures.

The desired final state is a coherent submission where another person can follow:

**brief → design → review → implementation → testing → refinement → evaluation → professional reflection**

without the learner needing to verbally reconstruct missing context.