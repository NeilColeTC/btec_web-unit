# Stage 2 – CSS & Responsive Design

## Purpose

Stage 2 develops the **same five-page website created in Stage 1**. The HTML content and information architecture remain recognisable, but an external stylesheet now controls presentation and responsive behaviour.

This is a **worked teaching exemplar**, not starter code for the assessed Hot Beans Web website.

## Progression from Stage 1

Compare the Stage 1 and Stage 2 files. The main HTML change is the link to `style.css`; most of the development is deliberately contained in the external stylesheet.

This makes an important distinction visible:

- HTML provides structure and meaning.
- CSS controls presentation and layout.
- JavaScript is still absent at this stage.

## What this stage demonstrates

- external CSS
- CSS custom properties (variables)
- reset/base rules and the box model
- typography and spacing
- colour and contrast
- reusable selectors
- navigation styling
- hover and keyboard focus states
- responsive images
- card-style presentation
- Flexbox for page/header layout
- CSS Grid for the gallery
- `object-fit` for consistent image presentation
- form styling
- responsive layouts using media queries
- `clamp()` for responsive heading size
- desktop, tablet and mobile layout changes

## Responsive behaviour

The layout changes at two example breakpoints:

- below 800px the header/navigation and gallery adapt for narrower screens
- below 560px the gallery becomes a single column and controls become easier to use on small screens

These values are examples, not rules that every website should copy. A developer should choose breakpoints based on when their own content and layout require adaptation.

## Accessibility considerations

Stage 2 retains the semantic HTML and alternative text from Stage 1 and adds visible keyboard focus styling. Colour choices should still be tested rather than assumed to be accessible.

## Deliberately absent

There is still **no JavaScript**. The responsive navigation works using CSS layout rather than a hamburger menu. Stage 3 will introduce client-side scripting only where behaviour/interactivity benefits from it.

## Questions for learners

1. Which visual changes came from CSS without changing the page content?
2. Why is Grid suitable for the gallery?
3. Where is Flexbox used, and what layout problem does it solve?
4. What happens to the layout as the viewport becomes narrower?
5. Why might another website need different breakpoints?
6. Which design decisions would you change for a different audience or purpose?
7. Which features can be achieved without JavaScript?

## Assessment boundary

Study, test and modify this exemplar while learning. For the assessed Hot Beans Web project, interpret the client brief independently and produce your own designs, content, technical decisions, CSS, responsive behaviour, testing and optimisation evidence.
