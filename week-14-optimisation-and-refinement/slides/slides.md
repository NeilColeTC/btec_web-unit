# Week 14 Slides – Optimisation & Refinement

---

## Slide 1 – Week 14

# Optimisation & Refinement

**Use evidence to make the website better**

---

## Slide 2 – Today

We will:

- use testing evidence to identify weaknesses;
- prioritise improvements;
- compare alternative solutions;
- make justified refinements;
- retest under comparable conditions;
- check for regression problems;
- evaluate whether the change was worthwhile.

---

## Slide 3 – Retrieval

1. What is an expected result?
2. Why should defects be recorded before being fixed?
3. What is a boundary test?
4. Why should a retest use comparable conditions?
5. What is regression testing?

---

## Slide 4 – The optimisation cycle

> **evidence → issue → priority → alternatives → change → retest → compare → judge**

Optimisation is a process, not a claim.

---

## Slide 5 – Not all changes are optimisation

Examples:

- changing a colour because you are bored;
- adding animation with no user benefit;
- fixing a broken navigation link;
- reducing an oversized image file;
- improving unclear validation feedback.

Which are evidence-led?

---

## Slide 6 – Fix vs refine vs optimise

### Fix
Corrects behaviour that fails its expectation.

### Refine
Improves something that already works.

### Optimise
Targets usability, accessibility, performance, responsiveness, compatibility or efficiency.

---

## Slide 7 – Start with evidence

Possible evidence sources:

- failed tests;
- usability observations;
- accessibility checks;
- browser/device differences;
- user feedback;
- performance findings;
- requirement traceability gaps.

---

## Slide 8 – Avoid invented problems

Do not create a weakness just so you can show that you fixed it.

A stronger development story is:

> We tested honestly, found a genuine issue and improved it.

---

## Slide 9 – Hot Wheels worked example

Testing identified a narrow-screen navigation issue.

The navigation worked, but occupied too much vertical space.

This is a useful example because it is a **usability weakness**, not a total failure.

---

## Slide 10 – Relate issue to user

Weak statement:

> The menu was too big.

Stronger statement:

> On a narrow viewport the visible navigation dominated the screen, reducing space for page content and making the mobile layout less efficient for users.

---

## Slide 11 – Consider alternatives

For one issue there may be several responses.

Example navigation alternatives:

- reduce spacing;
- use horizontal scrolling;
- collapse into a menu control.

Good optimisation compares options.

---

## Slide 12 – Why alternatives matter

If you implement the first idea immediately, you cannot show that it was the best choice.

Ask:

- benefit?
- drawback?
- effort?
- accessibility impact?
- compatibility impact?
- fit with design?

---

## Slide 13 – Prioritisation

Not every issue deserves equal attention.

Useful factors:

- severity;
- user impact;
- requirement importance;
- frequency;
- effort/risk;
- available time.

---

## Slide 14 – Impact × effort

A simple matrix:

- **high impact / low effort** → strong priority;
- **high impact / high effort** → plan carefully;
- **low impact / low effort** → optional quick win;
- **low impact / high effort** → usually low priority.

---

## Slide 15 – Severity is not the same as effort

A major issue can be easy to fix.

A minor issue can be difficult to fix.

Prioritisation combines importance and practicality.

---

## Slide 16 – Requirement importance

Ask:

> Which client or user requirement does this issue affect?

A refinement linked to a core requirement is usually easier to justify.

---

## Slide 17 – Before evidence

Before changing code, preserve evidence:

- screenshot;
- test result;
- browser/viewport;
- user feedback;
- code version;
- file size/performance data where relevant.

---

## Slide 18 – Make one controlled change

Avoid changing five unrelated things and then claiming improvement.

Controlled changes make cause and effect easier to demonstrate.

---

## Slide 19 – Retest

Repeat the original test condition where possible.

If the original issue occurred at 390px in Chrome, retest at 390px in Chrome first.

Then broaden testing if appropriate.

---

## Slide 20 – Comparable conditions

Why?

Because otherwise you cannot confidently say the change caused the improvement.

---

## Slide 21 – Regression thinking

A change can fix one problem and create another.

