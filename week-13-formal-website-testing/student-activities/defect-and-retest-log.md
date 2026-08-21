# Defect & Retest Log

## Purpose

Record failures before fixing them so your development evidence shows what changed and why.

---

## Defect record

| Defect ID | Related test | Problem observed | Evidence | Likely cause | Severity | Change made |
|---|---|---|---|---|---|---|
| D01 | | | | | | |
| D02 | | | | | | |
| D03 | | | | | | |
| D04 | | | | | | |

### Severity guide

- **High** – prevents an essential requirement/user journey.
- **Medium** – feature works poorly or creates significant usability/accessibility difficulty.
- **Low** – minor defect with limited user impact.

Severity is about impact, not how difficult the fix is.

---

## Reproduction record

For each important defect, write steps another developer could follow.

### Defect ID:

1.
2.
3.
4.

**Expected result:**

**Actual result:**

---

## Retest record

| Defect ID | Original condition/data | Retest method | Expected result | Actual result | Resolved? | Evidence |
|---|---|---|---|---|---|---|
| D01 | | | | | | |
| D02 | | | | | | |
| D03 | | | | | | |
| D04 | | | | | | |

---

## Regression check

After each fix ask:

> What nearby feature might this change also have affected?

Example:

A CSS fix to mobile navigation may require a quick check at wider viewports too.

Record one regression check:

**Change made:**

**Potentially affected feature:**

**Check performed:**

**Result:**

---

## Improvement statement

Choose one resolved defect and complete:

> Testing identified…
>
> This mattered because…
>
> I changed…
>
> I repeated the test using…
>
> The new result was…
>
> This demonstrates improvement because…