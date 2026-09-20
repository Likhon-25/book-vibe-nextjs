"use client";
import { BookContext } from "@/context/BookContext";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BookContext);
  return <div>Listed Books</div>;
};

export default ListedBooks;
