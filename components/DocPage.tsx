import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Doc } from '@/lib/docs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import markdownComponents from './markdownComponents';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

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
        } user-select-none text-lg md:text-base`}
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
    return title.replace(/^\d+(\.\d+)?(-)? /, '').replace(/-/g, ' ');
  };

  const sortedFolders = Object.keys(docsByFolder).sort();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsSidebarOpen(false); 
  }, [selectedDoc]);

  useEffect(() => {
    setIsSidebarOpen(false); 
  }, [router.asPath]);

  return (
    <div className="flex h-screen">
      <nav
        className={`w-0 md:w-64 bg-white border-r overflow-auto px-4 ${
          isSidebarOpen ? 'w-full' : ''
        } md:relative md:w-auto md:overflow-visible md:border-0 transition-width duration-300 ease-in-out`}
      >
        <div className="relative z-50 pr-3 md:hidden flex items-center justify-end ml-6 py-2">
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiArrowRight size={24} /> : <FiArrowLeft size={24} />}
          </button>
        </div>
        <div className={`md:block ${isSidebarOpen ? '' : 'hidden'}`}>
          {sortedFolders.map((folder, index) => {
            const folderTitle = folder.split('/').pop();
            const displayFolderTitle = removeNumberPrefix(folderTitle);
            const isTopLevelFolder = folder.split('/').length === 1;

            return (
              <div key={folder} className="user-select-none">
                <div
                  className={`${
                    selectedDoc.filePath.includes(folder)
                      ? 'font-semibold text-gray-800 cursor-pointer'
                      : 'text-gray-500 cursor-pointer'
                  } text-lg md:text-base`}
                  onClick={() => handleFolderClick(folder)}
                >
                  {isTopLevelFolder ? `${index + 1}. ${displayFolderTitle}` : displayFolderTitle}
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
      <main className="flex-1 px-4 overflow-auto">
        <div className="prose max-w-none overflow-scroll">
          <ReactMarkdown components={markdownComponents} remarkPlugins={[gfm]}>
            {selectedDoc.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}