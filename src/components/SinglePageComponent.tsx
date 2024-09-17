"use client";
import { Home, AboutMe, Blogs, Projects, CyShop } from "@/index.js";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import { Home, AboutMe, Projects, Blog } from "../index";
function SinglePageComponent() {
  //   let { page } = useParams();
  // const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  // const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  // const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  // const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  // const [docLoaded, setDocLoaded] = useState(false);
  // const pathname = usePathname();
  // doc loaded
  // useEffect(() => {
  //   setDocLoaded(true);
  // }, []);

  // function scrollToPage({ target }: any) {
  //   //giving 0
  //   console.log("scrolling");
  //   let scrollDestination = 0;
  //   let id = target.id;
  //   switch (id) {
  //     case "0":
  //     case "b0":
  //       scrollDestination = homesectionTopPixel;

  //       break;
  //     case "1":
  //     case "b1":
  //       scrollDestination = aboutmesectionTopPixel;

  //       break;
  //     case "2":
  //     case "b2":
  //       scrollDestination = projectssectionTopPixel;

  //       break;
  //     case "3":
  //     case "b3":
  //       scrollDestination = blogsectionTopPixel;

  //       break;

  //     default:
  //       break;
  //   }
  //   window.scrollTo({
  //     top: scrollDestination,
  //   });
  //   removeBurgerMenu();
  // }

  // //remove burger menu
  // function removeBurgerMenu() {
  //   const burgerMenu = document.querySelector(".burgerlinks");
  //   burgerMenu?.classList.remove("showBurgerMenu");
  //   const body = document.querySelector("body");
  //   if (body) {
  //     body.style.overflowY = "auto";
  //   }
  // }
  // useEffect(() => {

  //   if (docLoaded) {
  //     window.scrollTo({
  //       top: 0,
  //     });
  // const homeElement: any = document.getElementById("home");
  // const aboutmeElement: any = document.getElementById("aboutme");
  // const projectsElement: any = document.getElementById("projects");
  // const blogElement: any = document.getElementById("blog");
  // const singlePageComponent: any = document.querySelector(
  //   ".singlepagecomponent"
  // );
  // const eachlinks = document.querySelectorAll(".eachlink");
  // //home page
  // if (homeElement && aboutmeElement && projectsElement && blogElement) {
  //   const homeTop: any =
  //     homeElement.getBoundingClientRect().top + window.scrollY;
  //   const aboutmeTop: any =
  //     aboutmeElement.getBoundingClientRect().top + window.scrollY;
  //   const projectsTop: any =
  //     projectsElement.getBoundingClientRect().top + window.scrollY;
  //   const blogsTop: any =
  //     blogElement.getBoundingClientRect().top + window.scrollY;

  //   setHomeSectionTopPixel(homeTop - 73);
  //   setAboutmeSectionTopPixel(aboutmeTop - 73);
  //   setProjectsSectionTopPixel(projectsTop - 73);
  //   setBlogSectionTopPixel(blogsTop - 73);
  // }
  // // blog page
  // else {
  // }

  // eachlinks.forEach((link) => {
  //   link.addEventListener("click", scrollToPage);
  // });
  // singlePageComponent.addEventListener("click", removeBurgerMenu);

  // return () => {
  //   // const eachlinks = document.querySelectorAll(".eachlink");
  //   eachlinks.forEach((link) => {
  //     link.removeEventListener("click", scrollToPage); // Clean up listeners
  //   });
  //   singlePageComponent.removeEventListener("click", removeBurgerMenu);
  // };
  // }
  // }, [docLoaded, aboutmesectionTopPixel, pathname]);

  return (
    <div className="singlepagecomponent">
      <Home />
      <AboutMe />
      <Projects />
      <Blogs />
    </div>
  );
}

export default SinglePageComponent;
