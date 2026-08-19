# Technique Map

This resource helps you identify techniques demonstrated in the Hot Wheels exemplar.

It is **not a checklist of features that must appear in your own website**. Select techniques because they are appropriate to your own users, purpose and design decisions.

| Technique | Where demonstrated | What it illustrates | Questions to ask before using it yourself |
|---|---|---|---|
| Semantic HTML | Stage 1, all pages | Meaningful page structure | What structure best describes my content? |
| Metadata | Stage 1, page `<head>` | Page information and basic SEO | Does each page have an accurate title and description? |
| Navigation and hyperlinks | Stage 1, all pages | Movement between pages and external resources | Can users predict where each link will take them? |
| Alternative text | Stage 1, images | Accessible non-text content | What information does this image communicate? |
| Form controls | Stage 1, Contact | Collecting different kinds of input | What information does my website genuinely need? |
| CSS variables | Stage 2, `style.css` | Consistent reusable design values | Which values will be reused across my design? |
| Flexbox | Stage 2, header/page layout | One-dimensional layout | Is the content mainly arranged in a row or column? |
| CSS Grid | Stage 2, Gallery | Two-dimensional responsive layout | Would rows and columns suit this content? |
| Media queries | Stage 2 | Responsive adaptation | At what widths does my layout stop working well? |
| Responsive images | Stage 2 | Flexible media | Do images resize without damaging layout or meaning? |
| Focus/hover states | Stage 2 | Interaction and accessibility | Can keyboard and pointer users identify interactive elements? |
| Functions | Stage 3, `script.js` | Reusable blocks of behaviour | Does this behaviour have a clear purpose and name? |
| Parameters | Stage 3 greeting/validation | Passing data into functions | What information does the function need? |
| Decisions | Stage 3 greeting/validation | Conditional behaviour | What different conditions must the program handle? |
| Arrays and iteration | Stage 3 validation | Repeating processing across data | Is there a genuine repeated task? |
| Events | Stage 3 | Responding to user/browser actions | What event should trigger the behaviour? |
| DOM manipulation | Stage 3 | Dynamically changing page content/state | Does changing the interface improve usability? |
| `localStorage` | Stage 3 theme | Remembering a browser preference | Is there a useful preference worth persisting? |
| Client-side validation | Stage 3 Contact | Checking user input | What counts as valid input and how should errors be communicated? |
| ARIA state/live feedback | Stage 3 | Accessible dynamic interfaces | Does dynamic behaviour remain understandable to assistive technology? |

## Use the exemplar critically

A technically possible feature is not automatically a good design decision.

For each technique you consider, be able to explain:

- what user need or requirement it addresses
- why it is suitable for the purpose and audience
- why it is preferable to a reasonable alternative
- how you will test whether it works
- what evidence would cause you to change it
