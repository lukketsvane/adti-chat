import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
