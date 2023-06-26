import Layout from '@/components/layout';
import { DocPage } from '@/components/DocPage';
import { getAllDocs, Doc } from '@/lib/docs';
import { GetStaticProps } from 'next';

type DocsIndexProps = {
  docs: Doc[];
};

export default function DocsIndex({ docs }: DocsIndexProps) {
  return (
    <Layout>
      <DocPage docs={docs} selectedDoc={docs[0]} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<DocsIndexProps> = async () => {
  const docs = getAllDocs();
  return { props: { docs } };
};
