# Week 15 Slides – Review & Evaluation

---

## Slide 1 – Week 15

# Review & Evaluation

**From “what I built” to “how well it worked”**

---

## Slide 2 – Today

We will:

- distinguish description from evaluation;
- organise evidence around requirements;
- judge strengths and limitations;
- use testing and feedback evidence;
- compare alternatives;
- evaluate optimisation;
- reflect on development decisions.

---

## Slide 3 – Retrieval

1. What is a defect?
2. What is retesting?
3. What is regression testing?
4. Why keep before/after evidence?
5. What makes an optimisation evidence-led?

---

## Slide 4 – Evaluation is not description

Description answers:

> What is there?

Evaluation answers:

> How effective is it, based on evidence, and why?

---

## Slide 5 – Four levels of thinking

### Describe
What exists?

### Explain
How/why does it work?

### Analyse
What effect does it have?

### Evaluate
How effective is it, what are the limitations, and what judgement follows?

---

## Slide 6 – Weak statement

> My website has a navigation bar.

This is description.

What evidence or judgement is missing?

---

## Slide 7 – Better statement

> The navigation remained consistent across all pages, which made movement between sections predictable for users.

Better — but still not fully evaluative.

---

## Slide 8 – Stronger evaluation

> The consistent navigation was effective because testing showed every required page was reachable from each section on desktop and mobile. This supports users who need to move quickly between vacancy information and the application page. A limitation is that the mobile menu requires an extra action to reveal links; however, this trade-off preserves more screen space for content. On balance, the approach was appropriate for the intended audience.

---

## Slide 9 – Evaluation structure

Use:

**requirement → evidence → strength/limitation → consequence → alternative → judgement**

---

## Slide 10 – Evidence comes first

Possible evidence sources:

- client requirements;
- reviewed designs;
- implementation screenshots/code;
- test results;
- defect records;
- user feedback;
- optimisation before/after evidence;
- retest results.

---

## Slide 11 – Avoid unsupported praise

Weak:

> The website is professional and easy to use.

Ask:

- According to what evidence?
- Which users?
- Which aspects?
- Compared with what alternative?

---

## Slide 12 – Requirements as evaluation headings

A strong evaluation can be organised around important requirements rather than technologies.

Example:

> Requirement: users must be able to submit an application.

Then judge how effectively the implemented solution meets that requirement.

---

## Slide 13 – Audience and purpose

Ask:

- Does the tone suit the intended audience?
- Is information easy to locate?
- Are calls to action obvious?
- Does the website support the client's purpose?
- Are there design choices that could distract or exclude users?

---

## Slide 14 – Visual design

Evaluate:

- hierarchy;
- consistency;
- typography;
- colour/contrast;
- spacing;
- imagery;
- alignment;
- relationship to audience and purpose.

Do not simply list CSS properties.

---

## Slide 15 – Navigation and structure

Useful evidence might include:

- link tests;
- user feedback;
- mobile behaviour;
- consistency across pages;
- number of steps required to reach key content.

---

## Slide 16 – Responsive design

A responsive site is not automatically successful.

Judge:

- what changed at narrower widths;
- whether content remained usable;
- whether any overflow/layout failures remained;
- whether controls remained accessible;
- whether important content stayed prominent.

---

## Slide 17 – Accessibility

Evaluate more than the presence of `alt` text.

Consider:

- semantic structure;
- keyboard access;
- visible focus;
- labels;
- status/error feedback;
- colour contrast;
- meaningful alternative text;
- accessible interaction state.

---

## Slide 18 – Forms and interaction

Ask:

- Is the required data clear?
- Is validation helpful?
- Can users recover from errors?
- Is feedback specific?
- Does the interaction work without a mouse?
- Is JavaScript genuinely useful?

---

## Slide 19 – Performance

Evidence might include:

- optimised image sizes;
- loading observations;
- unnecessary asset removal;
- responsive media choices;
- performance-tool measurements where available.

Do not claim speed improvements without evidence.

---

## Slide 20 – Compatibility

Evaluate whether the site behaved consistently across the environments actually tested.

Be precise:

> “The site worked in Chrome and Edge during testing…”

