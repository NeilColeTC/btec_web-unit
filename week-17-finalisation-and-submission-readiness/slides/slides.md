# Week 17 Slides – Finalisation & Submission Readiness

---

## Slide 1 – Week 17

# Finalisation & Submission Readiness

**Finish safely. Verify everything. Submit clearly.**

---

## Slide 2 – Today

We will:

- verify requirements;
- run a final technical smoke test;
- distinguish essential fixes from feature creep;
- organise evidence;
- retest any justified late changes;
- prepare the final submission package;
- complete a professional reflection.

---

## Slide 3 – Retrieval

1. What is a client requirement?
2. What is retesting?
3. What is regression testing?
4. Why is before/after evidence useful?
5. What makes an evaluative claim strong?

---

## Slide 4 – The final-week mindset

This is **not** a redesign session.

The aim is to reduce submission risk.

Think:

> verify → organise → repair only where justified → retest → package → submit

---

## Slide 5 – Feature creep

Feature creep is uncontrolled addition of new functionality beyond the established scope.

At the final stage it can create:

- new bugs;
- inconsistent design;
- missing evidence;
- broken responsive behaviour;
- lost time;
- weaker evaluation.

---

## Slide 6 – Essential fix or feature creep?

Ask three questions:

1. Is there clear evidence of a real problem?
2. Does it materially affect a requirement or user experience?
3. Can I retest properly after changing it?

If not, think carefully before changing anything.

---

## Slide 7 – Scenario

A required link returns to the wrong page.

Fix now or leave?

What evidence is needed after the fix?

---

## Slide 8 – Scenario

You decide the site would look more modern with a slideshow.

No test or feedback requested it.

Fix now or leave?

---

## Slide 9 – Requirements first

Before polishing anything, check the brief.

For each major requirement identify:

- where it is implemented;
- how it works;
- where the evidence is;
- whether testing supports it;
- any remaining limitation.

---

## Slide 10 – Traceability

A strong evidence chain looks like:

**requirement → design → implementation → test → refinement → evaluation**

Not every requirement needs identical evidence, but the journey should be understandable.

---

## Slide 11 – Green / Amber / Red

### Green
Clear evidence exists and is easy to locate.

### Amber
Evidence exists but needs organising or explanation.

### Red
Evidence genuinely does not exist.

Do not turn Red into fake Green.

---

## Slide 12 – Evidence integrity

You may:

- rename files clearly;
- organise evidence;
- add an index;
- explain what existing evidence demonstrates.

You must not invent:

- historical test results;
- feedback that never happened;
- fake development dates;
- before/after evidence for changes that were not documented.

---

## Slide 13 – Test the submission copy

Do not assume the working folder is the same as the submission folder.

A final copy can fail because of:

- missing images;
- incorrect relative paths;
- absent scripts/stylesheets;
- renamed files;
- links to local locations.

---

## Slide 14 – Clean-start smoke test

1. Close your editor/browser.
2. Open the final submission folder fresh.
3. Launch the home page.
4. Navigate the whole site.
5. Test important functionality.
6. Check assets.
7. Test responsive behaviour.
8. Check keyboard interaction.

---

## Slide 15 – Smoke test vs formal testing

Formal testing was planned and documented earlier.

A final smoke test asks:

> Does the submitted build still work at a basic critical level?

It does not replace the formal test plan.

---

## Slide 16 – Navigation check

Verify:

- every required page opens;
- navigation is consistent;
- links point to the correct destination;
- no dead links remain;
- home navigation is predictable;
- mobile navigation still works.

---

## Slide 17 – Asset check

Check:

- images load;
- filenames match case/spelling;
- stylesheets load;
- JavaScript loads;
- no file depends on your desktop/download folder;
- required assets are included in the submission.

---

## Slide 18 – Form and interaction check

Verify important interactions:

- controls respond;
- validation behaves as expected;
- feedback is visible/understandable;
- keyboard operation still works;
- no obvious console errors appear.

---

## Slide 19 – Responsive check

Test representative widths.

Look for:

- overflow;
- unreadable text;
- inaccessible controls;
- broken grids;
- hidden important content;
- images distorting;
- menu failures.

---

## Slide 20 – Accessibility quick check

Final quick checks can include:

