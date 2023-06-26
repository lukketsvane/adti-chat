import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Chat from '@/components/Chat';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showChat, setShowChat] = useState<boolean>(false);

  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="flex items-center ml-4 pl-6 space-x-4">
            <Link href="/">
              <div className="cursor-pointer">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
              </div>
            </Link>
            <Link href="/page1">
              <span className="hover:text-slate-600 cursor-pointer">Page 1</span>
            </Link>
            <Link href="/page2">
              <span className="hover:text-slate-600 cursor-pointer">Page 2</span>
            </Link>
            <Link href="/page3">
              <span className="hover:text-slate-600 cursor-pointer">Page 3</span>
            </Link>
            <button
              className="border-2 border-slate-300 hover:border-slate-600 rounded-full px-2"
              onClick={() => setShowChat(!showChat)}
            >
              {showChat ? 'chat' : 'Chat'}
            </button>
            {showChat && <Chat onClose={() => setShowChat(false)} />}
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
