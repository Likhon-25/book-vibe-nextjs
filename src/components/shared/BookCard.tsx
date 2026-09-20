import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IBookCardProps {
  book: IBook;
}
const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-[320px] overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#23BE0A] shadow-sm backdrop-blur-sm">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="line-clamp-1 font-serif text-2xl font-bold text-[#131313]">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="my-5 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 line-clamp-1 text-sm font-semibold text-gray-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Rating</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              {book.rating} / 5
            </p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button
            type="button"
            className="w-full rounded-xl bg-[#23BE0A] py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#1fa308]"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
