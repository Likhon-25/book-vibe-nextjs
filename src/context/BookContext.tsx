"use client";

import { createContext, type ReactNode, useState } from "react";
import { IBook } from "@/types/books.type";

interface BookContextValue {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextValue>({
  readBooks: [],
  setReadBooks: () => undefined,
  wishlist: [],
  setWishlist: () => undefined,
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BookContext.Provider value={shareData}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
