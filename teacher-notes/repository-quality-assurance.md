# Repository Completion & Quality-Assurance Review

## Scope

This review covers the **course-content-framework** branch after development of the complete 17-week Unit 6 teaching sequence.

The review checks:

- weekly structural consistency;
- curriculum progression;
- assessment preparation;
- relationship between the Hot Wheels exemplar and assessed Hot Beans work;
- learner evidence flow;
- teacher navigation;
- finalisation/submission support.

## 1. Weekly structure — PASS

All 17 teaching weeks contain the core framework:

- `README.md`
- `lesson-plan/lesson-plan.md`
- `slides/slides.md`
- `student-activities/`
- `assessment-checks/`
- `teacher-resources/teacher-guidance.md`

The number and type of activities appropriately varies by curriculum need rather than forcing every week to contain identical files.

## 2. Curriculum sequencing — PASS

The sequence is coherent and cumulative:

1. **Weeks 1–4:** analyse existing websites;
2. **Weeks 5–8:** interpret the brief, design, review and justify;
3. **Weeks 9–12:** implement HTML/CSS/JavaScript and consolidate compatibility/evidence;
4. **Weeks 13–14:** formally test and optimise;
5. **Weeks 15–17:** evaluate, synthesise professional practice and finalise submission.

The course repeatedly uses progression rather than isolated topics. Examples include:

- **feature → evidence → effect → audience/purpose → judgement**;
- **requirement → design → review → refinement → justification**;
- **requirement → implementation → test → issue → fix → retest**;
- **evidence → limitation/trade-off → alternative → judgement**.

## 3. Assessment preparation — PASS

The curriculum provides explicit preparation for:

- A.P1, A.M1, A.D1;
- B.P2, B.P3, B.M2;
- C.P4, C.P5, C.P6, C.M3;
- BC.D2, BC.D3.

New repository-level maps make this easier to track:

- `assessment/assessment-evidence-map.md`
- `curriculum/assessment-map/criteria-to-weeks.md`

These documents correctly treat weekly activities as **preparation/opportunity for evidence**, not automatic criterion achievement.

## 4. Exemplar/assessment separation — PASS

The repository consistently protects the distinction between:

- **Hot Wheels** — worked teaching exemplar;
- **Hot Beans Web** — assessed learner response.

The strongest controls are:

- teacher modelling on neutral or exemplar scenarios;
- explicit transfer-back activities;
- staged exemplar investigation rather than direct copying;
- repeated reminders that assessed design/code/testing/evaluation must be learner-owned;
- final evidence-integrity guidance.

This separation should remain a non-negotiable repository design principle.

## 5. Practical progression — PASS

The exemplar is now integrated at the most useful point in the curriculum rather than dominating the course:

- Stage 1 supports Week 9 HTML;
- Stage 2 supports Week 10 CSS/responsiveness;
- Stage 3 supports Week 11 JavaScript/refinement;
- Week 12 deliberately moves learners back toward a coherent independent implementation.

This gives the staged exemplar a clear pedagogical role: **demonstrate → investigate → transfer independently**.

## 6. Testing and optimisation evidence — PASS

Weeks 12–14 establish a strong evidence chain:

> **requirement → planned test → expected result → actual result → defect → fix → retest → evidence**

The resources also correctly value:

- genuine failed tests;
- normal/boundary/erroneous data where relevant;
- compatibility and viewport checking;
- accessibility and keyboard checks;
- defect severity/prioritisation;
- regression checks;
- before/after optimisation evidence.

This provides a much stronger development narrative than final screenshots alone.

## 7. Evaluation and professional practice — PASS

Weeks 15–16 move learners beyond feature description into evidence-based judgement.

The evaluation model is consistently:

> **requirement → evidence → consequence → limitation/trade-off → alternative → judgement**

Professional-practice resources treat individual responsibility as **ownership of decisions**, not isolation from help. Creativity is framed as purposeful problem solving rather than unnecessary complexity.

## 8. Finalisation and evidence integrity — PASS

Week 17 appropriately avoids becoming a late development sprint.

Strong controls include:

- no speculative feature creep;
- clean-start testing of the actual submission copy;
- requirement verification;
- evidence indexing;
- retesting of justified final corrections;
- submission packaging checks;
- explicit prohibition on fabricated historical evidence.

## 9. Repository-level navigation — PASS after completion work

The root README has been upgraded from an exemplar-only description to a complete course entry point.

Additional repository-level resources now provide:

- curriculum overview;
- criteria-to-week mapping;
- assessment evidence mapping;
- teacher quick-start guidance;
- optional learner project/evidence structure.

This brings the repository much closer to the organisational model used in the Unit 17 repository while preserving the pre-existing Unit 6 exemplar resources.

## 10. Minor consistency observations

These are not curriculum gaps:

- later weekly READMEs use slightly different header metadata conventions from some early weeks;
- some weeks have a dedicated evidence/readiness checklist in addition to the exit ticket, while others appropriately use only the checks needed for that topic;
- slide counts vary by topic, which is appropriate provided teaching remains paced to the three-hour session.

These differences do not prevent delivery. A future style-only pass could normalise metadata headings if desired without changing curriculum content.

## Final QA judgement

**READY FOR REVIEW / MERGE.**

The branch now provides a coherent 17-week Unit 6 delivery framework, explicit assessment preparation, reusable learner activities, teacher guidance, staged practical exemplars and final evidence/submission support.

The next useful development work should be driven by delivery feedback rather than adding more curriculum volume. Likely future iterations are:

- correcting issues discovered during live teaching;
- refining timings based on learner pace;
- improving individual activities where formative evidence shows misconceptions;
- converting Markdown slide/resource sources into the centre's preferred delivery formats;
- updating links or technical examples as browser/web-development practice changes.

The repository should avoid accumulating additional content simply because more content can be produced. The current priority is **use, review and iteration**.