// ./components/DocPage.tsx
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

  return (
    <div className="flex">
      <nav className="sticky top-0 h-screen w-64 overflow-auto border-r border-gray-200 p-4">
        <ul className="space-y-2">
          {docs.map((doc, idx) => (
            <li key={idx} className={doc === selectedDoc ? "font-semibold text-gray-800" : "text-gray-500"}>
              <Link href={doc.filePath} passHref>
                <span className={doc === selectedDoc ? 'font-bold text-gray-800' : ''}>
                  {doc.data.title || doc.filePath.split('/').pop()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-10 overflow-y-auto">
      <ReactMarkdown components={components} remarkPlugins={[gfm]}>
  {selectedDoc.content}
</ReactMarkdown>
      </main>
    </div>
  );
}
