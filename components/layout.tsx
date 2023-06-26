// ./components/layout.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Chat from '@/components/Chat';
import { useDarkMode } from '@/pages/darkModeContext'; // Modify path as necessary

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showChat, setShowChat] = useState<boolean>(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark mx-auto flex flex-col space-y-4 p-6" : "mx-auto flex flex-col space-y-4 "}>
      <header className="sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4 px-6">
          <nav className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <div className="cursor-pointer">
                  <Image src="/logo.png" alt="logo" width={50} height={50} />
                </div>
              </Link>
              <Link href="/docs">
                <span className="hover:text-slate-600 cursor-pointer">Docs</span>
              </Link>
              <Link href="/page2">
                <span className="hover:text-slate-600 cursor-pointer">GitHub</span>
              </Link>
              <Link href="/page3">
                <span className="hover:text-slate-600 cursor-pointer">Page 3</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="border-2 border-slate-300 hover:border-slate-600 rounded-full px-2"
                onClick={toggleDarkMode}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <button
                className="border-2 border-slate-300 hover:border-slate-600 rounded-full px-2"
                onClick={() => setShowChat(!showChat)}
              >
                {showChat ? 'Hide Chat' : 'Chat'}
              </button>
              {showChat && <Chat onClose={() => setShowChat(false)} />}
              <input type="search" placeholder="Search..." className="border-2 border-slate-300 rounded px-2" />
            </div>
          </nav>
        </div>
      </header>
      <div className="p-6">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
