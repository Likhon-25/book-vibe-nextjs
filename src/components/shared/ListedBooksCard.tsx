import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IListedBooksCardProps {
  book: IBook;
}
const ListedBooksCard = ({ book }: IListedBooksCardProps) => {
  return (
    <div
      className="group flex flex-col gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row"
    >
      {/* Book Image */}
      <div className="flex h-[280px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-5 sm:h-[250px] sm:w-[180px]">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={250}
          className="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-1 flex-col justify-between py-1">
        <div>
          {/* Category + Rating */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#23BE0A]/10 px-3 py-1 text-xs font-semibold text-[#23BE0A]">
              {book.category}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-gray-700">
              <span className="text-yellow-500">★</span>
              {book.rating}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-4 font-serif text-2xl font-bold text-[#131313] transition-colors group-hover:text-[#23BE0A]">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm text-gray-500">
            by <span className="font-medium text-gray-700">{book.author}</span>
          </p>

          {/* Review */}
          <p className="mt-4 line-clamp-3 max-w-3xl text-sm leading-6 text-gray-500">
            {book.review}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
            <span>
              <strong className="text-gray-700">{book.totalPages}</strong> Pages
            </span>

            <span>
              Published{" "}
              <strong className="text-gray-700">{book.yearOfPublishing}</strong>
            </span>

            <span>
              <strong className="text-gray-700">{book.publisher}</strong>
            </span>
          </div>

          <button
            type="button"
            className="rounded-xl bg-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fa308] hover:shadow-md"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
