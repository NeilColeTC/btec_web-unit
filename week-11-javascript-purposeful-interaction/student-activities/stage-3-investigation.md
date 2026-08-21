# Stage 3 Investigation – Why Was JavaScript Added?

## Purpose

Investigate the existing **Hot Wheels Stage 3** exemplar as a developer.

Do not treat the finished interface as something to copy. Your job is to trace **purpose → code → behaviour → test**.

Use:

- `stage-3-javascript-refinement/README.md`
- `stage-3-javascript-refinement/script.js`
- the Stage 3 website in a browser

---

## Part 1 – Progression across stages

Complete:

| Stage | Main technology emphasis | What changed? | What remained recognisable? |
|---|---|---|---|
| Stage 1 | | | |
| Stage 2 | | | |
| Stage 3 | | | |

Why is comparing stages more useful educationally than looking only at the final version?

---

## Part 2 – Feature map

For each feature identify the problem/need it addresses.

| Feature | Problem / user need | Why JavaScript? |
|---|---|---|
| Time-based greeting | | |
| Theme preference | | |
| Responsive menu | | |
| Form validation | | |
| Scroll-to-top | | |

Which feature could most easily be removed without damaging the website's core purpose? Justify your judgement.

---

## Part 3 – Trace one feature deeply

Choose one feature.

### Feature:

### Trigger/event

What causes the code to run?

### DOM selection

Which element(s) are selected? Quote the relevant selector/ID names.

### Function(s)

Which functions are involved?

### Inputs/state

What information does the code inspect?

### Programming constructs

Tick and evidence those present:

- [ ] variable/constant
- [ ] function
- [ ] parameter
- [ ] return value
- [ ] selection
- [ ] array
- [ ] iteration
- [ ] event listener
- [ ] DOM manipulation
- [ ] attribute change
- [ ] class change
- [ ] persistence

### Result

What changes for the user?

### Accessibility

Is accessibility state/feedback considered? How?

---

## Part 4 – Greeting boundary test

Without running the code first, predict the result:

| Hour | Prediction | Actual | Pass? |
|---:|---|---|---|
| 0 | | | |
| 11 | | | |
| 12 | | | |
| 17 | | | |
| 18 | | | |
| 23 | | | |

Why are 11/12 and 17/18 important pairs?

---

## Part 5 – Form validation

Inspect `validateContactForm(form)`.

### Identify

1. the array used to collect errors;
2. the three values read from the form;
3. the validation checks;
4. the iteration construct;
5. what the function returns.

### Create test data

| Field | Valid test | Boundary test | Invalid test |
|---|---|---|---|
| Name | | | |
| Email | | | |
| Message | | | |

### Evaluate

Is the email check robust enough for a production system? Explain why a simple teaching demonstration and a production validation strategy may differ.

---

## Part 6 – Theme persistence

Test this sequence:

1. load page;
2. switch theme;
3. navigate to another page;
4. reload;
5. close/reopen if appropriate.

Record what happens.

Find the `localStorage` key used by the exemplar.

Explain:

> persistence means…

> the advantage for this feature is…

> a privacy/security reason not to store arbitrary information in `localStorage` is…

---

## Part 7 – Responsive menu

Trace the click event.

What happens to:

- the navigation class?
- `aria-expanded`?
- the hidden accessible label?

Why should these states change together?

---

## Part 8 – Defensive programming

Find at least one example like:

```javascript
if (!something) {
    return;
}
```

Explain why Stage 3 needs this pattern when one script is shared across several pages.

---

## Part 9 – Progressive enhancement

Temporarily disable JavaScript if your environment allows it, or reason from the Stage 2 version.

Record:

- what still works;
- what behaviour disappears;
- whether core content/navigation remains available;
- one improvement you would consider.

---

## Part 10 – Transfer, not copying

Choose one Stage 3 technique that could be useful in a completely different website.

Explain the **general technique** without referring to Hot Wheels content.

Then identify one feature you should **not** automatically copy into Hot Beans because its usefulness depends on requirements.

### Final statement

> The most important thing I learned from Stage 3 is not the feature itself, but…