is stronger than:

> “The site works in all browsers.”

---

## Slide 21 – Testing evidence

A strong evaluation uses test outcomes rather than merely saying:

> I tested the website.

Instead discuss:

- what the testing revealed;
- what changed because of it;
- what remained unresolved;
- whether the final outcome improved.

---

## Slide 22 – Failed tests can strengthen evaluation

A failed test can show:

- honesty;
- diagnosis;
- responsive development;
- evidence-led refinement.

The key question is what happened next.

---

## Slide 23 – Evaluate optimisation

Do not write:

> I improved the navigation.

Write:

- what the original issue was;
- evidence of the issue;
- alternatives considered;
- selected change;
- retest result;
- whether the change fully or partly solved it.

---

## Slide 24 – Before and after

Strong optimisation evidence can include:

- screenshots;
- file-size measurements;
- test results;
- user feedback;
- changed code;
- fewer steps/errors;
- improved accessibility state.

---

## Slide 25 – Limitations are not failure

A credible evaluation identifies limitations.

Examples:

- a feature meets the requirement but could be more efficient;
- compatibility evidence is limited to available browsers;
- client-side validation is not a complete production solution;
- content may need future maintenance.

---

## Slide 26 – Alternatives

Evaluation improves when you compare with a realistic alternative.

Ask:

> What else could I reasonably have done?

Then consider advantages and disadvantages.

---

## Slide 27 – Trade-offs

Many design decisions are compromises.

Examples:

- richer imagery vs performance;
- compact navigation vs immediate visibility;
- animation vs distraction/accessibility;
- complex validation vs simplicity.

Good evaluation recognises trade-offs.

---

## Slide 28 – Avoid hindsight fiction

Do not invent alternatives you never considered solely to sound evaluative.

Use genuine development evidence where possible.

If proposing a future alternative, label it clearly as a future improvement.

---

## Slide 29 – User feedback

User feedback is evidence — but evaluate its quality.

Ask:

- Who gave the feedback?
- What task did they perform?
- Was the feedback specific?
- Did it align with test evidence?
- Did you accept, adapt or reject it?

---

## Slide 30 – Development decisions

Evaluate your own choices:

- Which decisions were effective?
- Which caused rework?
- Which were well planned?
- What would you do earlier next time?
- How did versioning/testing affect the process?

---

## Slide 31 – Working practices

Possible areas:

- planning;
- organisation;
- file structure;
- naming;
- commenting;
- version control;
- testing frequency;
- evidence capture;
- time management.

---

## Slide 32 – Evaluation paragraph frame

> The requirement was…
>
> Evidence shows…
>
> This was effective/partly effective because…
>
> The consequence for the user/client was…
>
> A limitation was…
>
> An alternative would have been…
>
> On balance…

---

## Slide 33 – What makes a judgement strong?

A strong judgement is:

- specific;
- supported;
- balanced;
- linked to requirements;
- aware of limitations;
- based on evidence.

---

## Slide 34 – Evidence quality check

For every major claim ask:

> What evidence proves this?

If you cannot answer, either:

- find evidence;
- qualify the claim;
- remove it.

---

## Slide 35 – Peer-review rule

Your partner should not rewrite your work.

They should identify:

- unsupported claims;
- description without judgement;
- missing requirement links;
- weak alternatives;
- unbalanced conclusions.

---

## Slide 36 – Strong conclusion

A final conclusion should answer:

> To what extent does the website meet the client's requirements and intended purpose?

Then support that overall judgement with the most important evidence.

---

## Slide 37 – Do not overclaim

Use precise language:

- “within the browsers tested…”
- “based on the two users who reviewed…”
- “the retest showed…”
- “the improvement reduced…”

Precision is stronger than exaggeration.

---

## Slide 38 – Your task

Build your evaluation from evidence already created during the project.

Do not start with a blank page and try to remember everything.

---

## Slide 39 – Exit ticket

1. What makes a statement evaluative?
2. Why should evaluation be organised around requirements?
3. Give one example of evidence that can support a judgement.
4. Why are limitations useful in an evaluation?
5. What does “on balance” signal in evaluative writing?