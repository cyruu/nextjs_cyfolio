// import React, { useEffect } from "react";
import "@/css/projects.css";
import Link from "next/link";
// import "../css/projects.css";
// import { projects } from "../projects/projects";

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
  return (
    <section
      id="projects"
      className="min-h-[90vh] bg-red-400 flex flex-col items-center"
    >
      <p
        id="projecttitle"
        className="font-bold text-2xl my-6 text-gray-600 transition-all duration-600 ease-out md:text-3xl "
      >
        Projects
      </p>
      <div className="projectcontainer flex-1 flex items-center bg-blue-100 w-full">
        <div className="projectlist bg-green-300 w-[90%] mx-auto">s</div>
      </div>
    </section>
  );
}

export default Projects;
