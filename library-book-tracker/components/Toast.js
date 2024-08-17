// components/Toast.js
"use client"; 

export default function Toast({ message }) {
  return (
    message && (
      <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded shadow-lg">
        <p>{message}</p>
      </div>
    )
  );
}
