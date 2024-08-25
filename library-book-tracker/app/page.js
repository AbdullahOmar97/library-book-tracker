"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookForm from '../components/BookForm';
import BooksList from '../components/BooksList';
import ToastNotification from '../components/ToastNotification';
import { ThemeProvider } from './context/ThemeContext';

export default function Home() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ThemeProvider>
      <AuthProvider>
      <Header />
      <main className="flex-grow p-8 bg-gray-100">
        <BookForm addBook={addBook} />
        <BooksList books={books} />
        <ToastNotification />
      </main>
      <Footer />
      </AuthProvider>
      </ThemeProvider>
    </div>
  );
}
