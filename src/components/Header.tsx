'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary/5 p-2 rounded-xl border border-primary/10 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300 shadow-sm">
              <img src="/previews/Logo.png" alt="CertiFind Logo" className="w-10 h-auto" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800 group-hover:text-primary transition-colors hidden sm:block">
              CertiFind
            </span>
          </Link>

          <nav className="flex items-center">
            {!isHome && (
              <div className="flex items-center text-sm font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shadow-inner px-4 py-2 rounded-full">
                <Link href="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Inicio</span>
                </Link>
                <ChevronRight className="h-4 w-4 mx-1.5 text-slate-300" />
                <span className="font-semibold text-primary">Detalle</span>
              </div>
            )}
          </nav>

        </div>
      </div>
    </header>
  );
}
