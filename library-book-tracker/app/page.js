// app/page.js
"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookForm from '../components/BookForm';
import Toast from '../components/Toast';

export default function Home() {
  const [lastAddedBook, setLastAddedBook] = useState(null);

  const handleAddBook = (book) => {
    setLastAddedBook(`Added: ${book.title} by ${book.author}`);
    setTimeout(() => setLastAddedBook(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <BookForm onAddBook={handleAddBook} />
        <Toast message={lastAddedBook} />
      </main>
      <Footer />
    </div>
  );
}
