"use client";

import { useState } from 'react';
import { toast } from 'react-toastify';

export default function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre };
    addBook(newBook);
    toast(`Added: ${title} by ${author} (${genre})`);
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Add Book
      </button>
    </form>
  );
}
