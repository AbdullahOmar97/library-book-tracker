"use client";

import { useMemo } from 'react';

export default function useSortedBooks(books) {
  return useMemo(() => {
    return books.slice().sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
}
