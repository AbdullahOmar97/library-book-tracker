"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white text-center">
      <h1 className="text-2xl font-bold">Library Book Tracker</h1>
      <nav className="mt-2">
        <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
        <Link href="/about" className="mx-2 text-white hover:underline">About Us</Link>
      </nav>
    </header>
  );
}
