// import React, { useEffect } from "react";
import "@/css/blogs.css";
import { blogs } from "@/index.js";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";
function Blog() {
  // useEffect(() => {
  //   const blogSection = document.getElementById("blog");
  //   const blogTitle = document.getElementById("blogtitle");
  //   const firstBlog = document.getElementById("firstblog");
  //   const secondBlog = document.getElementById("secondblog");
  //   let tempthreshold = 0.7;
  //   let screenWidth = window.screen.width;
  //   if (screenWidth < 431) {
  //     tempthreshold = 0.45;
  //   }
  //   const blogTitleObserver = new IntersectionObserver(
  //     function (entities, observer) {
  //       entities.forEach((entity) => {
  //         if (entity.isIntersecting) {
  //           blogTitle.style.opacity = 1;
  //         } else {
  //           blogTitle.style.opacity = 0;
  //         }
  //       });
  //     },
  //     { threshold: 0.3 }
  //   );
  //   blogTitleObserver.observe(blogSection);
  //   // blog observer
  //   const firstBlogObserver = new IntersectionObserver(
  //     function (entities, observer) {
  //       entities.forEach((entity) => {
  //         if (entity.isIntersecting) {
  //           firstBlog.style.opacity = 1;
  //           firstBlog.style.transform = "translateX(0)";
  //           secondBlog.style.opacity = 1;
  //           secondBlog.style.transform = "translateX(0)";
  //         } else {
  //           firstBlog.style.transform = "translateX(-600px)";
  //           firstBlog.style.opacity = 0;
  //           secondBlog.style.transform = "translateX(600px)";
  //           secondBlog.style.opacity = 0;
  //           // console.log("dont");
  //         }
  //       });
  //     },
  //     {
  //       threshold: tempthreshold,
  //     }
  //   );
  //   firstBlogObserver.observe(blogSection);
  // }, []);
  return (
    <section id="blog" className="min-h-[90vh] flex flex-col items-center">
      <div
        id="blogtopic"
        className="flex  mx-auto justify-center  flex-col items-center"
      >
        {/* first */}
        <p
          id="blogtitle"
          className="font-bold text-2xl my-6 text-gray-600 transition-all duration-600 ease-out md:text-3xl"
        >
          Blog
        </p>
      </div>
      {/* topic ends */}
      <div className="blogitems flex w-full md:w-[90%]">
        {/* first blog */}
        <div
          id="firstblog"
          className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-3 md:gap-0 "
        >
          {blogs.map((blog) => {
            return (
              <Link
                href={`/blog/${blog.id}`}
                rel="noopener noreferrer"
                className="blogitem flex flex-col w-[80%] h-full rounded-2xl overflow-hidden transition-all duration-200 ease-in hover:shadow-md "
                key={blog.id}
              >
                <div className="blogimage p-2">
                  <Image src={blog.thumbnail} alt="" className="rounded-2xl" />
                </div>
                <div className="blogdesc h-full flex flex-col px-3 py-1">
                  <p className="blogdate w-max text-xs text-gray-400">
                    {blog.date}
                  </p>
                  <p className="blogname font-bold text-md md:text-[.85rem]">
                    {blog.title}
                  </p>

                  <div className="blogsmall text-xs mt-3">
                    {blog.displayIntro}
                  </div>
                  <span className="blogbutton text-xs mt-3 mb-3 mr-auto">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
