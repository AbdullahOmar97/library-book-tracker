"use client";

import Link from 'next/link';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white text-center">
      <h1 className="text-2xl font-bold">Library Book Tracker</h1>
      <nav className="mt-2">
        <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
        <Link href="/about" className="mx-2 text-white hover:underline">About Us</Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
      >
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      {user ? <Home /> : <Login />}
    </header>
  );
};
};