- page headings;
- form labels;
- meaningful alt text;
- keyboard access;
- visible focus;
- clear link/control names;
- state such as `aria-expanded` where used.

---

## Slide 21 – Late fix rule

If you change something now:

1. record why;
2. make the smallest appropriate change;
3. rerun the failed test;
4. run relevant regression checks;
5. preserve evidence of the correction.

---

## Slide 22 – Minimal change

Late-stage changes should be focused.

Prefer:

> repair the broken path

rather than:

> rebuild the whole navigation system

unless the evidence genuinely requires it and time allows proper retesting.

---

## Slide 23 – Regression thinking

After a change ask:

> What else could this have affected?

Examples:

- changing CSS may affect several pages;
- changing navigation may affect every page;
- changing validation may affect several inputs;
- renaming a file may break multiple references.

---

## Slide 24 – Evidence quantity is not evidence quality

Twenty screenshots with no explanation may be weaker than five well-labelled pieces of evidence.

Good evidence is:

- relevant;
- clear;
- traceable;
- authentic;
- explained.

---

## Slide 25 – Build an evidence index

For each evidence item record:

- title/file name;
- what it demonstrates;
- requirement/criterion area;
- where it is located.

Make navigation easy for the assessor.

---

## Slide 26 – Suggested evidence groups

- requirements analysis;
- design documentation;
- review/feedback;
- implementation;
- testing;
- defects/retesting;
- optimisation;
- evaluation;
- professional practice.

---

## Slide 27 – File naming

Weak:

- `Screenshot1.png`
- `finalfinal2.docx`
- `testnew.xlsx`

Better:

- `responsive-test-800px.png`
- `design-review-feedback.md`
- `final-test-plan.xlsx`

Use names that help another person understand the file.

---

## Slide 28 – Submission folder

A clean final package should contain only what is required and useful.

Avoid:

- temporary files;
- duplicate old versions unless required as evidence;
- unrelated downloads;
- broken shortcuts;
- personal system paths.

---

## Slide 29 – Can someone else run it?

Ask a peer to open the submission copy without your editor setup.

Can they:

- find the start page?
- navigate the website?
- see all assets?
- identify the evidence files?

This is a handover test.

---

## Slide 30 – Final evaluation cross-check

For every major claim ask:

> Where is the evidence?

If evidence is weak:

- qualify the claim;
- point to the limitation;
- remove unsupported exaggeration.

---

## Slide 31 – Do not rewrite history

Professional reflection can say:

> I did not collect enough compatibility evidence early enough.

That is stronger than inventing browser tests at the end.

Honest limitation + reflection is credible evidence of judgement.

---

## Slide 32 – Final professional reflection

Reflect on:

- strongest decision;
- most important problem solved;
- most useful feedback/test result;
- biggest remaining limitation;
- most effective working practice;
- one practice to improve next time.

---

## Slide 33 – What would you do differently?

Good reflection is specific.

Weak:

> I would manage time better.

Stronger:

> I would run responsive tests after each major layout change rather than waiting until the end, because this would identify breakpoint problems before they spread across several pages.

---

## Slide 34 – Submission sign-off

Before submitting, confirm:

- correct files;
- correct version;
- required pages present;
- assets included;
- major links/functionality checked;
- evidence organised;
- evaluation complete;
- filenames clear;
- no known critical issue ignored.

---

## Slide 35 – Stop condition

There comes a point where the correct professional action is to stop changing the product.

If the site meets the brief, tests are complete and evidence is organised, uncontrolled extra editing may reduce quality.

---

## Slide 36 – Final quality question

Could an assessor follow this journey without you being in the room?

**brief → decisions → implementation → tests → changes → evaluation**

If not, improve the organisation and signposting.

---

## Slide 37 – Final quality question 2

Could another developer open the submitted website and understand the structure without hidden files or unexplained dependencies?

If not, improve the submission package.

---

## Slide 38 – Your final task

Complete:

1. requirement verification;
2. submission smoke test;
3. evidence index;
4. any justified correction + retest;
5. submission-readiness checklist;
6. final reflection.

---

## Slide 39 – Exit ticket

1. What is feature creep?
2. What three questions should you ask before a late change?
3. Why test the submission copy separately?
4. What is an Amber evidence status?
5. What is the most important action you still need to complete before submission?