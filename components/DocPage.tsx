import { useState } from 'react';
import { Doc } from '@/lib/docs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type DocPageProps = {
  docs: Doc[];
  selectedDoc: Doc;
};

export function DocPage({ docs, selectedDoc }: DocPageProps) {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  const renderDocLink = (doc: Doc, folder: string) => {
    const isSelected = doc.filePath === selectedDoc.filePath;
    const file = doc.filePath.split('/').pop();
    return (
      <li key={doc.filePath} className={isSelected ? "font-semibold text-gray-800 user-select-none" : "text-gray-500 user-select-none"}>
        <Link href={doc.filePath} passHref>
          <span className={isSelected ? 'font-bold text-gray-800' : ''}>
            {doc.data.title || file}
          </span>
        </Link>
      </li>
    );
  }

  const docsByFolder = docs.reduce((acc, doc) => {
    const parts = doc.filePath.split('/');
    const file = parts.pop();
    const folder = parts.join('/');
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
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <nav className="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto px-4">
        {Object.keys(docsByFolder).map(folder => (
          <div key={folder} className="transition-all duration-500 user-select-none">
            <div
              className={selectedDoc.filePath.includes(folder) ? "font-semibold text-gray-800 cursor-pointer" : "text-gray-500 cursor-pointer"}
              onClick={() => handleFolderClick(folder)}
            >
              {folder.split('/').pop()}
            </div>
            {expandedFolders.includes(folder) && (
              <ul className="space-y-2 pl-2">
                {docsByFolder[folder].map(doc => renderDocLink(doc, folder))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      <main className="flex-1 p-10 overflow-auto">
        <div className="prose dark:prose-dark max-w-none overflow-scroll">
          <ReactMarkdown components={components} remarkPlugins={[gfm]}>
            {selectedDoc.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
