# CSS Topics to cover:

## Box Model:

1. M
2. B
3. P
4. C

## Outline: 
    z-index

## Display:

1. Inline elements: span, a, blockquote(?) 
    1. in line with the previous element), width height doesn’t affect 
    2. and snake like model. 
    3. CSS attributes which affect plain text are also applicable to inline elements
2. Block elements: div, p, hr, h1-h6, and most of it! 
    1. One full rendering row (Doesn’t allow element before and after)
    2. Takes width and height
    3. Needs any 4 of the 6 direction attributes (top, bottom, left, right, width, height)
3. Inline-block, img
    1. What if this is a block element if it can fit in the previous line
    2. First render it as block model and later check inline with the previous element
    3. CSS attributes which affects (both) block and inline elements affects inline-block elements (left, right, width, height, top, bottom)
4. None: as if the element is not present in the DOM
    1. Compare with visibility:hidden (reserves space against of display:None)
5. Flex: CSS-tricks ([link](https://css-tricks.com/snippets/css/a-guide-to-flexbox/ "A Guide to Flexbox"))


## Position:

### Fixed, Relative, absolute = something +- delta
1. static is default whereas rest like ‘relative’, ‘absolute’ and ‘fixed’ are positioned elements
    1. Default rendering scheme of the browser
    2. Default means when parsing DOM, if element a’s opening tag comes before element b’s opening tag ==> a will be rendered left of b or top b or both
2. fixed: fixes the position to the window
    1. Fixed = window +- delta
    2. Locked w.r.t to window
    3. delta means, delta left and delta top (or delta right and delta bottom vice versa)
3. relative: relative to it’s own element
4. absolute: positioned relative to the nearest positioned ancestor ( fixed | absolute | relative)
5. By defining both left, right and/or  top, bottom properties (direction properties), you can stretch the elements 

## Floats and Clear:

## Pseudo classes:

    > :before

    > :after

## Units:
        Px, Pt, %, Ems, Rems, vw, vh

Selectors, Nested Selectors, hierarchical selectors, sibling selectors, specificity (id, class, attribute, element) (1000, 100, 10, 1)

`
!IMPORTANT

Order of Precedence: external CSS < internal CSS(<style>) < inline CSS
`

@include/import (one CSS in another file) Scss/Less 

## Adaptive vs responsive: 

### Responsive
1. Use % instead of pt,px (%ge is recursively computed) — 2005
2. Use em instead of %ge
3. Use rem instead of em

## @Media queries (Hi-fi behaviour, min-width, max-width,) device:screen, media, print

1. device:print for printing purposes min-width, max-width would be A4, A3, vice versa
2. device:media for printing media or media can be viewed in certain way 

CSS Variables (not supported by all browsers) 

[caniuse.com](http://www.caniuse.com)
