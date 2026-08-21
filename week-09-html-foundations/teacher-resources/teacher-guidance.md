# Week 9 Teacher Guidance – HTML Foundations

## Curriculum purpose

Week 9 is the first implementation-focused week. Learners should move from reviewed designs into code without losing the traceability established in Weeks 5–8.

The teaching priority is not memorising as many tags as possible. It is understanding the relationship:

**design requirement → content meaning → semantic structure → working navigation/media/forms → testing**

The existing Hot Wheels Stage 1 resource is especially useful because it deliberately contains no external CSS or JavaScript. This exposes the role of HTML clearly.

## Use of the exemplar

The repository's established teaching principle is that Hot Wheels should be an **example to interrogate**, not a foundation that learners rename into Hot Beans.

For Week 9:

1. begin with small neutral HTML experiments
2. then reveal/investigate Stage 1
3. ask learners to explain techniques and decisions
4. allow controlled changes in temporary copies
5. explicitly return learners to their own reviewed designs for assessed implementation

Do not release/use Stage 2 or Stage 3 as the main teaching object until their appropriate weeks if progressive release is being followed.

## Stage 1 features available for teaching

Stage 1 demonstrates:

- HTML5 document structure
- metadata and page titles
- heading/content hierarchy
- semantic `header`, `nav`, `main`, `section`, `article` and `footer`
- consistent multi-page navigation
- internal and external hyperlinks
- images with meaningful alternative text
- lists
- forms, labels and fieldsets
- text and email inputs
- radio buttons and checkboxes
- textarea and buttons

Its contact form is demonstrative and does not transmit/store data. This is useful for teaching the distinction between front-end form structure and actual data processing.

## Suggested modelling sequence

### 1. Document skeleton

Live-code a small neutral page from an empty file. Explain each line as a responsibility rather than syntax trivia.

### 2. Semantic content

Add a `header`, `nav`, `main`, sections and footer. Ask learners why each element is suitable.

### 3. Heading hierarchy

Model headings based on information structure. Avoid teaching headings as font-size shortcuts.

### 4. Links and paths

Use a visible folder tree and predict relative paths before testing them.

### 5. Images and alternative text

Contrast an informative image with a decorative image. Focus on communicated information, not exhaustive visual description.

### 6. Stage 1 investigation

Give learners time to discover examples before whole-class explanation.

### 7. Forms

Use `contact.html` to identify labels, input types, fieldsets and native validation.

### 8. Independent transfer

Close the exemplar and require learners to open their own reviewed designs before continuing assessed implementation.

## Indicative retrieval answers

1. HTML describes the structure/meaning/content of a webpage.
2. Semantic HTML uses elements whose names communicate the role/meaning of their content.
3. `<!DOCTYPE html>` identifies the document as modern HTML5 for browser parsing.
4. Metadata, title and linked resources are typical content of the `<head>`.
5. The title identifies the page/tab and provides useful context.
6. `<main>` contains the primary content unique to the page.
7. `section` groups thematically related content; `nav` identifies navigation links.
8. Heading levels should represent document hierarchy because they communicate structure to users/tools, not merely appearance.
9. A relative path locates a resource relative to the current document.
10. Example: `images/photo.jpg`.
11. Alt text should convey the meaningful information/purpose of an informative image.
12. A connected label identifies a control and improves usability/accessibility.
13. `required` asks the browser to prevent normal form submission while the field is empty.
14. Form controls provide the interface, but server-side/storage processing may not exist.
15. Stage 1 omits CSS/JS so learners can see the responsibility of HTML separately.

## Common misconceptions and interventions

### “The page looks bad, so the HTML is bad.”

Intervention: separate structural quality from presentation. Ask whether headings, navigation, content and form controls remain understandable.

### “I need lots of `div`s before I can build the page.”

Intervention: ask what the content means and whether a semantic element already describes it.

### “I should use `h3` because I want smaller text.”

Intervention: ask where the heading sits in the information hierarchy. Styling comes later.

### “Alt text is just the filename or 'picture'.”

Intervention: ask what information would be missing if the image could not be seen.

### “My form works because I can type into it.”

Intervention: distinguish interaction with controls from transmitting/storing submitted data.

### “I'll copy Stage 1 and replace the words.”

Intervention: return the learner to their site map/wireframes and ask them to justify each required page/section from their own design.

## Evidence quality and C.P4 preparation

By the end of the week, learners should be beginning to show that they can develop a website appropriate to their own design. Useful evidence can include:

- project/folder structure
- code excerpts they can explain
- screenshots of working pages
- tested navigation
- development log entries
- mapping between reviewed design and implemented structure

Avoid encouraging artificial evidence capture for every line of code. Evidence should demonstrate purposeful development and traceability.

## Testing habits from the start

Do not postpone all testing until later weeks. Require simple checks now:

- page opens without obvious structural errors
- navigation links reach expected pages
- images load
- alt attributes are present/appropriate
- form labels correspond to controls
- required fields/native input types behave as expected

This establishes the later C.P5 mindset that testing is part of development rather than a final administrative task.

## Adaptive teaching

### Support

- neutral starter skeleton rather than an assessed-site starter
- tag-purpose matching
- path diagrams
- scaffolded semantic decisions
- short pair programming followed by individual reconstruction
- one page completed well before multiplying pages

### Stretch

- compare semantic structure alternatives
- explain when `article` is more appropriate than `section`
- inspect accessibility tree/document outline with browser tools if available
- investigate additional suitable input types
- identify where native HTML provides useful behaviour without JavaScript
- critique Stage 1 and propose a justified structural improvement

## English, EDI and employability

**English:** meaningful headings, labels, link text, page titles and concise explanations all support communication skills.

**EDI:** semantic structure, meaningful alt text and labels contribute to inclusive web development. Encourage learners to consider varied access needs without assuming all users interact visually or with a mouse.

**Employability:** link the work to professional front-end development practices: readable structure, source control, incremental testing, debugging paths, and implementing against approved/reviewed designs.

## Assessment integrity

Teaching can demonstrate generic HTML techniques and use Hot Wheels for investigation. Tutors should not turn the exemplar into a completed Hot Beans implementation or provide learner-specific assessed code that resolves the brief for them.

The intended transfer is **technique and method**, not content, structure or finished solution.

## End-of-week readiness

Learners are ready for Week 10 when they can:

- create a valid HTML5 document independently
- explain their semantic choices
- create/test multi-page navigation
- handle basic images and alternative text
- understand accessible form structure
- show that their own implementation follows their reviewed design

Week 10 can then introduce CSS as presentation layered on top of this structure.