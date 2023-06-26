# Page Meta

# Page Meta in ADTI Wiki

Each page in the ADTI wiki can contain optional meta data. This can be helpful when the page requires a different Title than the filename or when you need to override the last modified date of the page. The meta data should be written in YAML format. Here are some commonly used variables:

- **Title**: This variable will override the title based on the file name.
- **Description**: This variable provides a description for the search engine, Lunr.
- **Sort**: This variable will affect the sorting of the pages inside the category.
- **ShowOnHome**: Optional. If set to false, the page won't be listed on the home page. Default behavior can be changed through the `config.show_on_home_default` option.
- **Modified**: This variable will override the modified date based on the file name. The date should be in full ISO 8601 format, including Time and Timezone offset.

Before version 0.11.0, these meta blocks could only be HTML comments (`/* */`). Starting with version 0.11.0, the meta blocks should be YAML blocks.