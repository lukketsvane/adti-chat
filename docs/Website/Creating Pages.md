# Creating Pages

# Creating Pages for ABB Digital Twin Initiative Wiki

Creating and updating pages for the ADTI Wiki is as easy as crafting a Markdown file (.md) with your chosen text editor. There are several key aspects to your files that need attention when you're crafting pages.

## File Location

All of your Markdown files should be placed in the content folder, which is found at the root of the application (you can configure this in the config.js file). You can create as many sub-folders as needed within the content folder, but only .md files within this folder (or its sub-folders) will be acknowledged.

You may use sub-folders as a method to create "categories" of pages. For instance, if you establish a sub-folder named 'implementation-guidelines', all the pages inside this folder will appear under the 'Implementation Guidelines' category on ADTI. Though you can create as many levels of sub-folders as you desire, they will always appear as a top-level category.

These sub-folders will also contribute to the page URL or "slug". Refer to file naming below for further information.

## File Name

The name of the file dictates what URL or "slug" is used to navigate to that page. For instance, if you create a file named 'getting-started-with-adti.md', you could visit that page by navigating to wiki.abb.com/getting-started-with-adti. Here is a table of example folder and file names, and the URL's they would generate in ADTI.

| File Location | URL |
| --- | --- |
| content/hello.md | /hello |
| content/getting-started-with-adti.md | /getting-started-with-adti |
| content/implementation-guidelines/getting-started-with-adti.md | /implementation-guidelines/getting-started-with-adti |
| content/some/sub/folder/page.md | /some/sub/folder/page |

If a file cannot be found, the error.html template will be displayed.

## File Markup

Pages are designed using Markdown. If you're new to Markdown, please refer to the [syntax guide](https://github.com/lukketsvane/adti-wiki/blob/main/content/pages/usage/%base_url%/markdown-guide) for more details. Pages can also contain standard HTML.

You can place a block comment at the start of a page to specify certain attributes of the page. For instance, you can specify the page title or a description to be used by search engines. Specifying page meta is optional.

```
---
Title: Getting Started with ADTI
Description: A beginner's guide to ABB Digital Twin Initiative
---

```

If no meta title is specified, the filename will be used to generate a page title.

You can also use certain variables in your Markdown pages, which will be replaced with the values you set in your config.

- `%base_url%`: The base URL of your site
- `%image_url%`: The base URL of your images folder (public/images)

*Last updated on 19th Jun 2023.*

## Deleting pages

Deleting pages in ADTI is as simple as deleting the Markdown file (`.md`) from the content folder.