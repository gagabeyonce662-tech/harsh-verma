import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { CONTACT } from "./homeLanding.data";

export default function Header() {
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
          className="text-primary hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
        >
          About
        </Link>
        <Link
          href="/#services"
          className="text-on-surface hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
        >
          Services
        </Link>
        <Link
          href="/gallery"
          className="text-on-surface hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
        >
          Gallery
        </Link>
        <Link
          href="/#contact"
          className="text-on-surface hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
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
