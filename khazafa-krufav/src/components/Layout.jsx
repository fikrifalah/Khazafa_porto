import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Video, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to detect current route

  const links = [
    { name: 'Work', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    // { name: 'Journal', path: '/blog' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-200 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80">
            <Video className="text-orange-600" />
            Khazafa<span className="text-orange-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-orange-500 ${
                  isActive(link.path) ? 'text-orange-500' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="text-zinc-400 md:hidden hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-20 w-full border-b border-zinc-900 bg-zinc-950 px-6 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold ${
                    isActive(link.path) ? 'text-orange-500' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with Transition Wrapper */}
      <main className="mx-auto max-w-7xl px-0 md:px-6">
        {/* The 'key' forces a re-render animation on route change */}
        <div key={location.pathname} className="animate-page-enter">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-900 bg-black py-12 text-center md:text-left">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div>
            <h4 className="text-lg font-bold text-white">Khazafa</h4>
            <p className="text-sm text-zinc-500">Director & Cinematographer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/said-muhamad-khazafa-921462251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            
            <button>
            <Linkedin className="h-5 w-5 cursor-pointer text-zinc-500 transition-colors hover:text-orange-500" />
            </button>
            
            </a>
            
           
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;