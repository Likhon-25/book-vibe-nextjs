import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    booksId: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BookDetilsPage = async ({ params }: IBookDetailsPageProps) => {
  const { booksId } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(booksId),
  ) as IBook;

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <div className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[44%_56%] lg:gap-14 lg:p-12">
        {/* ================= IMAGE ================= */}
        <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#f5f5f5] p-8 sm:h-[500px]">
          <div className="relative h-full w-full max-w-[330px]">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              sizes="(max-width: 768px) 80vw, 330px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col">
          {/* Category + Rating */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-[#23BE0A] px-4 py-2 text-sm font-semibold text-white">
              {book.category}
            </span>

            <span className="rounded-md bg-[#58b8d0] px-4 py-2 text-sm font-semibold text-white">
              ★ {book.rating}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#222] sm:text-4xl lg:text-[42px]">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-base text-gray-600">
            By : <span className="font-medium text-[#222]">{book.author}</span>
          </p>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-200" />

          {/* Category */}
          <div className="border-b border-gray-200 pb-4">
            <p className="text-sm text-gray-700">{book.category}</p>
          </div>

          {/* Review */}
          <div className="border-b border-gray-200 py-5">
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-bold text-[#222]">Review :</span>{" "}
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="border-b border-gray-200 py-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-bold text-[#222]">Tag</span>

              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#23BE0A]/10 px-4 py-1.5 text-xs font-medium text-[#23BE0A]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Book Information */}
          <div className="border-b border-gray-200 py-5">
            <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm">
              <span className="text-gray-500">Number of Pages:</span>
              <span className="font-semibold text-[#222]">
                {book.totalPages}
              </span>

              <span className="text-gray-500">Publisher:</span>
              <span className="font-semibold text-[#222]">
                {book.publisher}
              </span>

              <span className="text-gray-500">Year of Publishing:</span>
              <span className="font-semibold text-[#222]">
                {book.yearOfPublishing}
              </span>

              <span className="text-gray-500">Rating:</span>
              <span className="font-semibold text-[#222]">{book.rating}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <ReadButton book={book} />

            <WishListButton book={book} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetilsPage;
