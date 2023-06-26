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

type FolderNode = {
  folder: string;
  nestedFolders: FolderNode[];
  docs: Doc[];
};

export function DocPage({ docs, selectedDoc }: DocPageProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([]);

  const renderDocLink = (doc: Doc) => {
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
  };

  const generateFolderTree = (folders: string[], allDocs: Doc[]): FolderNode => {
    const root: FolderNode = {
      folder: '',
      nestedFolders: [],
      docs: [],
    };

    const addToFolder = (folderNode: FolderNode, filePathParts: string[], doc: Doc) => {
      const [folder, ...remainingParts] = filePathParts;

      if (folder) {
        let nestedFolder = folderNode.nestedFolders.find((f) => f.folder === folder);
        if (!nestedFolder) {
          nestedFolder = {
            folder,
            nestedFolders: [],
            docs: [],
          };
          folderNode.nestedFolders.push(nestedFolder);
        }
        addToFolder(nestedFolder, remainingParts, doc);
      } else {
        folderNode.docs.push(doc);
      }
    };

    for (const doc of allDocs) {
      const filePathParts = doc.filePath.split('/');
      addToFolder(root, filePathParts, doc);
    }

    return root;
  };

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
    return title.replace(/^\d+\.\d+ |^\d+ /, '');
  };

  const rootFolder = generateFolderTree(Object.keys(docs), docs);

  const renderFolderNode = (folderNode: FolderNode) => {
    const { folder, nestedFolders, docs } = folderNode;
    const displayFolderTitle = removeNumberPrefix(folder.split('/').pop() || '');

    return (
      <div key={folder}>
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
            {nestedFolders.map((nestedFolder) => renderFolderNode(nestedFolder))}
            {docs.map((doc) => renderDocLink(doc))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <nav className="w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto px-4">
        {renderFolderNode(rootFolder)}
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
