import { useState } from 'react';
import { Doc } from '@/lib/docs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import markdownComponents from './markdownComponents';

type DocPageProps = {
  docs: Doc[];
  selectedDoc: Doc;
};

export function DocPage({ docs, selectedDoc }: DocPageProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);

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
        <Link href={doc.filePath} passHref>
          <span className={isSelected ? 'font-bold text-gray-800' : ''}>
            {displayTitle}
          </span>
        </Link>
      </li>
    );
  };

  const docsByFolder: Record<string, Doc[]> = docs.reduce((acc, doc) => {
    const parts = doc.filePath.split('/');
    const folder = parts.slice(0, -1).join('/');
    acc[folder] = [...(acc[folder] || []), doc];
    return acc;
  }, {});

  const handleFolderClick = (folder: string) => {
    const newExpandedFolders = [...expandedFolders];
    const index = newExpandedFolders.indexOf(folder);
    if (index === -1) {
      newExpandedFolders.push(folder);
    } else {
      newExpandedFolders.splice(index, 1);
    }
    setExpandedFolders(newExpandedFolders);
  };

  const removeNumberPrefix = (title: string): string => {
    return title.replace(/^\d+(\.\d+)? /, '');
  };

  const sortFoldersAndDocs = (folders: string[], docs: Doc[]): (string | Doc)[] => {
    const sortedFolders = folders.sort((a, b) => {
      const aTitle = removeNumberPrefix(a.split('/').pop() || '');
      const bTitle = removeNumberPrefix(b.split('/').pop() || '');
      return aTitle.localeCompare(bTitle);
    });
    const sortedDocs = docs.sort((a, b) => {
      const aTitle = removeNumberPrefix(a.data.title || a.filePath.split('/').pop() || '');
      const bTitle = removeNumberPrefix(b.data.title || b.filePath.split('/').pop() || '');
      return aTitle.localeCompare(bTitle);
    });
    return [...sortedFolders, ...sortedDocs];
  };

  const sortedFoldersAndDocs = sortFoldersAndDocs(Object.keys(docsByFolder), docs);

  return (
    <div className="flex h-screen overflow-hidden">
      <nav className="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto px-4">
        <ul className="space-y-2">
          {sortedFoldersAndDocs.map((item) => {
            if (typeof item === 'string') {
              const folder = item;
              const folderTitle = folder.split('/').pop();
              const displayFolderTitle = removeNumberPrefix(folderTitle || '');
              return (
                <div
                  key={folder}
                  className="transition-all duration-500 user-select-none"
                >
                  <div
                    className={`${
                      expandedFolders.includes(folder)
                        ? 'font-semibold text-gray-800 cursor-pointer'
                        : 'text-gray-500 cursor-pointer'
                    }`}
                    onClick={() => handleFolderClick(folder)}
                  >
                    {displayFolderTitle}
                  </div>
                  {expandedFolders.includes(folder) && (
                    <ul className="space-y-2 pl-2">
                      {docsByFolder[folder].map((doc) => renderDocLink(doc, folder))}
                    </ul>
                  )}
                </div>
              );
            } else {
              const doc = item;
              const isSelected = doc.filePath === selectedDoc.filePath;
              const displayTitle = removeNumberPrefix(doc.data.title || doc.filePath.split('/').pop() || '');
              return (
                <li
                  key={doc.filePath}
                  className={`${
                    isSelected ? 'font-semibold text-gray-800' : 'text-gray-500'
                  } user-select-none pl-4`}
                >
                  <Link href={doc.filePath} passHref>
                    <span className={isSelected ? 'font-bold text-gray-800' : ''}>
                      {displayTitle}
                    </span>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>
      <main className="flex-1 p-10 overflow-auto">
        <div className="prose dark:prose-dark max-w-none overflow-scroll">
          <ReactMarkdown components={markdownComponents} remarkPlugins={[gfm]}>
            {selectedDoc.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
