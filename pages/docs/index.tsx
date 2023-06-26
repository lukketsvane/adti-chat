// ./pages/docs/index.tsx
import Layout from '@/components/layout';
import { DocPage } from '@/components/DocPage';
import { getAllDocs, Doc } from '@/lib/docs';
import { GetServerSideProps } from 'next';

type DocsIndexProps = {
  docs: Doc[];
};

export default function DocsIndex({ docs }: DocsIndexProps) {
  return (
    <Layout>
      <DocPage docs={docs} selectedDoc={docs[0]} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<DocsIndexProps> = async () => {
  const docs = getAllDocs();
  return { props: { docs } };
};
