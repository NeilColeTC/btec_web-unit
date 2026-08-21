# JavaScript Mini-Lab – Event → Function → DOM Change

## Purpose

Practise the core browser-programming cycle before investigating the full Stage 3 exemplar.

> **select → listen → decide/process → update**

Work in a separate practice file. This is not assessed Hot Beans code.

---

## Task 1 – First event

Create:

```html
<button id="change-message">Change message</button>
<p id="message">Ready</p>
```

Add JavaScript that:

1. selects the button;
2. selects the paragraph;
3. listens for a `click`;
4. changes the paragraph text.

### Explain

- What is the event?
- What code runs because of it?
- Which DOM property changes?

---

## Task 2 – Function and parameter

Create a function:

```javascript
function createMessage(name) {
    return `Welcome, ${name}`;
}
```

Call it using at least three different values.

Record the returned value each time.

| Argument | Returned value |
|---|---|
| | |
| | |
| | |

Explain the difference between a **parameter** and an **argument**.

---

## Task 3 – Selection

Write a function `classifyScore(score)` that returns:

- `"low"` below 40;
- `"medium"` from 40 to 69;
- `"high"` from 70 upwards.

Test:

- 39
- 40
- 69
- 70

Why are these particularly useful test values?

---

## Task 4 – Toggle a class

Add a button that toggles a CSS class on the document body.

Suggested pattern:

```javascript
document.body.classList.toggle("example-state");
```

Create CSS that makes the state visibly different.

### Explain

Which responsibility belongs to JavaScript and which belongs to CSS?

---

## Task 5 – Attribute state

Create a button with an attribute such as:

```html
aria-expanded="false"
```

When clicked, toggle a Boolean state and update the attribute to match.

Explain why visual state and accessibility state should not contradict each other.

---

## Task 6 – Simple validation

Create a text input and submit button.

Write JavaScript that checks whether the trimmed value contains at least 3 characters.

Test:

| Input | Expected | Actual | Pass? |
|---|---|---|---|
| empty | error | | |
| `A` | error | | |
| `AB` | error | | |
| `ABC` | accepted | | |
| spaces only | error | | |

Why is `.trim()` useful here?

---

## Task 7 – Debugging challenge

Intentionally introduce one fault, for example:

- incorrect element ID;
- incorrect event name;
- missing bracket;
- incorrect condition.

Then document:

1. symptom;
2. evidence/console message;
3. cause;
4. fix;
5. retest result.

---

## Reflection

Complete:

> JavaScript becomes useful in a webpage when…

> One reason not to use JavaScript for a feature is…

> The most useful debugging habit from this activity is…