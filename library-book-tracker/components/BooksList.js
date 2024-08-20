"use client";

import useSortedBooks from '../hooks/useSortedBooks';

export default function BooksList({ books }) {
  const sortedBooks = useSortedBooks(books);

  if (sortedBooks.length === 0) {
    return <p className="mt-4 text-gray-500">No books added yet.</p>;
  }

  return (
    <ul className="mt-4 bg-white p-4 shadow-md rounded-md">
      {sortedBooks.map((book, index) => (
        <li key={index} className="mb-2">
          <strong>{book.title}</strong> by {book.author} ({book.genre})
        </li>
      ))}
    </ul>
  );
}
