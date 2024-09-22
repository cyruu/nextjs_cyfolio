"use client";
import React, { useState } from "react";
import "@/css/projects.css";
import Image from "next/image";
import Link from "next/link";
// import "../css/projects.css";
import { projects } from "@/index.js";
function Projects() {
  // In your React component
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, []);
  // useEffect(() => {
  //   const projectSection = document.getElementById("projects");
  //   const projecttitle = document.getElementById("projecttitle");
  //   const firstProject = document.getElementById("firstproject");
  //   const secondProject = document.getElementById("secondproject");
  //   //project title observer
  //   const projecttitleObserver = new IntersectionObserver(
  //     function (entities, observer) {
  //       entities.forEach((entity) => {
  //         if (entity.isIntersecting) {
  //           projecttitle.style.opacity = 1;
  //         } else {
  //           projecttitle.style.opacity = 0;
  //           // console.log("dont");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.3,
  //     }
  //   );
  //   projecttitleObserver.observe(projectSection);
  //   // threshold for mobile
  //   let tempthreshold = 0.7;
  //   let screenWidth = window.screen.width;
  //   if (screenWidth < 431) {
  //     tempthreshold = 0.45;
  //   }
  //   // first project observer
  //   const firstProjectObserver = new IntersectionObserver(
  //     function (entities, observer) {
  //       entities.forEach((entity) => {
  //         if (entity.isIntersecting) {
  //           firstProject.style.opacity = 1;
  //           firstProject.style.transform = "translateX(0)";
  //           secondProject.style.opacity = 1;
  //           secondProject.style.transform = "translateX(0)";
  //         } else {
  //           firstProject.style.transform = "translateX(-600px)";
  //           firstProject.style.opacity = 0;
  //           secondProject.style.transform = "translateX(600px)";
  //           secondProject.style.opacity = 0;
  //           // console.log("dont");
  //         }
  //       });
  //     },
  //     {
  //       threshold: tempthreshold,
  //     }
  //   );
  //   firstProjectObserver.observe(projectSection);
  // }, []);
  const [noOfProjects, setNoOfProjects] = useState(4);
  return (
    <section id="projects" className="min-h-[90vh] flex flex-col items-center">
      <p
        id="projecttitle"
        className="font-bold text-2xl my-6 text-gray-600 transition-all duration-600 ease-out md:text-3xl "
      >
        Projects
      </p>
      <div className="projects flex-1 flex flex-col w-[95%] md:w-[80%] ">
        <div className="projectcontainer grid gap-4 place-items-center grid-cols-2 md:grid-cols-4 md:gap-8">
          {projects.slice(0, noOfProjects).map((el, i) => (
            <Link
              href={el.link}
              target="_blank"
              className="projectitem w-[90%] h-[210px] p-2 hover:shadow-md rounded-xl transition-all duration-400 ease-in md:h-[250px]"
              key={i}
            >
              <div className="blogimage h-[50%] md:h-[60%]">
                <Image
                  src={el.image}
                  alt=""
                  loading="lazy"
                  className="rounded-2xl h-full object-fill"
                />
              </div>
              <div className="blogdesc h-[80px] mt-2 flex flex-col">
                <p className="blogdate w-max text-sm text-black font-bold">
                  {el.title}
                </p>
                <div className="tools flex-1 flex flex-wrap  ">
                  {el.tools.map((tool, i) => {
                    return (
                      <div className="tool text-xs mr-2 text-gray-400" key={i}>
                        {tool}
                      </div>
                    );
                  })}
                </div>

                <span className="blogbutton text-xs mt-1">
                  Demo <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center py-8">
          {noOfProjects >= projects.length ? (
            <button
              className="loadmore px-4 py-2 text-xs"
              onClick={() => setNoOfProjects(4)}
            >
              <i className="ri-arrow-up-s-line font-bold text-md mr-2 bg-gray-200 p-2 rounded-full"></i>
              Show Less
            </button>
          ) : (
            <button
              className="loadmore px-4 py-2 text-xs "
              onClick={() => setNoOfProjects((prev) => prev + 4)}
            >
              <i className="ri-arrow-down-s-line font-bold text-md mr-2 bg-gray-200 p-2 rounded-full"></i>
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
