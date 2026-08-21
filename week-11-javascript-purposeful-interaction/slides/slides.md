# Week 11 Slides – JavaScript & Purposeful Interaction

---

## Slide 1 – Week 11

# JavaScript & Purposeful Interaction

**From static interface to event-driven behaviour**

---

## Slide 2 – Today

We will learn how to:

- recognise core JavaScript constructs;
- respond to browser events;
- manipulate the DOM;
- validate user input;
- manage interface state;
- test interactive features;
- decide when JavaScript is actually appropriate.

---

## Slide 3 – Retrieval

Without notes:

1. What is semantic HTML?
2. What is the purpose of CSS?
3. What is a media query?
4. What does responsive design mean?
5. Why should keyboard focus be visible?

---

## Slide 4 – Three layers

### HTML
Structure and meaning.

### CSS
Presentation and layout.

### JavaScript
Behaviour and interaction.

Good development keeps these responsibilities understandable.

---

## Slide 5 – The key question

Before adding JavaScript ask:

> **What problem or user need does this solve?**

JavaScript is not automatically an improvement.

---

## Slide 6 – Client-side scripting

Client-side JavaScript normally runs in the user's browser.

It can:

- respond to events;
- inspect/change page content;
- change classes and attributes;
- validate input;
- maintain interface state;
- provide immediate feedback.

---

## Slide 7 – Event-driven programming

A browser spends much of its time waiting for events.

Examples:

- page loaded;
- button clicked;
- form submitted;
- key pressed;
- window scrolled.

**event → handler → action**

---

## Slide 8 – DOM

DOM = **Document Object Model**.

The browser represents the HTML document as objects that JavaScript can access and modify.

JavaScript can therefore connect programming logic to the visible interface.

---

## Slide 9 – Selecting an element

```javascript
const message = document.getElementById("message");
```

Ask:

- What is stored in `message`?
- What happens if the ID is wrong?

---

## Slide 10 – Listening for an event

```javascript
button.addEventListener("click", () => {
    message.textContent = "Clicked";
});
```

Trace:

**button → click → function → DOM change**

---

## Slide 11 – Functions

```javascript
function getGreeting(hour) {
    // logic
}
```

A function groups behaviour into a reusable named unit.

Benefits include:

- readability;
- reuse;
- easier testing;
- easier debugging.

---

## Slide 12 – Parameters

`hour` is a parameter:

```javascript
function getGreeting(hour) {
```

It allows the same function to work with different input values.

What would these calls represent?

```javascript
getGreeting(9);
getGreeting(14);
getGreeting(21);
```

---

## Slide 13 – Selection

```javascript
if (hour < 12) {
    return "Good morning";
} else if (hour < 18) {
    return "Good afternoon";
} else {
    return "Good evening";
}
```

Which branch executes for:

- 11?
- 12?
- 17?
- 18?

---

## Slide 14 – Boundary values

The values around a decision boundary are especially important tests.

For the greeting:

- 11 / 12
- 17 / 18

Why are these more informative than testing only 9 and 20?

---

## Slide 15 – Return values

`return` sends a result back to the calling code.

```javascript
const greeting = getGreeting(14);
```

What value should `greeting` contain?

---

## Slide 16 – Classes as state

JavaScript can coordinate with CSS by changing classes:

```javascript
document.body.classList.toggle("dark-theme");
```

JavaScript controls the state.
CSS controls how that state looks.

---

## Slide 17 – Attributes and accessibility

An interface can have visual **and accessibility** state.

Example:

```javascript
menuButton.setAttribute("aria-expanded", String(menuOpen));
```

If a menu opens visually, its accessibility state should remain accurate too.

---

## Slide 18 – Persistent state

`localStorage` can retain small pieces of browser-side information.

Stage 3 uses it for a theme preference.

Sequence:

**read saved preference → apply state → user changes state → save new preference**

---

## Slide 19 – Persistence question

Which of these might reasonably persist?

- theme preference;
- whether a temporary error message is visible;
- basket contents;
- user's password;
- preferred display layout.

Consider usefulness **and** privacy/security.

---

## Slide 20 – Form events

