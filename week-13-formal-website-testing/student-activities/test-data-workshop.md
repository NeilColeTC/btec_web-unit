# Test Data Workshop – Normal, Boundary and Erroneous Data

## Purpose

Practise selecting data that reveals whether website logic and validation behave correctly.

---

## Task 1 – Minimum-length rule

Requirement:

> A name must contain at least 2 characters.

Complete:

| Data type | Example | Expected result | Why useful? |
|---|---|---|---|
| Normal | | | |
| Boundary below | | | |
| Boundary valid | | | |
| Erroneous | | | |

---

## Task 2 – Message length

Requirement:

> A message must contain at least 10 characters after leading/trailing spaces are removed.

Choose useful tests around the boundary.

| Input | Type | Expected result |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

Explain why a long valid message alone would not test the condition thoroughly.

---

## Task 3 – Email-format demonstration

Assume a simple teaching validation check expects an email string to contain `@` and `.`.

Create:

- one typical valid input;
- one invalid input missing `@`;
- one invalid input missing `.`;
- one unusual input that may expose the weakness of the simple rule.

Explain why client-side demonstrations are not the same as production-grade validation.

---

## Task 4 – Decision boundary

Code:

```javascript
if (hour < 12) {
    return "morning";
} else if (hour < 18) {
    return "afternoon";
} else {
    return "evening";
}
```

Select six useful test values and predict each result.

| Hour | Why chosen? | Expected result |
|---:|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |

---

## Task 5 – No forced data categories

For each feature decide whether normal/boundary/erroneous data is genuinely useful.

| Feature | Data testing useful? | Better condition/method if not |
|---|---|---|
| Navigation link | | |
| Responsive layout | | |
| Application form | | |
| Hamburger menu | | |
| External course link | | |

---

## Task 6 – Your own website

Identify two features in your Hot Beans site where boundary/invalid data is relevant.

### Feature 1

Rule/condition:

Normal test:

Boundary test(s):

Erroneous test:

### Feature 2

Rule/condition:

Normal test:

Boundary test(s):

Erroneous test:

---

## Reflection

> Good test data is useful because…

> Boundary data is especially valuable when…