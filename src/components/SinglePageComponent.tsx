"use client";
import { Home, AboutMe, Blogs, Projects } from "@/index.js";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import { Home, AboutMe, Projects, Blog } from "../index";
function SinglePageComponent() {
  //   let { page } = useParams();
  const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  const [docLoaded, setDocLoaded] = useState(false);
  // doc loaded
  useEffect(() => {
    setDocLoaded(true);
  }, []);

  function scrollToPage({ target }: any) {
    //giving 0
    console.log(aboutmesectionTopPixel);
    let id = target.id;
    switch (id) {
      case "0":
        window.scrollTo({
          top: homesectionTopPixel,
        });
        break;
      case "1":
        window.scrollTo({
          top: aboutmesectionTopPixel,
        });
        break;
      case "2":
        window.scrollTo({
          top: projectssectionTopPixel,
        });
        break;
      case "3":
        window.scrollTo({
          top: blogsectionTopPixel,
        });
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    if (docLoaded) {
      window.scrollTo({
        top: 0,
      });
      const homeElement: any = document.getElementById("home");
      const aboutmeElement: any = document.getElementById("aboutme");
      const projectsElement: any = document.getElementById("projects");
      const blogElement: any = document.getElementById("blog");
      if (homeElement && aboutmeElement && projectsElement && blogElement) {
        const homeTop: any =
          homeElement.getBoundingClientRect().top + window.scrollY;
        const aboutmeTop: any =
          aboutmeElement.getBoundingClientRect().top + window.scrollY;
        const projectsTop: any =
          projectsElement.getBoundingClientRect().top + window.scrollY;
        const blogsTop: any =
          blogElement.getBoundingClientRect().top + window.scrollY;

        setHomeSectionTopPixel(homeTop - 73);
        setAboutmeSectionTopPixel(aboutmeTop - 73);
        setProjectsSectionTopPixel(projectsTop - 73);
        setBlogSectionTopPixel(blogsTop - 73);
      }
      const eachlinks = document.querySelectorAll(".eachlink");
      eachlinks.forEach((link) => {
        link.addEventListener("click", scrollToPage);
      });
      return () => {
        const eachlinks = document.querySelectorAll(".eachlink");
        eachlinks.forEach((link) => {
          link.removeEventListener("click", scrollToPage); // Clean up listeners
        });
      };
    }
  }, [docLoaded, aboutmesectionTopPixel]);

  return (
    <div>
      <Home />
      <AboutMe />
      <Projects />
      <Blogs />
    </div>
  );
}

export default SinglePageComponent;
