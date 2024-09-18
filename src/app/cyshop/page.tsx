"use client";
import React, { useEffect } from "react";

const CyShopPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="cyshopcontainer">
      <div className="min-h-[90vh] mt-[10vh]">CyShopPage</div>
      <div className="min-h-[90vh] mt-[10vh]">CyShopPage</div>
    </div>
  );
};

export default CyShopPage;
