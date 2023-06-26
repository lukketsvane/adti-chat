// pages/search.tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Search() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchQuery = router.query.q;

    if (!searchQuery) {
      setSearchResults([]);
      return;
    }

    // Implement your search logic here.
    // Below is a mock search function for demonstration.
    const performSearch = async () => {
      const results = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await results.json();
      setSearchResults(data.results);
    };

    performSearch();
  }, [router.query.q]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((result, index) => (
        <div key={index}>
          <Link href={result.link}>
            <a>{result.title}</a>
          </Link>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}
