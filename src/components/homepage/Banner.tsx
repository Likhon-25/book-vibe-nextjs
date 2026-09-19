import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <div className="bg-[#13131305] rounded-3xl p-8 md:px-[120px] md:py-20 flex flex-col container mx-auto md:flex-row items-center justify-between gap-12 my-6">
  <div className="flex-1 space-y-7">
    <h1 className="text-4xl md:text-[56px] font-bold text-[#131313] leading-[1.3] font-serif tracking-tight">
      Books to freshen up <br className="hidden md:inline" />
      your bookshelf
    </h1>
    <button className="bg-[#23BE0A] text-white px-7 py-4 rounded-xl font-bold text-[20px] hover:bg-[#1fa308] transition-colors cursor-pointer border-none">
      View The List
    </button>
  </div>

  <div className="flex-1 flex justify-center md:justify-end">
    <Image src={bannerImage}  alt="Banner image"/>
  </div>
</div>
  );
};

export default Banner;
