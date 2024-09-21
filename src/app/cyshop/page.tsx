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
    <div className="cyshopcontainer min-h-[90vh] mt-[10vh]">
      <div
        id="firstcodesell"
        className="mt-32 grid grid-cols-1 place-items-center gap-8 md:grid-cols-3 md:gap-0 "
      >
        {codesell.map((blog) => {
          return (
            <Link
              href={`/blogs/${blog.id}`}
              rel="noopener noreferrer"
              className="blogitem flex flex-col w-[80%] h-full rounded-2xl overflow-hidden transition-all duration-200 ease-in hover:shadow-md "
              key={blog.id}
            >
              <div className="blogimage p-2">
                <Image src={blog.thumbnail} alt="" className="rounded-2xl" />
              </div>
              <div className="blogdesc h-full flex flex-col px-3 py-1">
                {/* <p className="blogdate w-max text-xs text-gray-400">
                  {blog.date}
                </p> */}
                <p className="blogname font-bold text-md md:text-[.85rem]">
                  {blog.title}
                </p>

                {/* <div className="blogsmall text-xs mt-3 h-full">
                  {blog.displayIntro}
                </div> */}
                <span className="blogbutton text-xs mt-3 mb-3 mr-auto">
                  Read More <i className="ri-arrow-right-line"></i>
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
