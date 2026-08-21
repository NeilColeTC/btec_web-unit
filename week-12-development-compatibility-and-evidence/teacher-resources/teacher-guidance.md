# Week 12 Teacher Guidance – Development, Compatibility & Implementation Evidence

## Curriculum purpose

Week 12 is a consolidation and quality-control week. Learners have already encountered HTML, CSS and JavaScript separately; the focus now is whether those technologies combine into a coherent website that can be traced back to the reviewed design and client requirements.

The intended progression is:

**requirement → implementation → test → issue → fix → retest → evidence**

This week should establish the habits needed for formal testing in Week 13.

## Key teaching messages

### 1. A working page is not the same as a finished website

Learners often focus on whichever page they edited most recently. Require whole-site checks for:

- consistent navigation
- correct paths
- shared styling
- heading hierarchy
- responsive behaviour
- forms/interactivity
- keyboard focus
- content consistency

### 2. Compatibility should be checked during development

Waiting until the end can reveal problems that are expensive to fix. Encourage learners to run quick checks after significant layout or interaction changes.

Browser developer tools are useful for viewport emulation but should not be presented as proof of universal device compatibility.

### 3. Debugging is evidence-led

Discourage random code changes. Use:

**reproduce → expected → actual → inspect → isolate → fix → retest**

Ask learners to record at least one genuine defect in enough detail that another developer could understand what happened.

### 4. Retesting matters

A fix is not complete until the original test condition is repeated. Where practical, also check related behaviour for regression.

### 5. Evidence should reveal development

A final screenshot shows a result but not how the learner developed it.

Encourage evidence such as:

- version history
- code extracts
- defect records
- compatibility matrix
- before/after screenshots
- test outcomes
- reasons for changes
- requirement traceability

## Retrieval indicative answers

1. HTML provides page structure and meaning.
2. CSS controls presentation and layout.
3. JavaScript provides client-side behaviour/interactivity.
4. Media queries apply conditional CSS according to media/environment characteristics.
5. The DOM is the browser's object representation of the document.
6. An event listener registers code to respond to an event.
7. Responsive design adapts appropriately across different available widths/devices.
8. Keyboard users need a visible indication of the currently focused control.
9. A client requirement originates from the brief/client need; a design decision is the learner's chosen response.
10. A boundary test checks values immediately around a threshold/decision point.
11. Retesting verifies that the change actually resolved the original issue and helps identify regression.
12. Valid reasons include feedback, usability, accessibility, technical constraints or evidence from development/testing.

## Suggested neutral debugging demonstration

Use a simple page with one deliberate problem such as:

- broken relative image path
- missing stylesheet link
- CSS overflow at a narrow width
- incorrect JavaScript element ID

Do not use the exact learner Hot Beans implementation.

Model how to describe the issue before editing anything.

## Compatibility workshop

If resources permit, learners should compare available browsers. If not, focus on varying viewport widths and interactions, while making clear that this is narrower evidence.

Suggested checks:

- homepage/navigation
- one content-heavy page
- form page
- one JavaScript-enhanced feature

## Defect prioritisation

Encourage a simple impact model:

**High** – blocks a major user task, makes required content unavailable, or creates serious accessibility/usability failure.  
**Medium** – feature works poorly or inconsistently but core journey remains possible.  
**Low** – minor presentation or polish issue.

A learner should normally fix high-impact red items before adding optional enhancements.

## Requirement traceability

The audit is useful for preventing feature-chasing. If a feature cannot be linked to a requirement/user need, ask:

- why is it present?
- does it improve fitness for purpose?
- does it create testing/maintenance burden?

The answer may be to retain, simplify or remove it.

## Common weak behaviours and interventions

### “Everything works.”

Ask: In which browser, viewport and user journey did you verify that?

### “I fixed it.”

Ask: What was the original expected/actual result and what did the retest show?

### “My final page looks different from the wireframe, so I changed the wireframe.”

Ask: What evidence justified the implementation change? Preserve the development trail rather than rewriting history.

### “I added another feature because I finished early.”

Ask: Have all red/amber requirements been resolved and evidenced first?

## Adaptive teaching

### Support

- assign one page or journey at a time
- provide a fixed page audit
- allow oral debugging explanation before written recording
- use traffic-light requirement status
- provide a defect template

### Stretch

- require root-cause explanation
- test for regressions
- compare two browsers and explain differences
- identify duplicated or brittle code
- prioritise technical debt
- justify an implementation change from the reviewed design

## English, EDI and employability

**English:** precise technical descriptions, causal reasoning and concise records.

**EDI:** include keyboard access, readable layouts and different screen conditions in checks.

**Employability:** relate the process to QA tickets, bug reports, browser compatibility testing, iterative development, version control and professional sign-off.

## Assessment integrity

Tutors can teach methods, model generic examples and ask diagnostic questions. They should not write learner-specific assessed code or provide ready-made solutions to the Hot Beans brief.

## End-of-week expectation

Learners should be close enough to a complete implementation that Week 13 can focus on systematic testing rather than unfinished core development. Remaining gaps should be explicit, prioritised and traceable to requirements.