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
