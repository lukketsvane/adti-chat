# Template

ADTI, or the ABB Digital-Twin Initiative, is a dynamic wiki for centralizing information about ABB's Digital Twin initiatives. Powered by modern technology, this online database is used as a single source of truth for capturing, organizing, and sharing internal knowledge about important processes, values, and policies related to our digital twin technology.

The ADTI structure is as follows:

- `ADTI`: The root of our knowledge base. It contains an overview of the entire project.
- `About ADTI`: Provides a brief summary of the purpose and objective of ADTI.
- `Executive Summary`: An in-depth explanation of what ADTI aims to achieve.
- `File Structure / Information Handling`: Explains the tree-like hierarchical system used to organize data and documents in ADTI.
- `Explanation of Returned Taxonomy and its Value`: Describes the hierarchical structure of ADTI's returned taxonomy and how it adds value to the users.
- `Features`: A detailed list of all the features available in ADTI.

To facilitate better usability, ADTI provides certain configurable features which can be accessed and modified by the users.

### Enable Hierarchical Navigation:

In ADTI settings, set `enable_hierarchy` to `true`. This enables a tree-like structure for better organization and easier navigation through the content.

### Enable Searchability:

In ADTI settings, set `enable_search` to `true`. This feature enhances the discoverability of information by allowing users to input queries and find relevant data.

## ADTI Files

All static files in ADTI (images, CSS, JavaScript files, etc.) are served from the `public` folder.

This is to ensure that no unauthorized access is granted to any other files in the install.

Only files in the `public` folder are available to visitors that are not logged in.

To ensure that your customizations remain intact after updates, always create your own files instead of modifying the existing ADTI files.

## Template Variables

Below are a list of template variables available to use in their respective templates:

**home.html**

- `config`: Holds an array of values from `config.js`
- `pages`: Structured list of categories and pages (used for navigation)
- `body_class`: Class for the `<body>` tag

**page.html**

- `config`: Holds an array of values from `config.js`
- `pages`: Structured list of categories and pages (used for navigation)
- `body_class`: Class for the `<body>` tag
- `meta`: Holds an array of values taken from the page meta comment block (e.g. `meta.title`)
- `content`: The HTML content of the page
- `last_modified`: The formatted date of the time the file was last modified

**search.html**

- `config`: Holds an array of values from `config.js`
- `pages`: Structured list of categories and pages (used for navigation)
- `body_class`: Class for the `<body>` tag
- `search`: The current search query
- `searchResults`: An array search results