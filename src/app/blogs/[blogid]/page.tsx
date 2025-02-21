"use client";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import { blogs } from "@/index";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import { Box, Button, Modal, TextareaAutosize, TextField } from "@mui/material";
const SingleBlog = ({ params }: any) => {
  const blogid = params.blogid;
  const [openBuyModal, setopenbuyModal] = useState(false);
  const [noOfBlogs, setnoOfBlogs] = useState(3);
  const [ytLoading, setytLoading] = useState(true);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
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
    <div className="singleblog  mt-[10vh] min-h-[90vh]">
      {loading ? (
        <div className="loading flex items-start justify-center">
          <div className="mt-10 flex flex-col items-center">
            <CircularProgress sx={{ color: "gray" }} />
            <p className="mt-3 text-gray-500">Loading...</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="blog-otherblogs-container relative flex  mt-24 w-[90%] mx-auto mb-16 md:w-[90%]">
        {/* main blog container */}
        <div className="blogcontainer w-full md:w-[75%] md:pr-8 md:border-r md:border-gray-200">
          <div className="text-button sticky top-[10vh] bg-white py-2  md:flex md:items-start">
            <div className="titledate flex-1  z-10">
              <p className="blogtitle text-xl font-bold   md:text-3xl">
                {singleBlogObject.title}
              </p>
              {singleBlogObject.date ? (
                <p className="singleblogdate text-xs text-gray-500 mt-1 ">
                  {singleBlogObject.date} ,&nbsp;Cyrus Maharjan
                </p>
              ) : (
                ""
              )}
            </div>
            {singleBlogObject.forsale && (
              <>
                <Button
                  variant="contained"
                  color="success"
                  className="my-2 text-xs md:text-[1rem] md:m-0"
                  onClick={() => setopenbuyModal(true)}
                >
                  <LocalMallIcon className="mr-2" />
                  Buy code
                </Button>
                <Modal
                  open={openBuyModal}
                  onClose={() => setopenbuyModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="flex items-center justify-center"
                >
                  <Box className="bg-white w-[90%]  p-4 rounded-xl md:w-[40%] md:p-8">
                    <h1 className="text-3xl mb-3 font-bold mx-auto w-max text-gray-600">
                      Get Your Code
                    </h1>
                    <p className="mx-auto w-max text-sm flex flex-col mb-8 text-gray-500 ">
                      Recommended to contact me through
                      <Link
                        href="https://www.instagram.com/cyruz_maharjan/"
                        target="_blank"
                        className="bg-[rgba(225,48,108,0.8)] py-1 text-center mt-1 px-2 ml-1 font-medium rounded-full text-[.8rem] text-white"
                      >
                        <InstagramIcon className="text-[1.2rem] mr-1 mb-0.5" />
                        cyruz_maharjan
                      </Link>
                    </p>
                    <form
                      onSubmit={() => {
                        alert("Currently not avaliable");
                      }}
                      className="space-y-4"
                    >
                      {/* Full Name */}
                      <TextField
                        variant="outlined"
                        label="Full Name"
                        size="medium"
                        className="w-full"
                      />
                      {/* Email */}

                      <TextField
                        variant="outlined"
                        label="Email"
                        size="medium"
                        className="w-full"
                      />

                      {/* Selected Porject */}
                      <TextField
                        variant="outlined"
                        label="Selected Project"
                        size="medium"
                        className="w-full"
                        value={singleBlogObject?.title}
                        onChange={() => {}}
                        disabled
                      />
                      {/* Selected Porject */}
                      <TextField
                        variant="outlined"
                        label="Price"
                        size="medium"
                        className="w-full"
                        value={`NRs. ${singleBlogObject?.price}`}
                        onChange={() => {}}
                        disabled
                      />

                      {/* Description */}
                      <div style={{ marginTop: ".5rem" }} className="">
                        <label className="text-sm text-gray-600">
                          Description
                        </label>
                        <textarea
                          style={{ margin: "0px" }}
                          className="border border-2  rounded-md text-sm w-full p-2 outline-blue-500 border-gray-200"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        className="w-full text-[1rem]"
                      >
                        Send Purchase Request
                      </Button>
                    </form>
                  </Box>
                </Modal>
              </>
            )}
          </div>
          <p className="firstIntroduction mt-5 text-xs md:text-base">
            {singleBlogObject.firstIntroduction}
          </p>
          {/* <div
          className={`ytvideo ${singleBlogObject.ytLink ? "" : "displaynone"}`}
        > */}
          <div className={` ytvideo my-7 ${true ? "" : "hidden"}`}>
            {!loading && ytLoading ? (
              <div className="mx-auto w-full h-[210px] flex items-center justify-center md:w-[560px] bg-gray-700  md:h-[330px]">
                <CircularProgress sx={{ color: "gray" }} />
              </div>
            ) : (
              ""
            )}
            <iframe
              className={`mx-auto w-full h-[210px] md:w-[560px]  md:h-[330px] ${
                ytLoading ? "hidden" : "block"
              }`}
              src={singleBlogObject.ytLink}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setytLoading(false)}
            ></iframe>
          </div>
          {singleBlogObject.secondIntroduction &&
          singleBlogObject.secondfeatures ? (
            <>
              {/* second intro */}
              <p className="secondIntroduction mt-5 text-xs md:text-base">
                {singleBlogObject.secondIntroduction}
              </p>
              {/* second features */}
              <ul className="my-5">
                {singleBlogObject.secondfeatures.map(
                  (feature: String, i: any) => {
                    return (
                      <li key={i} className="text-xs text-gray-500 md:text-sm">
                        <i
                          className="ri-circle-fill mr-2"
                          style={{ fontSize: ".4rem" }}
                        ></i>
                        {feature}
                      </li>
                    );
                  }
                )}
              </ul>
            </>
          ) : (
            ""
          )}
          {singleBlogObject.thirdIntroduction &&
          singleBlogObject.thirdfeatures ? (
            <>
              {/* second intro */}
              <p className="thirdIntroduction mt-5 text-xs md:text-base">
                {singleBlogObject.thirdIntroduction}
              </p>
              {/* second features */}
              <ul className="my-5">
                {singleBlogObject.thirdfeatures.map(
                  (feature: String, i: any) => {
                    return (
                      <li key={i} className="text-xs text-gray-500 md:text-sm">
                        <i
                          className="ri-circle-fill mr-2"
                          style={{ fontSize: ".4rem" }}
                        ></i>
                        {feature}
                      </li>
                    );
                  }
                )}
              </ul>
            </>
          ) : (
            ""
          )}

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
            <p className="mb-3 text-xs md:text-sm">
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
            <p className="mb-3 mt-5 text-xs md:text-sm">
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
            <p className="mb-3 mt-5 text-xs md:text-sm">
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
        {/* other blog list */}
        {loading ? (
          ""
        ) : (
          <div className="otherblogslist hidden  w-[25%] h-max md:flex md:flex-col md:items-center">
            {blogs.map((blog) => {
              if (blogid != blog.id)
                return (
                  <Link
                    href={`/blogs/${blog.id}`}
                    rel="noopener noreferrer"
                    className="blogitem mb-0 flex flex-col w-[85%] h-[260px] rounded-2xl overflow-hidden transition-all duration-200 ease-in hover:shadow-md md:mb-4 "
                    key={blog.id}
                  >
                    <div className="blogimage p-2 h-full overflow-hidden ">
                      <Image
                        src={blog.thumbnail}
                        alt=""
                        className="rounded-2xl w-full h-full "
                      />
                    </div>
                    <div className="blogdesc flex flex-col px-3 py-1">
                      <p className="blogdate w-max text-xs text-gray-400">
                        {blog.date}
                      </p>
                      <p className="blogname font-bold text-md md:text-[.85rem]">
                        {blog.title}
                      </p>
                      {/* 
                  <div className="blogsmall text-xs mt-3 h-full text-gray-400">
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
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
