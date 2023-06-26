# Sorting

# Sorting Pages and Categories in ADTI Wiki

By default, pages and categories on the ADTI Wiki are sorted alphabetically. However, you can manually sort pages and categories following the instructions below.

## Sorting Pages

To manually sort pages, add a 'Sort' item to the page meta, as demonstrated:

```
---
Title: Page Sorting
Sort: 4
---

```

The value of 'Sort' should be an index integer. This page will now appear after any other pages with a sort index of 3 or less, and before any pages with a sort index of 5 or more. If a page doesn't have a sort index set, it will default to 0.

You can change the meta value used for sorting by altering the `page_sort_meta` option in the `config.js` file.

## Sorting Categories

To manually sort categories, you can add a file named 'sort' (with no extension) in the category folder. The content of the file should simply be an index integer. Sorting will function in the same manner as it does for pages. If no 'sort' file exists, the category will have a sort index of 0.

Alternatively, you can add a file named 'meta' (with no extension) in the category folder. This file can be specified in YAML format and can also override the category title. For example:

```
Title: Category Sorting
Sort: 4

```

Note that top-level files (i.e., files without a category) will be in an "index" category with a sort value of 0, so it is logical to order your category indexes starting at 1.

You can disable manual category sorting by setting the `category_sort` option in the `config.js` file to false. This effectively enforces the default alphabetical sorting.