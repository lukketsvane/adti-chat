import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Chat from '@/components/Chat';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4 px-6">
          <nav className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="/" passHref>
                <div className="cursor-pointer">
                  <Image src="/logo.png" alt="logo" width={50} height={50} />
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/docs" passHref>
                  <span className="hover:text-slate-600 cursor-pointer">Docs</span>
                </Link>
                <Link href="/page2" passHref>
                  <span className="hover:text-slate-600 cursor-pointer">GitHub</span>
                </Link>
                <Link href="/page3" passHref>
                  <span className="hover:text-slate-600 cursor-pointer">Page 3</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input type="search" placeholder="Search..." className="border-2 border-slate-300 rounded px-2" />
              <div className="md:hidden">
                <button
                  className="text-gray-500 hover:text-gray-800 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <FiMenu size={24} />
                </button>
              </div>
              <button
                className="border-2 border-slate-300 hover:border-slate-600 rounded-full px-2 hidden md:block"
                onClick={toggleChat}
              >
                {showChat ? 'Hide Chat' : 'Chat'}
              </button>
            </div>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-16 left-0 right-0 z-50 shadow">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <Link href="/docs" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === '/docs' ? 'font-semibold text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Docs
                </span>
              </Link>
              <Link href="/page2" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === '/page2' ? 'font-semibold text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={closeMobileMenu}
                >
                  GitHub
                </span>
              </Link>
              <Link href="/page3" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === '/page3' ? 'font-semibold text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Page 3
                </span>
              </Link>
            </nav>
          </div>
        )}
      </header>
      {showChat && <Chat onClose={toggleChat} />}

      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
