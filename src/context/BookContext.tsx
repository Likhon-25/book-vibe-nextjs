import React, { useState } from "react";
import { createContext } from "vm";

const BookContext = createContext({});

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const shareData = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return <BookContext.Provider value={shareData}>{ children }</BookContext.Provider>;
};

export default BookProvider;
