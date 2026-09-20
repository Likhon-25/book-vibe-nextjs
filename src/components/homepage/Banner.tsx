import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto my-8 px-4 md:my-12">
      <div className="relative flex min-h-[500px] items-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f1f8ee] via-[#f8fbf6] to-[#e8f5e3] px-6 py-12 shadow-sm md:px-16 lg:px-24">
        {/* Background Decoration */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-4 inline-block rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
              Discover Your Next Read
            </span>

            <h1 className="max-w-[650px] font-serif text-4xl font-bold leading-tight tracking-tight text-[#131313] sm:text-5xl md:text-[56px] lg:text-[64px]">
              Books to
              <span className="text-[#23BE0A]"> freshen up </span>
              your bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Discover inspiring stories, timeless classics, and exciting new
              reads curated just for you.
            </p>

            <div className="mt-8">
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#23BE0A] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#23BE0A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa308] hover:shadow-xl hover:shadow-[#23BE0A]/30"
              >
                View The List
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex flex-1 justify-center md:justify-end">
            <div className="absolute h-[280px] w-[280px] rounded-full bg-[#23BE0A]/10 blur-2xl md:h-[380px] md:w-[380px]" />

            <div className="relative z-10 overflow-hidden rounded-3xl bg-white/50 p-4 shadow-2xl backdrop-blur-sm">
              <Image
                src={bannerImage}
                alt="Books displayed on a bookshelf"
                priority
                className="h-auto w-full max-w-[380px] rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
