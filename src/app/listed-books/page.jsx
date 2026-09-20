"use client";
import { BookContext } from "@/context/BookContext";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);
  console.log(wishlist, "wishlist");
  return <div>Listed Books</div>;
};

export default ListedBooks;
