// components/SearchPage.tsx

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout';

const SearchPage = ({ initialResults }) => {
  const [results, setResults] = useState(initialResults);
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    // Ideally you would fetch new results here whenever `q` changes
  }, [q]);

  return (
    <Layout>
      <div className="flex flex-col space-y-4 p-4">
        {results.map(result => (
          <Link href={result.link} key={result.title}>
            <a>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch initial search results server-side
  // This is just a placeholder, replace it with your own search logic
  const q = context.query.q;
  const initialResults = [];
  
  return {
    props: {
      initialResults
    },
  };
};

export default SearchPage;
