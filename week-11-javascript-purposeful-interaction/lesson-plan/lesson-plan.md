# Week 11 Lesson Plan – JavaScript & Purposeful Interaction

**Duration:** 3 hours  
**Learning Aim:** C  
**Prior learning:** HTML foundations; external CSS; responsive design; reviewed Hot Beans design documentation.

## Learning objectives

Learners will:

- explain where JavaScript fits within a client-side website;
- recognise core programming constructs in browser-based scripts;
- respond to browser events;
- manipulate the DOM safely;
- implement and test a purposeful interactive feature;
- evaluate whether JavaScript is necessary for a proposed feature;
- document how their implementation relates to user/client requirements.

## Success criteria

### Developing
I can identify JavaScript events, functions and decisions and make a simple DOM change.

### Secure
I can create a working event-driven feature and explain how it meets a user need.

### Extending
I can combine programming constructs, accessibility considerations and systematic testing to justify and refine an original feature.

---

## Lesson sequence

| Time | Phase | Teacher activity | Learner activity | Assessment / evidence |
|---|---|---|---|---|
| 0–10 | Retrieval | Review HTML/CSS separation and introduce JavaScript as behaviour | Complete retrieval quiz | Retrieval responses |
| 10–25 | Concept model | Demonstrate HTML + CSS + JS responsibilities using one interface | Classify examples as structure, presentation or behaviour | Cold-call questioning |
| 25–45 | Core JS | Model variables, functions, parameters, return values and decisions | Trace short examples and predict output | Mini-whiteboard responses |
| 45–65 | DOM/events | Demonstrate selection, `addEventListener`, `textContent`, attributes and classes | Complete guided DOM mini-lab | Working code + explanation |
| 65–75 | Break | — | — | — |
| 75–95 | Stage 3 investigation 1 | Introduce Stage 3 as a teaching exemplar | Identify five features and the user/interface problem each addresses | Investigation sheet |
| 95–115 | Stage 3 investigation 2 | Model code tracing for one feature | Trace another feature: event → function → decision/data → DOM result | Annotated investigation |
| 115–130 | Validation | Model validation flow and explain client-side limitations | Test valid, boundary and invalid inputs | Test observations |
| 130–145 | Accessibility/state | Demonstrate `aria-expanded`, `aria-live`, keyboard use and progressive enhancement | Audit one Stage 3 feature | Written audit |
| 145–160 | Planning | Reconnect to learners' reviewed Hot Beans designs | Select a genuine interaction need and complete implementation planner | Individual plan |
| 160–175 | Implementation | Coach/debug without supplying assessed solution code | Implement or extend original JavaScript in own website | Code + screenshots/test evidence |
| 175–180 | Plenary | Review purposeful scripting principle | Complete exit ticket | Exit ticket |

---

## Teacher modelling notes

### Model the browser as an event-driven environment

Use a very small example before Stage 3:

```html
<button id="example-button">Change message</button>
<p id="message">Ready</p>
```

```javascript
const button = document.getElementById("example-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "The button was clicked";
});
```

Ask learners to identify:

1. the elements selected;
2. the event being listened for;
3. the function executed;
4. the DOM change;
5. what happens before the event occurs.

### Make purpose precede syntax

For each Stage 3 feature ask:

- What problem does this solve?
- What triggers it?
- What information/state does it use?
- What changes in the interface?
- Could HTML/CSS solve the problem without JavaScript?
- How would we know the feature works?

### Validation misconception

Make explicit that client-side validation improves immediate feedback and user experience, but must not be presented as sufficient protection for real submitted data. The exemplar deliberately sends/stores no personal data.

---

## Stage 3 feature allocation

Pairs can investigate different features before reporting back:

1. time-based greeting;
2. persistent theme preference;
3. responsive navigation;
4. form validation;
5. scroll-to-top control.

Require learners to use code evidence rather than merely describe what they see on screen.

---

## Adaptive teaching

### Support

- provide event → function → result tracing frames;
- begin with `getElementById()` before broader selector methods;
- give partially completed mini-lab code;
- allow learners to annotate printed code before editing;
- pair stronger readers with learners who need support during exemplar investigation;
- use a vocabulary bank for DOM, event, parameter, return value, array and iteration.

### Stretch

Ask learners to:

- refactor repeated code into a function;
- explain early returns used when elements do not exist;
- compare temporary state with `localStorage` persistence;
- improve accessibility state;
- propose failure cases;
- create boundary-value tests;
- explain why JavaScript should not be used where HTML/CSS already provides the required behaviour.

---

## English and maths

### English

Learners explain causal chains accurately:

> When **event X** occurs, function **Y** runs. It checks **Z**, then changes **A**, which provides **B benefit** to the user.

### Maths/computational thinking

- Boolean conditions;
- threshold values;
- boundary testing;
- sequence and selection;
- iteration through collections;
- hour ranges in the greeting feature.

---

## Employability and transferable skills

- debugging rather than random editing;
- code readability;
- evidence-based testing;
- translating requirements into functionality;
- accessibility awareness;
- explaining technical decisions to another developer/client.

---

## Assessment boundary

Stage 3 is for analysis and experimentation. Do not direct learners to transplant its features into Hot Beans. A feature belongs in assessed work only where the learner can connect it to their own requirement/design and explain their implementation.

## Evidence to retain

Learners should begin retaining:

- versioned code;
- screenshots or recordings of working interactions;
- test inputs and expected/actual outcomes;
- debugging notes;
- links between functionality and requirements;
- explanations of changes/refinements.