After a navigation change, also check:

- keyboard access;
- every link;
- wider layouts;
- menu state;
- focus behaviour.

---

## Slide 22 – Before/after evidence

Strong evidence compares:

| Before | After |
|---|---|
| original test result | retest result |
| original screenshot | new screenshot |
| original metric | new metric |
| weakness | improvement/trade-off |

---

## Slide 23 – Performance optimisation

Possible areas:

- oversized images;
- inappropriate image format;
- unnecessary media;
- repeated/unneeded code;
- excessive page weight;
- blocking resources.

Only optimise what your evidence supports.

---

## Slide 24 – Image example

An image displayed at 600px wide does not usually need to be a 5000px source image.

Possible evidence:

- original dimensions;
- original file size;
- optimised dimensions;
- new file size;
- visual quality comparison.

---

## Slide 25 – Usability optimisation

Possible evidence:

- user struggles to locate information;
- navigation labels are unclear;
- controls are too close together;
- feedback after an action is weak;
- important content lacks hierarchy.

---

## Slide 26 – Accessibility optimisation

Examples:

- improve focus visibility;
- fix label/control association;
- improve contrast;
- correct heading hierarchy;
- improve error/status feedback;
- ensure keyboard interaction works.

---

## Slide 27 – Responsive optimisation

Ask:

- where does content begin to break?
- are controls comfortable to use?
- does navigation remain practical?
- does text remain readable?
- are images cropped appropriately?

Breakpoints should respond to content, not arbitrary device names.

---

## Slide 28 – JavaScript refinement

Possible evidence-led refinements:

- clearer status feedback;
- better state handling;
- more robust validation;
- safer missing-element handling;
- improved keyboard/accessibility behaviour.

Avoid adding effects for decoration alone.

---

## Slide 29 – Trade-offs

Optimisation can introduce costs.

Examples:

- compressed image → smaller file but lower visual quality;
- complex interaction → richer behaviour but more code/risk;
- extra validation → clearer feedback but more development/testing.

Strong evaluation recognises trade-offs.

---

## Slide 30 – User feedback

Feedback is evidence, not an instruction.

You can:

- accept;
- adapt;
- reject.

But explain why.

---

## Slide 31 – Weak optimisation record

> I changed the menu and it is better now.

Problems:

- no original evidence;
- no requirement link;
- no alternatives;
- no retest;
- no proof of improvement.

---

## Slide 32 – Strong optimisation record

> Mobile testing at 390px showed… This affected… I considered A/B/C… I selected B because… After implementing… I repeated test NAV-01… The result changed from… to… Regression checks showed… Therefore…

---

## Slide 33 – Quantitative evidence

Where meaningful, measure change.

Examples:

- 1.8 MB → 240 KB image;
- 3-column overflow → no overflow at 430px;
- 2 failed tests → 0 after retest.

Numbers strengthen evidence when they are relevant.

---

## Slide 34 – Qualitative evidence

Not everything useful is numerical.

Examples:

- user can now find the vacancy page without prompting;
- keyboard focus order is now logical;
- error feedback clearly identifies the field requiring action.

---

## Slide 35 – Your optimisation task

Select one genuine issue from your Week 13 evidence.

Complete:

1. issue;
2. evidence;
3. user/client impact;
4. alternatives;
5. priority;
6. selected change;
7. implementation;
8. retest;
9. regression check;
10. judgement.

---

## Slide 36 – Evidence chain

Your folder/report should make this visible:

> **before → decision → change → after**

A marker should not have to guess what improved.

---

## Slide 37 – Judging success

Ask:

- did the original issue improve?
- did the requirement become better satisfied?
- did any new issue appear?
- was the effort proportionate?
- would I keep this change in the final website?

---

## Slide 38 – Final principle

> **A change is not an optimisation simply because it is newer.**

It is an optimisation when evidence shows it improves the solution in a meaningful way.

---

## Slide 39 – Exit ticket

1. What is the difference between a fix and a refinement?
2. Why consider alternatives?
3. Why preserve before evidence?
4. What is regression testing?
5. Describe one optimisation you can justify from your own evidence.