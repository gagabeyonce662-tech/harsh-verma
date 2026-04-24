"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { CONTACT } from "./homeLanding.data";

export default function Header() {
  const pathname = usePathname();
  const isGalleryRoute = pathname.startsWith("/gallery");
  const isHomeRoute = pathname === "/";
  const navClass = (isActive: boolean) =>
    `${isActive ? "text-primary bg-surface-container-low" : "text-on-surface"} hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface flex justify-between items-center px-6 py-4 border-b border-surface-container-high">
      {/* Logo Area */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo_bright.svg"
          alt="Diesel Performance - Truck Repair Specialists"
          className="header-logo header-logo-light h-12 w-auto"
        />
        <img
          src="/logo_dark.svg"
          alt="Diesel Performance - Truck Repair Specialists"
          className="header-logo header-logo-dark h-12 w-auto"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-headline font-bold text-sm tracking-tighter uppercase">
        <Link
          href="/#about"
          className={navClass(isHomeRoute)}
          aria-current={isHomeRoute ? "page" : undefined}
        >
          About
        </Link>
        <Link
          href="/#services"
          className={navClass(false)}
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className={navClass(isGalleryRoute)}
          aria-current={isGalleryRoute ? "page" : undefined}
        >
          Gallery
        </Link>
        <Link
          href="/#contact"
          className={navClass(false)}
        >
          Contact
        </Link>
        <Link
          href={CONTACT.phoneHref}
          className="bg-primary text-white px-3 py-2 rounded-sm transition-colors hover:opacity-90"
        >
          {CONTACT.phoneDisplayCompact}
        </Link>
      </nav>

      {/* Action / Theme */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
