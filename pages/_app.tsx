// _app.tsx
import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn") && 
        !router.pathname.startsWith('/login') &&
        window.location.pathname !== '/login') {
          router.push("/login");
    }
  }, [router]);

  return (
    <>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
