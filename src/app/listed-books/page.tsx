"use client";
import { BookContext } from "@/context/BookContext";
import ListedBooksCard from "@/components/shared/ListedBooksCard";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BookContext);
  console.log(wishlist, "wishlist");
  return (
    <div className="container mx-auto py-[30px]">
      <h2 className=" my-4 bg-amber-100 rounded-3xl py-10 font-bold text-center">
        Listed Books
      </h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books ${readBooks.length}`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            readBooks.map((book) => {
              return (
               <ListedBooksCard  key={book.bookId} book={book} />
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books ${wishlist.length}`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((book) => {
              return <ListedBooksCard  key={book.bookId} book={book} />
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
