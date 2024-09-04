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

  function scrollToPage(id: String) {
    //giving 0
    console.log(aboutmesectionTopPixel);

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
  const handleClick = ({ target }: any) => {
    const id = target.id;
    scrollToPage(id);
  };
  useEffect(() => {
    if (docLoaded) {
      window.scrollTo({
        top: 0,
      });
      setTimeout(() => {
        const homeTop: any = document
          .getElementById("home")
          ?.getBoundingClientRect().top;
        const aboutmeTop: any = document
          .getElementById("aboutme")
          ?.getBoundingClientRect().top;
        const projectsTop: any = document
          .getElementById("projects")
          ?.getBoundingClientRect().top;
        const blogsTop: any = document
          .getElementById("blog")
          ?.getBoundingClientRect().top;

        setHomeSectionTopPixel(homeTop - 73);
        setAboutmeSectionTopPixel(aboutmeTop - 73);
        setProjectsSectionTopPixel(projectsTop - 73);
        setBlogSectionTopPixel(blogsTop - 73);

        const eachlinks = document.querySelectorAll(".eachlink");
        eachlinks.forEach((link) => {
          link.addEventListener("click", handleClick);
        });
      }, 1000);
      return () => {
        const eachlinks = document.querySelectorAll(".eachlink");
        eachlinks.forEach((link) => {
          link.removeEventListener("click", handleClick); // Clean up listeners
        });
      };
    }
  }, [docLoaded]);

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