A form can listen for submission:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
});
```

Why might a teaching example prevent submission while validation is demonstrated?

---

## Slide 21 – Arrays

Stage 3 stores validation checks in an array.

An array allows several related items to be processed systematically.

Think:

**collection → iterate → inspect each item → act**

---

## Slide 22 – Iteration

```javascript
checks.forEach((check) => {
    if (!check.valid) {
        errors.push(check.message);
    }
});
```

Identify:

- iteration;
- selection;
- array modification.

---

## Slide 23 – Validation flow

A useful mental model:

**input → trim/read → test conditions → collect errors → display feedback**

Validation should be systematic, not a collection of unrelated alerts.

---

## Slide 24 – Important limitation

Client-side validation can improve user experience.

It does **not** make submitted data trustworthy by itself.

Browser-side code can be bypassed or changed.

Real systems require appropriate server-side validation too.

---

## Slide 25 – User feedback

Good validation feedback should help the user recover.

Compare:

> Invalid.

with:

> Enter a name containing at least 2 characters.

Which is more actionable?

---

## Slide 26 – Dynamic DOM creation

JavaScript can create new elements:

```javascript
const item = document.createElement("li");
item.textContent = message;
list.appendChild(item);
```

This allows feedback to be generated from data rather than hard-coded repeatedly.

---

## Slide 27 – Stage 3 progression

### Stage 1
HTML structure/content.

### Stage 2
CSS presentation/responsiveness.

### Stage 3
JavaScript behaviour/refinement.

Ask for every Stage 3 feature:

**Why was JavaScript introduced?**

---

## Slide 28 – Stage 3 features

Investigate:

1. time-based greeting;
2. persistent theme preference;
3. hamburger navigation;
4. form validation;
5. scroll-to-top control.

Do not just describe what they look like.

---

## Slide 29 – Code investigation framework

For each feature identify:

1. user/interface problem;
2. triggering event;
3. selected DOM element(s);
4. function(s);
5. decisions/data structures;
6. DOM/state change;
7. accessibility consideration;
8. test cases.

---

## Slide 30 – Defensive checks

Stage 3 contains patterns such as:

```javascript
if (!button) {
    return;
}
```

Why?

The shared script can run on pages where a particular element does not exist.

---

## Slide 31 – Progressive enhancement

A useful principle:

> Start with usable HTML, add CSS presentation, then add JavaScript where it provides worthwhile behaviour.

Ask:

What remains usable if JavaScript fails?

---

## Slide 32 – JavaScript is not always needed

Could the requirement already be met using:

- semantic HTML?
- built-in browser behaviour?
- CSS?

Avoid scripting purely to demonstrate that you know JavaScript.

---

## Slide 33 – Testing interactive features

Test more than the happy path.

Consider:

- expected use;
- boundary values;
- empty input;
- malformed input;
- repeated interaction;
- reload/persistence;
- keyboard use;
- different viewport sizes;
- different browsers.

---

## Slide 34 – Debugging process

When something fails:

1. reproduce the problem;
2. inspect the console;
3. check selectors/IDs;
4. check event attachment;
5. inspect values/state;
6. isolate the smallest failing part;
7. change one thing;
8. retest.

Random editing is not debugging.

---

## Slide 35 – Your Hot Beans website

Return to your own reviewed design.

Identify one interaction that genuinely supports:

- a requirement;
- a user need;
- usability/accessibility;
- meaningful feedback.

Plan before coding.

---

## Slide 36 – Explain your decision

Use this structure:

> The requirement/user need is…
>
> I implemented…
>
> The feature responds when…
>
> It uses…
>
> This benefits the user because…
>
> I will test it by…

---

## Slide 37 – Evidence habit

Keep evidence as you develop:

- code versions;
- screenshots;
- test tables;
- errors and fixes;
- before/after behaviour;
- reasons for changes.

Do not try to reconstruct the development process at the end.

---

## Slide 38 – Final challenge

Explain the difference between:

> **a website containing JavaScript**

and

> **a website using JavaScript purposefully**.

---

## Slide 39 – Exit ticket

1. What is an event listener?
2. What is the DOM?
3. Give one reason to use a function.
4. Why is client-side validation insufficient on its own?
5. Describe one purposeful JavaScript feature you could justify for your website.