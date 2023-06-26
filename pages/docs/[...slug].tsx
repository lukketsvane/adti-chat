// ./pages/docs/[...slug].tsx
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

  const breadcrumbs = slug.map((slugPart, index) => {
    const path = slug.slice(0, index + 1).join('/');
    const doc = docs.find((doc) => doc.filePath.includes(path));
    return { title: doc?.data.title ?? slugPart, path: doc?.filePath ?? '#' };
  });

  return { props: { selectedDoc, docs, breadcrumbs } };
};
