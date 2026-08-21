# Week 10 Investigation – Stage 1 to Stage 2

Compare:

- `stage-1-html-foundation/`
- `stage-2-responsive-design/`

The purpose is to understand **what changed, why it changed and which technology is responsible**.

## Part 1 – First impressions

Without reading the CSS first, open the same page from both stages.

Record at least six visible differences.

| Difference | Stage 1 | Stage 2 | Likely cause |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## Part 2 – HTML comparison

Compare the HTML files.

1. What important line has been added in Stage 2?
2. Has the overall information architecture changed substantially?
3. Which semantic HTML elements remain from Stage 1?
4. What does this suggest about the relationship between HTML and CSS?

## Part 3 – Find the design system

Open `stage-2-responsive-design/style.css`.

Locate the `:root` section.

Record examples of:

| Custom property | Value | Where it is reused |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

Why is this preferable to repeating the same values throughout the stylesheet?

## Part 4 – Find the box model and base rules

Locate:

- `box-sizing`
- body margin
- line height
- image sizing
- main page width

For each, explain what problem the rule helps prevent or solve.

## Part 5 – Find Flexbox

Locate at least two places where `display: flex` is used.

| Selector | What is being arranged? | Why is Flexbox suitable? |
|---|---|---|
|  |  |  |
|  |  |  |

## Part 6 – Find Grid

Locate the gallery grid.

1. How many columns are used at wide widths?
2. What changes below 800px?
3. What changes below 560px?
4. Why is Grid a suitable choice for this content?

## Part 7 – Responsive images

Locate the base image rule and the gallery image rules.

Explain the purpose of:

- `max-width: 100%`
- `height: auto`
- `object-fit: cover`

What trade-off can `object-fit: cover` introduce?

## Part 8 – Interaction states

Locate styles for:

- `:hover`
- `:focus-visible`

Explain why both pointer and keyboard interaction states matter.

## Part 9 – Breakpoint experiment

Temporarily change one breakpoint value.

| Item | Record |
|---|---|
| Original breakpoint |  |
| Temporary breakpoint |  |
| Viewport widths tested |  |
| What changed |  |
| Improvement or regression? |  |
| Reason |  |

Restore the original value afterwards.

## Part 10 – Disable CSS

Use browser developer tools to disable the stylesheet.

What remains usable?

What becomes less usable?

Why is it valuable that the semantic HTML still communicates structure when CSS is removed?

## Part 11 – Transfer, not copying

Choose two Stage 2 decisions that would **not automatically** be appropriate for another client.

For each, explain:

1. the Stage 2 decision
2. why it suits Hot Wheels
3. what another client might need instead
4. what evidence should influence the alternative decision

## Final conclusion

Complete:

> The most important lesson from comparing Stage 1 and Stage 2 is…

Support your answer with at least two specific examples from the code.