// components/DocPage.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();

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
          <a className={isSelected ? 'font-bold text-gray-800' : ''}>{displayTitle}</a>
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

  useEffect(() => {
    setIsSidebarOpen(false); // Close the sidebar when the selectedDoc changes
  }, [selectedDoc]);

  useEffect(() => {
    setIsSidebarOpen(false); // Close the sidebar when the route changes
  }, [router.asPath]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav
        className={`w-64 bg-white border-r overflow-auto px-4 md:relative md:w-auto md:overflow-visible md:border-0 ${
          isSidebarOpen ? 'fixed inset-0 z-50' : 'hidden md:block'
        }`}
      >
        <div className="md:hidden flex items-center justify-end py-2">
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>
        <div className={`${isSidebarOpen ? '' : 'hidden'}`}>
          {sortedFolders.map((folder) => {
            const folderTitle = folder.split('/').pop();
            const displayFolderTitle = removeNumberPrefix(folderTitle);
            return (
              <div key={folder} className="user-select-none">
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
                    {docsByFolder[folder].map((doc) => renderDocLink(doc, folder))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto">
        <div className="prose max-w-none overflow-scroll">
          <ReactMarkdown components={markdownComponents} remarkPlugins={[gfm]}>
            {selectedDoc.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
