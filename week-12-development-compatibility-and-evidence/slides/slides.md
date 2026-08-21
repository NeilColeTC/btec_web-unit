# Week 12 Slides – Development, Compatibility & Implementation Evidence

---

## Slide 1 – Week 12
# Development, Compatibility & Implementation Evidence

---

## Slide 2 – Today’s question

How do you know your website is becoming a coherent solution rather than a collection of working pages?

---

## Slide 3 – Learning outcomes

By the end of today you should be able to:

- audit implementation against design and requirements
- identify and record defects
- test compatibility during development
- retest fixes
- preserve useful development evidence

---

## Slide 4 – Retrieval

What is the role of:

- HTML?
- CSS?
- JavaScript?
- a media query?
- an event listener?
- a success criterion?

---

## Slide 5 – Development is iterative

A useful development cycle is:

**requirement → implementation → test → issue → fix → retest → evidence**

Not:

**code everything → hope it works → screenshot at the end**

---

## Slide 6 – Working feature vs coherent website

A feature can work individually while the whole website still fails because of:

- inconsistent navigation
- missing pages
- broken relative paths
- duplicated/inconsistent styles
- poor responsive behaviour
- inaccessible controls
- browser-specific problems

---

## Slide 7 – Whole-site consistency

Check across every page:

- page titles/headings
- navigation labels/order
- stylesheet/script connections
- footer/header structure
- colours/typography
- spacing
- image handling
- form styling
- focus states

---

## Slide 8 – Requirement traceability

For every important requirement ask:

1. Where is it implemented?
2. What evidence proves it exists?
3. How will it be tested?
4. Is anything still missing?

---

## Slide 9 – Design vs implementation

Your finished implementation may differ from your early wireframe.

That is not automatically a problem.

The important question is:

> Is the change justified by feedback, technical evidence, usability, accessibility or another requirement?

---

## Slide 10 – Compatibility

Compatibility means checking whether the website behaves acceptably across relevant environments.

Consider:

- browsers
- viewport sizes
- devices
- input methods
- operating environments where relevant

---

## Slide 11 – Viewport testing

Do not test only:

- desktop
- one phone preset

Layouts can fail between these points.

Resize gradually and observe when content becomes awkward or unusable.

---

## Slide 12 – Browser testing

A site working in one browser does not prove it works everywhere.

Where available, compare key journeys in at least two browsers.

Focus on differences, not just whether the page opens.

---

## Slide 13 – Device emulation limitation

Browser developer tools are useful for viewport testing.

But emulation is not identical to testing on every physical device.

Use it as evidence, not absolute proof.

---

## Slide 14 – Key user journeys

Prioritise journeys that matter most to the site's purpose.

Examples:

- navigating to important content
- finding job information
- reaching an application form
- completing required interactions

---

## Slide 15 – Defect

A defect is a problem where actual behaviour does not meet expected behaviour.

Example:

Expected: navigation links remain usable at 390px.

Actual: one link is pushed off-screen.

---

## Slide 16 – Not every change is a defect fix

### Defect fix
Corrects behaviour that is wrong.

### Refinement
Improves a working feature.

### Design change
Alters the planned solution, ideally for a justified reason.

---

## Slide 17 – Debugging workflow

1. reproduce
2. define expected behaviour
3. inspect actual behaviour
4. isolate cause
5. change one thing
6. retest
7. record

---

## Slide 18 – Reproduce first

If you cannot reproduce the issue, you cannot reliably prove you fixed it.

Record:

- page
- browser
- viewport
- action/input
- observed outcome

---

## Slide 19 – Inspect evidence

Useful evidence sources include:

- browser console
- developer tools
- element inspector
- network/path errors
- visible layout behaviour
- test inputs

---

## Slide 20 – One change at a time

Changing several unrelated things at once makes it harder to know what fixed the issue—and may create new defects.

---

## Slide 21 – Retest

After a fix, repeat the **same test condition**.

Then check nearby/related behaviour for regression.

---

## Slide 22 – Regression

A regression is when a change causes something that previously worked to stop working.

Example:

Fixing mobile navigation accidentally breaks the desktop layout.

---

## Slide 23 – Severity and priority

Not every problem is equally important.

Possible priorities:

- blocks main user task
- significant usability/accessibility problem
- visible but minor issue
- optional polish

Fix high-impact issues first.

---

## Slide 24 – Evidence quality

Weak evidence:

> “I fixed the menu.”

Stronger evidence:

- original issue
- test condition
- expected/actual result
- change made
- retest result
- reason the fix matters

---

## Slide 25 – Before and after

Keep evidence of important changes.

Useful sequence:

**before → issue → change → after → retest**

Do not overwrite all traces of development.

---

## Slide 26 – Versioning habit

Save meaningful versions/checkpoints.

Examples:

- navigation-complete
- responsive-layout-fix
- validation-added
- compatibility-fixes

Version history makes development visible.

---

## Slide 27 – Code quality

As the site grows, check for:

- repeated CSS
- repeated JavaScript
- unclear names
- unnecessary rules
- dead code
- inconsistent indentation
- comments that no longer match behaviour

---

## Slide 28 – Technical debt

Technical debt is future difficulty created by quick or poorly structured decisions now.

Example:

Copying the same CSS into several files may seem fast, but makes later changes harder and inconsistent.

---

## Slide 29 – Compatibility matrix

Record environment and result explicitly.

| Browser | Width | Feature | Result | Issue |
|---|---:|---|---|---|
| | | | | |

---

## Slide 30 – Responsive checks

At each useful width check:

- navigation
- text wrapping
- images
- cards/grid
- forms
- buttons
- horizontal scrolling
- spacing

---

## Slide 31 – Keyboard check

Use the keyboard only.

Can you:

- reach links/buttons?
- see focus?
- activate controls?
- move through the form logically?

---

## Slide 32 – Implementation sprint

Choose the highest-priority gap from your audit.

Before coding write:

> Requirement/gap:
>
> Expected outcome:
>
> Evidence I will capture:

Then implement.

---

## Slide 33 – Defect log activity

For one genuine issue record:

- ID
- condition
- expected
- actual
- severity
- cause
- fix
- retest

---

## Slide 34 – Traceability audit

Mark each requirement:

- **Green:** implemented and evidenced
- **Amber:** partly complete / weak evidence
- **Red:** missing or not working

Prioritise red before optional extras.

---

## Slide 35 – Do not feature-chase

A reliable website meeting its requirements is stronger than a website with many unstable extras.

Ask:

> Does this next feature improve fitness for purpose—or distract from unfinished essentials?

---

## Slide 36 – Readiness for formal testing

Before Week 13, aim for:

- core pages complete
- navigation consistent
- responsive behaviour substantially working
- required interactions functioning
- major defects known/fixed
- evidence captured

---

## Slide 37 – Exit ticket

Complete:

1. The highest-priority defect/gap in my website is…
2. I know this because…
3. My next implementation action is…
4. The evidence I will preserve is…

---

## Slide 38 – Next week

# Formal Website Testing

We move from informal development checks to a systematic test plan covering functionality, compatibility and usability.