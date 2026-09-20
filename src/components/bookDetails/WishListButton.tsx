"use client";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);

  const handleWishlistBook = () => {
    console.log("Wishlist button triger", book);

    setWishlist([...wishlist, book]);
    alert(`you have read "${book.bookName}"`);
  };

  return (
    <div>
      <button
        onClick={handleWishlistBook}
        className="rounded-lg bg-[#58b8d0] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#43a8c1]"
      >
        Wishlist
      </button>
    </div>
  );
};

export default WishListButton;
