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
./pages/docs/[...slug].tsx:

jsx
Copy code
import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { getAllDocs, getDocBySlug, Doc } from '@/lib/docs';
import { DocPage } from '@/components/DocPage';
import Layout from '@/components/layout';

type DocsProps = {
  selectedDoc: Doc;
  docs: Doc[];
};

export default function Docs({ selectedDoc, docs }: DocsProps) {
  return (
    <Layout>
      <DocPage docs={docs} selectedDoc={selectedDoc} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<DocsProps> = async ({ params }: GetServerSidePropsContext) => {
  const slug = params?.slug as string[];
  const selectedDoc = await getDocBySlug(slug);
  const docs = await getAllDocs();
  return { props: { selectedDoc, docs } };
};