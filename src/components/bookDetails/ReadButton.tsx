"use client";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book } : {book : IBook}) => {

    const {readBooks, setReadBooks} = useContext(BookContext)

  const handleReadBook = () => {
    console.log('Read Book button triger' , book);

    setReadBooks([...readBooks, book])
    toast.success(`you have readlist "${book.bookName}"`)
  };

  return (
    <div>
      <button
        onClick={() => handleReadBook()}
        className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#222] transition hover:bg-gray-100"
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;
