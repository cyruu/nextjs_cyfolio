"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { blogs } from "@/index";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const SingleBlog = ({ params }: any) => {
  const blogid = params.blogid;
  function handleCopyText(element: any) {
    return function () {
      console.log(element, "clicked");
      element.style.opacity = 1;
      setTimeout(() => {
        element.style.opacity = 0;
      }, 500);
    };
  }
  function copyToClipboard(element: any) {
    return function () {
      let codeText = element.innerText;

      navigator.clipboard.writeText(codeText);
    };
  }
  const [singleBlogObject, setSingleBlogObject] = useState<any>({});
  useEffect(() => {
    const blog = blogs.filter((blog) => blog.id == blogid);
    setSingleBlogObject(blog[0]);
    // clipboard
    const copycss: any = document.getElementById("copycss");
    const copyhtml: any = document.getElementById("copyhtml");
    const copyjs: any = document.getElementById("copyjs");

    //copied text
    const htmlcopied = document.getElementById("htmlcopied");
    const csscopied = document.getElementById("csscopied");
    const jscopied = document.getElementById("jscopied");

    copyhtml.addEventListener("click", handleCopyText(htmlcopied));
    copycss.addEventListener("click", handleCopyText(csscopied));
    copyjs.addEventListener("click", handleCopyText(jscopied));

    var codeBlockHtml = document.getElementById("codeBlockHtml");
    var codeBlocCss = document.getElementById("codeBlockCss");
    var codeBlockJs = document.getElementById("codeBlockJs");

    copyhtml.addEventListener("click", copyToClipboard(codeBlockHtml));
    copycss.addEventListener("click", copyToClipboard(codeBlocCss));
    copyjs.addEventListener("click", copyToClipboard(codeBlockJs));

    return () => {
      copyhtml.removeEventListener("click", handleCopyText(htmlcopied));
      copycss.removeEventListener("click", handleCopyText(csscopied));
      copyjs.removeEventListener("click", handleCopyText(jscopied));
      copyhtml.removeEventListener("click", copyToClipboard(codeBlockHtml));
      copycss.removeEventListener("click", copyToClipboard(codeBlocCss));
      copyjs.removeEventListener("click", copyToClipboard(codeBlockJs));
    };
  }, []);
  return (
    <div className="singleblog mt-[10vh] min-h-[90vh] pt-5 md:pt-16">
      <div className="blogcontainer w-[90%] mx-auto mb-16 md:w-[75%]">
        <div className="titledate py-2 sticky top-[10vh] bg-white z-20">
          <p className="blogtitle text-xl font-bold   md:text-2xl">
            {singleBlogObject.title}
          </p>
          <p className="singleblogdate text-xs text-gray-500 mt-1">
            {singleBlogObject.date} ,&nbsp;Cyrus Maharjan
          </p>
        </div>
        <p className="firstIntroduction mt-5 text-xs md:text-sm">
          {singleBlogObject.firstIntroduction}
        </p>
        {/* <div
          className={`ytvideo ${singleBlogObject.ytLink ? "" : "displaynone"}`}
        > */}
        <div className={` ytvideo my-7 ${true ? "" : "hidden"}`}>
          <iframe
            className="mx-auto w-full h-[170px] md:w-[560px] md:w-[315px] md:h-[320px]"
            src={singleBlogObject.ytLink}
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* if no yt display thubnail */}
        {/* <div
          className={`thumbnail w-full md:w-[315px] ${
            singleBlogObject.ytLink ? "hidden" : ""
          }`}
        >

          <Image src={singleBlogObject.thumbnail} alt="thumbnail" />
        </div> */}
        {/* index.html */}
        <div
          className={`indexhtmlcontainer relative ${
            singleBlogObject.indexHtml ? "" : "hidden"
          }`}
        >
          <p className="mb-3">
            {/* <p className={`indexhtml ${fa ? "" : "hidden"} `}> */}
            Code for <span className="font-bold">index.html</span>
            <button
              id="copyhtml"
              title="copy"
              className="absolute top-14 right-3 md:right-14"
            >
              <i className="ri-clipboard-line text-xl text-white  border border-1-white p-1 rounded-lg"></i>
              <p
                id="htmlcopied"
                className="text-gray-300 text-xs md:text-sm mt-1 opacity-0"
              >
                copied
              </p>
            </button>
          </p>
          <SyntaxHighlighter
            language="html"
            id="codeBlockHtml"
            style={oneDark}
            className="no-scrollbar text-xs h-[400px] md:text-sm md:h-[500px]"
          >
            {singleBlogObject.indexHtml}
          </SyntaxHighlighter>
        </div>
        {/* styles.css */}
        <div
          className={`stylescsscontainer relative ${
            singleBlogObject.css ? "" : "hidden"
          }`}
        >
          <p className="mb-3 mt-5">
            Code for <span className="font-bold">styles.css</span>
            <button
              id="copycss"
              title="copy"
              className="absolute top-14 right-3 md:right-14"
            >
              <i className="ri-clipboard-line text-xl text-white  border border-1-white p-1 rounded-lg"></i>
              <p
                id="csscopied"
                className="text-gray-300 text-xs md:text-sm mt-1 opacity-0"
              >
                copied
              </p>
            </button>
          </p>
          <SyntaxHighlighter
            language="css"
            id="codeBlockCss"
            style={oneDark}
            className="no-scrollbar text-xs h-[400px] md:text-sm md:h-[500px]"
          >
            {singleBlogObject.css}
          </SyntaxHighlighter>
        </div>
        {/* script.js */}
        <div
          className={`scriptjscontainer relative ${
            singleBlogObject.js ? "" : "hidden"
          }`}
        >
          <p className="mb-3 mt-5">
            Code for <span className="font-bold">script.js</span>
            <button
              id="copyjs"
              title="copy"
              className="absolute top-14 right-3 md:right-14"
            >
              <i className="ri-clipboard-line text-xl text-white  border border-1-white p-1 rounded-lg"></i>
              <p
                id="jscopied"
                className="text-gray-300 text-xs md:text-sm mt-1 opacity-0"
              >
                copied
              </p>
            </button>
          </p>
          <SyntaxHighlighter
            language="javascript"
            id="codeBlockJs"
            style={oneDark}
            className="no-scrollbar text-xs h-[400px] md:text-sm md:h-[500px]"
          >
            {singleBlogObject.js}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
