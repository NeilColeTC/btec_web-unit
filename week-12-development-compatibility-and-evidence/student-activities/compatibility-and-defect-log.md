# Week 12 – Compatibility & Defect Log

## Part 1 – Compatibility matrix

Test one important user journey across several conditions.

Suggested journey: navigating from the homepage to an important content page and completing a relevant interaction.

| Test ID | Browser / environment | Viewport / device condition | Feature / journey | Expected result | Actual result | Outcome |
|---|---|---|---|---|---|---|
| COMP-01 | | | | | | |
| COMP-02 | | | | | | |
| COMP-03 | | | | | | |
| COMP-04 | | | | | | |
| COMP-05 | | | | | | |

### Responsive observation

Resize gradually rather than testing only preset widths.

The first width/condition where the layout begins to become awkward is:


The visible issue is:


Does this suggest a breakpoint/layout refinement? Explain.

---

## Part 2 – Keyboard compatibility/accessibility check

Without using the mouse, check:

- [ ] navigation links can be reached
- [ ] focus is visible
- [ ] buttons can be activated
- [ ] form fields are reached in a sensible order
- [ ] interactive JavaScript controls remain understandable

Record any issue:


---

## Part 3 – Defect record

Choose one genuine issue identified during development.

**Defect ID:**

**Page / feature:**

**Environment / condition:**

**Expected result:**

**Actual result:**

**Severity:** High / Medium / Low

**Evidence captured:**

### Diagnosis

What evidence helped you locate the cause?

- [ ] browser console
- [ ] element inspector
- [ ] CSS rules
- [ ] HTML structure/path
- [ ] JavaScript state/value
- [ ] viewport observation
- [ ] other

Likely/root cause:


### Fix

What did you change?


Why should this change solve the problem?


### Retest

Repeat the original condition.

**Actual result after fix:**

**Outcome:** Pass / Still failing / New issue

Did the fix create a regression elsewhere?


---

## Part 4 – Evidence reflection

Why is this record stronger than simply writing “I found a problem and fixed it”?

