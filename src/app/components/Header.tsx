'use client'
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { useState } from 'react';
import { useNavLinks } from '../hooks/useNavLinks';
import Image from 'next/image';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navLinks = useNavLinks();

  const handleMouseEnter = (href: string) => {
    const linkElement = document.querySelector(`[href="${href}"]`);
    if (linkElement) {
      const offset = linkElement.getBoundingClientRect().left;
      document.documentElement.style.setProperty('--link-offset', `${offset}px`);
    }
    setHoveredLink(href);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <header className="w-full">
      <div className="bg-black text-white text-sm text-center py-2 flex justify-center items-center">
        <span className="mr-2">🌿 Planet friendly packaging - always!</span>
      </div>
      <div className="flex justify-between items-center py-4 px-6 border-b border-white transition-all duration-300 hover:bg-white hover:text-black">
        <nav className="relative w-full" onMouseLeave={handleMouseLeave}>
          <ul className="flex items-center gap-8">
            <Link href="/store" className="text-sm font-bold hover:text-gray-600 transition">
              STORE
            </Link>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.dropdownItems && handleMouseEnter(link.href)}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-bold transition-colors ${
                    link.special
                      ? "text-red-500"
                      : "hover:text-gray-600"
                  }`}
                >
                  {link.label.toUpperCase()}
                </Link>
                {hoveredLink === link.href && link.dropdownItems && (
                  <div className="absolute left-0 top-full w-screen -translate-x-[var(--link-offset)] opacity-100 visible transition-all duration-300 z-50">
                    <div className="w-full bg-white shadow-lg">
                      <div className="max-w-screen-2xl mx-auto py-12 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex flex-col gap-3 hover:opacity-80 transition text-center"
                            >
                              <div className="aspect-[4/3] overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.label}
                                  width={244}
                                  height={244}
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-sm font-medium text-center">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-gray-600 transition" />
          <User className="w-6 h-6 cursor-pointer hover:text-gray-600 transition" />
          <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-600 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;