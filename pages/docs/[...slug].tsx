import { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs();
  return {
    paths: docs.map((doc) => doc.filePath),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DocsProps> = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug as string[];
  const selectedDoc = await getDocBySlug(slug);
  const docs = await getAllDocs();
  return { props: { selectedDoc, docs } };
};
