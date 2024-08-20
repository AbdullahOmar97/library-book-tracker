"use client";

export default function About() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-base text-gray-700 mb-4">
          Welcome to the Library Book Tracker! This app helps you keep track of books you’ve read or plan to read. You can add books by their title, author, and genre, and view your list in alphabetical order.
        </p>
        <p className="text-base text-gray-700">
          Our goal is to help book enthusiasts organize their reading lists easily and efficiently. Happy reading!
        </p>
      </div>
    </div>
  );
}
