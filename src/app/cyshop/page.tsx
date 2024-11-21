"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { codesell } from "@/codesell/codesell";

const CyShopPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="cyshopcontainer min-h-[90vh] mt-[10vh] ">
      <div className="cyshopdescription w-[90%] mb-10 mx-auto mt-32 text-center md:mt-24 md:mb-14">
        <p className="text-xl font-bold md:text-2xl ">Get Code</p>
        <p className="text-xs text-gray-500 mt-1 md:text-sm">
          Here are some of my projects that i have built.
        </p>
      </div>
      <div
        id="firstcodesell"
        className="w-[90%] mx-auto grid grid-cols-1 place-items-center gap-14 md:grid-cols-3 md:gap-0 "
      >
        {codesell.map((codesel) => {
          return (
            <Link
              href={codesel.gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative codeselitem flex flex-col w-[100%] h-full rounded-2xl overflow-hidden transition-all duration-200 ease-in hover:shadow-md md:w-[80%] "
              key={codesel.id}
            >
              <div
                className={`banner absolute right-[-50px] top-7 bg-green-600 text-white text-center w-[180px] rotate-45 py-1 text-sm md:text-md md:right-[-40px]`}
              >
                {codesel.tag}
              </div>
              <div className="codeselimage p-2">
                <Image
                  src={codesel.thumbnail}
                  alt=""
                  loading="lazy"
                  className="rounded-2xl "
                />
              </div>
              <div className="codeseldesc h-full flex flex-col px-3 py-1">
                <p className="codeselname font-bold text-md md:text-[.85rem]">
                  {codesel.title}
                </p>

                <div className="codeselsmall text-xs mt-1 h-full text-gray-400">
                  {codesel.introduction}
                </div>
                <div className="price text-xs mt-2 h-full flex items-center">
                  <p className="text-sm text-red-700 font-bold line-through mr-2">
                    ${codesel.discount}
                  </p>
                  <p className="text-xl text-red-700 font-bold">
                    NRs. {codesel.price}
                  </p>
                </div>
                <span className="codeselbutton text-xs mt-3 mb-3 mr-auto text-red-700">
                  Get Code <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CyShopPage;
