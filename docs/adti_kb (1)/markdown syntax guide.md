Markdown is a way to style text on the web, aiming to be easy-to-read and easy-to-write. This guide aims to be a brief, but comprehensive, overview of Markdown syntax. It is particularly important for contributing to the ABB Digital Twin Initiative (ADTI) Wiki.

## Headers

You can create headers using hash characters. The number of hash characters indicates the level of the header, for example:

```
#This is an H1##This is an H2######This is an H6
```

## Paragraphs and Line Breaks

You can create paragraphs by leaving one or more blank lines. To add a line break, end a line with two or more spaces, then type return.

```
This is a paragraph.

This is another paragraph.
This line will break and appear below.
```

## Emphasis

You can make text bold or italic using asterisks or underscores. One for italic, two for bold.

```
*This text will be italic*
**This text will be bold**
```

## Blockquotes

You can create a blockquote using the '>' character before your text.

```
> This is a blockquote.
```

## Lists

Unordered lists can be created using asterisks, pluses, or hyphens interchangeably:

```
* Item 1
* Item 2
```

Ordered lists can be created using numbers:

```
1. Item 1
2. Item 2
```

## Code

Inline `code` can be denoted by wrapping the text in backticks.

Multiline code can be created using triple backticks:

```

```

This is a code block

```

```

## Links and Images

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ). You can optionally add a title for the link in the parentheses:

```
[Link to Google](https://www.google.com)
```

Images are similar to links but they include an exclamation mark at the start:

```
![Alt text for image](url_to_image)
```

Alright, let's break this down into a shorter summary.

- **Lists**: Markdown supports ordered (numbered) and unordered (bulleted) lists. Subsequent paragraphs within list items should be indented by either 4 spaces or one tab.
- **Blockquotes within lists**: Blockquotes can be nested within list items. The blockquote's `>` delimiters need to be indented.
- **Code blocks within lists**: A code block within a list item needs to be indented twice — 8 spaces or two tabs.
- **Number-period-space sequence**: If you start a line with a number-period-space sequence, Markdown might interpret this as an ordered list. To avoid this, you can backslash-escape the period.
- **Code Blocks**: To create a code block, indent every line of the block by at least 4 spaces or 1 tab. Within a code block, ampersands (`&`) and angle brackets (`<` and `>`) are automatically converted into HTML entities.
- **Horizontal rules**: You can produce a horizontal rule (`<hr />`) by placing three or more hyphens, asterisks, or underscores on a line by themselves. Spaces between the characters are allowed.
- **Links**: Markdown supports two styles of links: inline and reference. Inline links are wrapped in parentheses and immediately follow the link text in square brackets. Reference-style links use a second set of square brackets, in which you place a label to identify the link. The link is then defined elsewhere in the document with its URL and an optional title.
- **Emphasis**: Asterisks (``) and underscores (`_`) are used for emphasis. Text wrapped with one of these will be wrapped with an HTML `<em>` tag; double characters will be wrapped with an HTML `<strong>` tag.
- **Code within text**: To indicate a span of code within a normal paragraph, wrap it with backtick quotes (`).
- **Images**: Inline image syntax is similar to link syntax but starts with an exclamation mark. Reference-style image syntax also resembles link syntax but uses an image reference instead of a URL.
- **Automatic Links**: URLs and email addresses can be quickly linked by surrounding them with angle brackets. Email addresses are encoded to help protect against spambots.