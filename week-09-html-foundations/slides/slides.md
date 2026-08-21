# Week 9 Slides – HTML Foundations

## Slide 1 – Week 9
**HTML Foundations**  
From reviewed design to implementation

---

## Slide 2 – Today’s question
How do we turn a website design into meaningful page structure before worrying about appearance?

---

## Slide 3 – Learning outcomes
By the end of today you should be able to:
- build a valid HTML5 page
- use semantic structure
- create links and images correctly
- use meaningful alternative text
- create basic accessible forms
- explain how HTML relates to your own reviewed design

---

## Slide 4 – Retrieval
What evidence should exist before implementation begins?
- requirements
- site map
- wireframes
- review feedback
- refinements
- justification

Why should code follow this evidence rather than replace it?

---

## Slide 5 – HTML’s job
HTML describes **structure and meaning**.

CSS handles presentation.  
JavaScript adds behaviour.

Today we deliberately focus on HTML.

---

## Slide 6 – Basic document anatomy
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page title</title>
</head>
<body>
    ...
</body>
</html>
```

---

## Slide 7 – The `<head>`
The `<head>` can contain information such as:
- character encoding
- viewport settings
- description metadata
- author metadata
- page title
- links to external resources

It is not the visible page content.

---

## Slide 8 – Why page titles matter
A good `<title>` helps:
- identify the browser tab
- distinguish pages
- provide context
- support basic search visibility

Each page should have an accurate title.

---

## Slide 9 – Semantic HTML
Semantic elements communicate purpose.

Common examples:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

---

## Slide 10 – Semantic does not mean decorative
`<nav>` does not make a menu beautiful.

It tells the browser/developer/assistive technology:
**this content is navigation**.

Presentation comes later.

---

## Slide 11 – Heading hierarchy
Headings communicate document structure.

Think:
- `h1` = main page heading
- `h2` = major section
- `h3` = subsection within that section

Do not choose heading levels because of font size.

---

## Slide 12 – Paragraphs and lists
Use the element that matches the meaning:
- paragraph for prose
- unordered list for items without sequence
- ordered list when order matters

Meaning first.

---

## Slide 13 – Hyperlinks
```html
<a href="about.html">About us</a>
```

The `href` tells the browser where to go.

Good link text should make the destination understandable.

---

## Slide 14 – Relative paths
If files are in the same folder:
```html
<a href="about.html">About</a>
```

If the target is inside a subfolder:
```html
<img src="images/photo.jpg" alt="...">
```

Paths describe location relative to the current file.

---

## Slide 15 – Path debugging
If a link/image fails, check:
1. spelling
2. filename extension
3. folder name
4. upper/lower case
5. location relative to the current page

Do not immediately rewrite the whole page.

---

## Slide 16 – Images
```html
<img src="images/hero.jpg" alt="Laptop displaying a web design project">
```

Two separate decisions:
- where is the file?
- what information does the image communicate?

---

## Slide 17 – Alternative text
Useful alt text communicates the meaningful information conveyed by the image.

Avoid:
- filename-style descriptions
- “image of…” when unnecessary
- long visual inventories with no purpose

Decorative images may need empty alt text instead.

---

## Slide 18 – Build challenge
Create a neutral page containing:
- `header`
- `nav`
- `main`
- `h1`
- two content sections
- one image
- one list
- footer

No CSS.

---

## Slide 19 – Multi-page thinking
A site is more than one page.

Consistency matters:
- navigation labels
- file names
- page titles
- structure
- paths

---

## Slide 20 – Navigation test
Create two pages.

Can page A reach page B?  
Can page B return to page A?

Test the links in the browser rather than assuming they work.

---

## Slide 21 – Introducing Stage 1
Now inspect:
`stage-1-html-foundation/`

Remember: this is **Hot Wheels**, a different fictional client and a teaching exemplar.

---

## Slide 22 – What Stage 1 demonstrates
Look for:
- metadata and titles
- semantic structure
- heading hierarchy
- navigation
- links
- images/alt text
- lists
- forms and labels

---

## Slide 23 – Why Stage 1 looks plain
There is no external CSS and no JavaScript.

That is deliberate.

Question: **What remains useful before styling exists?**

---

## Slide 24 – Investigate `index.html`
Find:
- viewport metadata
- description metadata
- page title
- `nav`
- `main`
- one `h1`
- sections/articles
- image and alt text
- footer

Explain the purpose of each.

---

## Slide 25 – Trace the navigation
Stage 1 links between:
- Home
- About
- Services
- Gallery
- Contact

Trace the relative paths and predict what would happen if one filename changed.

---

## Slide 26 – Forms
A form can contain:
- labels
- text/email inputs
- radio buttons
- checkboxes
- textarea
- buttons
- fieldsets and legends

The type of control should match the information being collected.

---

## Slide 27 – Labels matter
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

The `for` value matches the input `id`.

This helps users understand and interact with the control.

---

## Slide 28 – Native validation
HTML can provide basic checks:
```html
<input type="email" required>
```

This is useful, but it is not the same as a complete data-processing system.

---

## Slide 29 – Stage 1 contact form limitation
The exemplar form demonstrates controls but does **not** transmit/store data.

Why is it important to distinguish interface from processing?

---

## Slide 30 – Controlled modification
In a temporary copy of Stage 1:
- change one heading
- add one navigation link/page
- change one image/alt text
- predict the result first
- test afterward

Record what changed.

---

## Slide 31 – Return to your own design
Now stop extending Hot Wheels.

Open your reviewed design evidence and ask:
- Which pages do **I** need?
- What semantic structure describes **my** content?
- What navigation follows **my** site map?

---

## Slide 32 – Independent build target
By the end of the session, aim to have:
- project folder structure
- valid first page
- meaningful metadata/title
- semantic content structure
- at least two linked pages where appropriate
- tested navigation

---

## Slide 33 – Evidence of development
Useful evidence includes:
- screenshots of working pages
- code excerpts you can explain
- link/navigation testing
- mapping from design to implemented structure
- development notes for issues and fixes

---

## Slide 34 – Common mistakes
- using headings for size
- broken relative paths
- generic link text
- missing/poor alt text
- unlabeled form controls
- copying exemplar content
- coding pages that are not in the reviewed design

---

## Slide 35 – Retrieval check
Explain:
1. HTML’s main responsibility
2. semantic HTML
3. relative path
4. alt text
5. why `label` matters
6. why Stage 1 has no CSS

---

## Slide 36 – Exit question
Complete:

**One HTML decision I made from my own design today was…**

**I know it works because…**

---

## Slide 37 – Next week
**CSS and Responsive Design**

We will compare Stage 1 with Stage 2 and investigate how presentation can change while much of the HTML structure remains the same.