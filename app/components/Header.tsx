import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface flex justify-between items-center px-6 py-4 border-b border-surface-container-high">
      {/* Logo Area */}
      <Link
        href="/"
        className="font-headline font-black text-xl text-primary tracking-widest uppercase"
      >
        DIESEL PERFORMANCE
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-headline font-bold text-sm tracking-tighter uppercase">
        <Link
          href="/repairs"
          className="text-primary hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
        >
          Workshop
        </Link>
        <Link
          href="/services"
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
          href="/mobile-services"
          className="text-on-surface hover:bg-surface-container-low px-3 py-2 rounded-sm transition-colors"
        >
          Mobile
        </Link>
      </nav>

      {/* Action / Theme */}
      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
