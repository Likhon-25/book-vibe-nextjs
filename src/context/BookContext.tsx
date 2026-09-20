"use client";

import React, { createContext, useState } from "react";

export const BookContext = createContext({});

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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
