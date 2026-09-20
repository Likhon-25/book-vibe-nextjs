import React from "react";
import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";

const link = (
  <>
    <li>
      <Link
        href={"/"}
        className=" font-medium text-gray-600 hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href={"/books"}
        className=" font-medium text-gray-600 hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Books
      </Link>{" "}
    </li>
    <li>
      <Link
        href={"/listed-books"}
        className=" font-medium text-gray-600 hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Listed Books
      </Link>{" "}
    </li>
    <li>
      <Link
        href={"/read-books"}
        className=" font-medium text-gray-600 hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Read Books
      </Link>{" "}
    </li>
  </>
);
const Navbar = () => {
  return (
    <div className="bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto">
        <div className="navbar min-h-[72px] px-4">
          {/* Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-xl lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-2xl bg-white p-3 shadow-xl">
                {link}
              </ul>
            </div>

            {/* Logo */}
            <div className="btn btn-ghost gap-3 px-2 text-xl hover:bg-transparent">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#23BE0A]/10">
                <Image src={logo} alt="Nav logo" width={28} height={28} />
              </div>

              <span className="font-serif font-bold text-[#131313]">
                Book Vibe
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{link}</ul>
          </div>

          {/* Buttons */}
          <div className="navbar-end gap-2">
            <button className="btn btn-success">Sign in</button>

            <button className="btn btn-info">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
