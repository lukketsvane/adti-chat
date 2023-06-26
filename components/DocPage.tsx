import { Doc } from '@/lib/docs';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type DocPageProps = {
  docs: Doc[];
  selectedDoc: Doc;
};

export function DocPage({ docs, selectedDoc }: DocPageProps) {
  const renderers = {
    code: ({ language, value }: any) => {
      return (
        <SyntaxHighlighter style={solarizedlight} language={language} children={value} />
      );
    },
  };

  return (
    <div className="flex">
      <nav className="sticky top-0 h-screen w-64 overflow-auto">
        <ul>
          {docs.map((doc, idx) => (
            <li key={idx}>
              <Link href={doc.filePath}>
                <span>{doc.title || doc.filePath.split('/').pop()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 p-10">
        <ReactMarkdown renderers={renderers} children={selectedDoc.content} />
      </main>
    </div>
  );
}
