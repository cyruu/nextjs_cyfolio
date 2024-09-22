"use client";
import React, { useEffect } from "react";

const CyShop = ({ visited = false }) => {
  return (
    <div className=" text-md px-2 py-1 flex items-center relative rounded-full md:bg-[rgb(225,225,225)]">
      {"</"}
      <i className="ri-shopping-cart-2-line text-[1.2rem] mr-1"></i>
      {"Code>"}

      {!visited ? (
        <div
          id="newtext"
          className="absolute top-3 right-[-25px]  text-[.6rem] bg-red-600 px-1 rounded-full text-white md:top-[-5px] md:right-[-5px]"
        >
          {/* {visited ? " visited" : "not visited"} */}
          New
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CyShop;
