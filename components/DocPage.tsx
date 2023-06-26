const renderDocLink = (doc: Doc, folder: string) => {
  const isSelected = doc.filePath === selectedDoc.filePath;
  const displayTitle = removeNumberPrefix(doc.data.title || doc.filePath.split('/').pop());

  return (
    <li
      key={doc.filePath}
      className={`${
        isSelected ? 'font-semibold text-gray-800' : 'text-gray-500'
      } user-select-none`}
    >
      <Link href={doc.filePath.replace(/ /g, '-')} passHref>
        <span className={isSelected ? 'font-bold text-gray-800' : ''}>
          {displayTitle}
        </span>
      </Link>
    </li>
  );
};

const sortedFolders = Object.keys(docsByFolder).sort();

return (
  <div className="flex h-screen overflow-hidden">
    <nav className="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto px-4">
      {sortedFolders.map((folder) => {
        const folderTitle = folder.split('/').pop();
        const displayFolderTitle = removeNumberPrefix(folderTitle);
        return (
          <div
            key={folder}
            className="transition-all duration-500 user-select-none"
          >
            <div
              className={`${
                selectedDoc.filePath.includes(folder)
                  ? 'font-semibold text-gray-800 cursor-pointer'
                  : 'text-gray-500 cursor-pointer'
              }`}
              onClick={() => handleFolderClick(folder)}
            >
              {displayFolderTitle}
            </div>
            {expandedFolders.includes(folder) && (
              <ul className="space-y-2 pl-2">
                {docsByFolder[folder].map((doc) =>
                  renderDocLink(doc, folder)
                )}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
    <main className="flex-1 p-10 overflow-auto">
      <div className="prose dark:prose-dark max-w-none overflow-scroll">
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[gfm]}
        >
          {selectedDoc.content}
        </ReactMarkdown>
      </div>
    </main>
  </div>
);
