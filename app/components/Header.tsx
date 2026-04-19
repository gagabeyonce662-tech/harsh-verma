import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/repairs">Truck Repairs</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/mobile-services">Mobile Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/store">Visit Our Store</Link>
        </li>
      </ul>
    </nav>
  );
}
