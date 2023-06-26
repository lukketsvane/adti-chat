import { Prism as SyntaxHighlighter } from 'prism-react-renderer';

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  h1: ({ node, ...props }) => <h1 style={{ fontSize: "2em", borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em' }} {...props} />,
  h2: ({ node, ...props }) => <h2 style={{ fontSize: "1.5em", borderBottom: '1px solid #eaecef', paddingBottom: '0.3em', paddingTop: '0.8em'  }} {...props} />,
  h3: ({ node, ...props }) => <h3 style={{ fontSize: "1.2em", paddingTop: '0.8em', paddingBottom: '0.3em'  }} {...props} />,
  ul: ({ node, ...props }) => <ul style={{ listStyleType: "disc", paddingLeft: '2em', paddingTop: '0.3em', paddingBottom: '0.3em'  }} {...props} />,
  ol: ({ node, ...props }) => <ol style={{ listStyleType: "decimal", paddingLeft: '2em' , paddingTop: '0.3em', paddingBottom: '0.3em'   }} {...props} />,
  li: ({ node, ...props }) => <li {...props} />,
  em: ({ node, ...props }) => <em {...props} />,
  strong: ({ node, ...props }) => <strong {...props} />,
  del: ({ node, ...props }) => <del {...props} />,
  a: ({ node, ...props }) => <a style={{ color: "grey", textDecoration: "underline" }} {...props} />,
  table: ({ node, ...props }) => <table style={{ borderCollapse: "collapse", width: "100%" }} {...props} />,
  thead: ({ node, ...props }) => <thead {...props} />,
  tbody: ({ node, ...props }) => <tbody {...props} />,
  tr: ({ node, ...props }) => <tr {...props} />,
  th: ({ node, ...props }) => <th style={{ border: "1px solid #dfe2e5", padding: "6px 13px" }} {...props} />,
  td: ({ node, ...props }) => <td style={{ border: "1px solid #dfe2e5", padding: "6px 13px" }} {...props} />,
  blockquote: ({ children }) => <blockquote style={{ color: '#6a737d', borderLeft: '0.25em solid #dfe2e5', padding: '0 1em' }}>{children}</blockquote>,
  hr: () => <hr />,
  img: ({ alt, src, title }) => <img alt={alt} src={src} title={title} style={{ maxWidth: '100%' }} />,
}

export default components;
