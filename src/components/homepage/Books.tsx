import React from "react";
import Image from "next/image";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#23BE0A]">
          Explore Our Collection
        </p>

        <h2 className="font-serif text-4xl font-bold text-[#131313] md:text-5xl">
          Popular Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover stories, ideas, and adventures from our carefully selected
          collection of books.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book : IBook) => {
          return <BookCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
