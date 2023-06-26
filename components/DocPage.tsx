import { useState } from 'react';
import { Doc } from '@/lib/docs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import markdownComponents from './markdownComponents';
import { FiMenu } from 'react-icons/fi';

type DocPageProps = {
  docs: Doc[];
  selectedDoc: Doc;
};

export function DocPage({ docs, selectedDoc }: DocPageProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <nav
        className={`w-0 md:w-64 bg-white border-r overflow-auto px-4 ${
          isSidebarOpen ? 'w-64' : ''
        } md:relative md:w-auto md:overflow-visible md:border-0 transition-width duration-300 ease-in-out`}
      >
        <div className="md:hidden flex items-center justify-end py-2">
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>
        <div className="md:block hidden">
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
        </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <div className="prose dark:prose-dark max-w-none overflow-scroll">
          <ReactMarkdown components={markdownComponents} remarkPlugins={[gfm]}>
            {selectedDoc.content}
          </ReactMarkdown>
        </div>
      </main>
      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
