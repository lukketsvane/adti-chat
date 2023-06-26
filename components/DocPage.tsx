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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const sortedFolders = Object.keys(docsByFolder).sort();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto px-4 transition-transform duration-300 ${
          isMenuOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Hamburger Button */}
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items */}
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

      {/* Main Content */}
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
}
