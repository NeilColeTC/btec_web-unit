# Week 13 Slides – Formal Website Testing

---

## Slide 1 – Week 13

# Formal Website Testing

**From “I checked it” to reproducible evidence**

---

## Slide 2 – Today

We will learn how to:

- plan tests from requirements;
- choose test data and conditions;
- define expected results;
- record actual results;
- log defects;
- fix and retest;
- use testing evidence to drive improvement.

---

## Slide 3 – Retrieval

1. What is a client requirement?
2. What is responsive design?
3. What is browser compatibility?
4. What is a JavaScript event?
5. What is a boundary value?
6. Why should development evidence be retained?

---

## Slide 4 – Informal checking vs formal testing

### Informal
> I clicked around and it looked okay.

### Formal
> I tested a defined feature under a stated condition against an expected result and recorded what happened.

---

## Slide 5 – The evidence chain

# requirement → test → expected result → actual result → outcome

If a defect is found:

# defect → change → retest → evidence

---

## Slide 6 – Why expected results come first

If you decide what “success” means only after seeing the result, the test is weak.

Define the expected behaviour **before execution**.

---

## Slide 7 – Weak test

> Test the navigation.

Problems:

- no condition;
- no expected result;
- not reproducible;
- unclear pass/fail decision.

---

## Slide 8 – Stronger test

> At a 390px viewport, open the navigation and activate each page link. Expected: all required pages are reachable and the menu remains usable without horizontal scrolling.

Why is this better?

---

## Slide 9 – Test-plan fields

A useful test record includes:

- Test ID
- requirement/feature
- method
- data/condition
- expected result
- actual result
- outcome
- evidence
- action required

---

## Slide 10 – Functionality testing

Does the feature perform its intended behaviour?

Examples:

- links reach correct pages;
- form validation behaves correctly;
- interactive controls respond;
- navigation opens/closes;
- required content appears.

---

## Slide 11 – Compatibility testing

Check whether important features behave acceptably across:

- available browsers;
- viewport sizes;
- device types where available;
- keyboard/mouse interaction.

Compatibility does not mean every browser must look pixel-identical.

---

## Slide 12 – Responsive testing

Do not test only “desktop” and “mobile”.

Resize through the range.

Look for:

- overflow;
- unreadable text;
- broken layouts;
- inaccessible controls;
- awkward spacing;
- content that disappears unexpectedly.

---

## Slide 13 – Usability testing

Ask whether the intended user can:

- understand the page;
- find important information;
- complete key tasks;
- understand errors/feedback;
- recover from mistakes.

---

## Slide 14 – Accessibility testing

Examples:

- keyboard navigation;
- visible focus;
- meaningful labels;
- alternative text;
- heading structure;
- accessible state such as `aria-expanded`;
- readable contrast.

---

## Slide 15 – Content testing

Technical correctness is not enough.

Check:

- required pages/content;
- spelling/grammar;
- correct links;
- correct labels;
- job/qualification information;
- consistency with the client brief.

---

## Slide 16 – Performance testing

Consider whether:

- images are unnecessarily large;
- pages feel slow to load;
- scripts/assets are excessive;
- media choices are proportionate to purpose.

Performance evidence can later support optimisation decisions.

---

## Slide 17 – Test data

When a feature accepts data, useful categories include:

- **normal** – typical valid input;
- **boundary** – at/around a limit;
- **erroneous** – invalid or unexpected input.

---

## Slide 18 – Normal data

Example requirement:

> Name must contain at least 2 characters.

Normal valid input:

`Alex`

Expected: accepted.

---

## Slide 19 – Boundary data

For minimum length 2:

- `A` → below boundary
- `AB` → on valid boundary

These values reveal whether the decision is implemented correctly.

---

## Slide 20 – Erroneous data

Examples:

- empty field;
- spaces only;
- malformed email;
- impossible/unexpected value.

Expected behaviour should be defined before testing.

---

## Slide 21 – Boundary testing of logic

If code changes behaviour at 70:

```javascript
if (score >= 70) {
```

Strong tests include:

- 69
- 70

because the output should change between them.

---

## Slide 22 – Do not force categories

A navigation-link test may not have “boundary data”.

Choose test techniques because they suit the feature—not to fill boxes.

---

## Slide 23 – Worked example: responsive navigation

The existing Hot Wheels example includes tests such as:

- mobile navigation at 390px;
- menu-control behaviour;
- keyboard operation;
- wider viewport behaviour.

What makes these tests useful?

---

## Slide 24 – A fail is useful evidence

A failed test is not automatically bad work.

A well-documented failure can show:

- systematic testing;
- problem diagnosis;
- improvement;
- retesting;
- professional development practice.

---

## Slide 25 – Do not hide defects

Bad process:

**notice problem → fix immediately → forget what happened**

Better process:

**notice problem → record → evidence → diagnose → change → retest**

---

## Slide 26 – Defect record

Record:

- defect ID;
- related test;
- problem observed;
- likely cause;
- change made;
- evidence;
- retest result.

---

## Slide 27 – Describe the symptom clearly

Weak:

> Menu broken.

Stronger:

> At 390px, the fifth navigation link wraps below the visible menu area and requires horizontal scrolling to reach.

Reproducibility matters.

---

## Slide 28 – Diagnose, do not guess

Possible sources:

- wrong path/URL;
- CSS layout rule;
- media-query threshold;
- JavaScript selector;
- validation condition;
- missing asset;
- browser-specific behaviour.

Use evidence.

---

## Slide 29 – Retesting

After a fix, repeat the original test under the same or equivalent conditions.

Why?

So you can compare before and after fairly.

---

## Slide 30 – Retesting is not “it looks fixed”

Record:

- original defect;
- change;
- repeated condition;
- new actual result;
- resolved/not resolved.

---

## Slide 31 – Regression thinking

A fix can create another problem.

After a change ask:

> What nearby feature could this change have affected?

Example: changing navigation CSS may affect both mobile and desktop layouts.

---

## Slide 32 – Requirement coverage

A strong plan covers the important client/user requirements.

Ask:

- Which requirement does each test prove?
- Which requirement has no test?
- Which feature has several tests but little importance?

---

## Slide 33 – Prioritise meaningful tests

Testing 20 colour values is less useful than testing:

- required pages;
- application form;
- navigation;
- responsive layout;
- key interaction;
- accessibility;
- compatibility.

Coverage should follow risk and requirements.

---

## Slide 34 – Evidence capture

Possible evidence:

- screenshots;
- browser/device notes;
- video/GIF where appropriate;
- validation messages;
- console output;
- before/after code excerpts;
- completed test table.

Evidence should support the written record.

---

## Slide 35 – Your assessed test plan

Build your plan from **your own Hot Beans website**.

Do not copy Hot Wheels test IDs or assume its features match yours.

Use your:

- client requirements;
- reviewed designs;
- implemented features;
- identified risks.

---

## Slide 36 – Minimum quality check

Can another person reproduce the test from your record?

Can they tell what should happen?

Can they tell what actually happened?

Can they see evidence?

Can they follow the fix and retest?

---

## Slide 37 – Evaluation questions

After testing ask:

- Which tests were most useful?
- What unexpected problem appeared?
- Which change had the greatest user impact?
- What would you test differently next time?

---

## Slide 38 – Core workflow

# PLAN
# EXECUTE
# RECORD
# FIX
# RETEST
# EVALUATE

---

## Slide 39 – Exit ticket

1. Why must expected results be written before execution?
2. Give an example of boundary data.
3. What belongs in a defect record?
4. Why should a failed test be preserved?
5. What is the purpose of retesting?