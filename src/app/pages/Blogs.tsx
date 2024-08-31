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
    <section id="blog" className="min-h-[90vh]">
      <div
        id="blogtopic"
        className="flex  mx-auto justify-center  flex-col items-center"
      >
        {/* first */}
        <p
          id="blogtitle"
          className="font-bold text-2xl mb-8 text-gray-600 transition-all duration-600 ease-out md:text-3xl"
        >
          Blog
        </p>
      </div>
      {/* topic ends */}
      <div className="blogitems">
        {/* first blog */}
        <div id="firstblog">
          {blogs.map((blog) => {
            return (
              <Link
                href={`/blog/${blog.id}`}
                rel="noopener noreferrer"
                className="blogitem"
                key={blog.id}
              >
                <div className="blogimage">
                  <Image src={blog.thumbnail} alt="" />
                </div>
                <div className="blogdesc">
                  <p className="blogname">{blog.title}</p>

                  <p className="blogdate">{blog.date}</p>
                  <div className="blogsmall">{blog.displayIntro}</div>
                  <span className="blogbutton">View</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* second blog */}
        <div id="secondblog">{/* blog1 */}</div>
      </div>
    </section>
  );
}

export default Blog;
