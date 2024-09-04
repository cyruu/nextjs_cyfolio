// import React, { useEffect, useState } from "react";
"use client";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import Link from "next/link";
import { useEffect } from "react";
import "@/css/burger.css";
function Navbar() {
  //   const { pathname } = useLocation();
  //   const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  //   const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  //   const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  //   const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  //   // suru bata nai ako ho ki haina /blog bata /blog/blogid ho ki hiana
  //   const [cameFromSinglePage, setCameFromSinglePage] = useState(false);
  //   const calcSlidePixel = (offsetIndex) => {
  //     let fixedPixel = 130;
  //     let slidePixel = offsetIndex * fixedPixel;
  //     return slidePixel;
  //   };

  // reset navbar scroll and click

  // for scroll
  //   useEffect(() => {
  //     if (
  //       pathname == "/" ||
  //       pathname == "/home" ||
  //       pathname == "/aboutme" ||
  //       pathname == "/projects" ||
  //       pathname == "/blog"
  //     ) {
  //       setCameFromSinglePage(true);
  //       const homeSection =
  //         document.getElementById("home").getBoundingClientRect().top - 75;
  //       const projectsSection =
  //         document.getElementById("projects").getBoundingClientRect().top - 75;
  //       const aboutmeSection =
  //         document.getElementById("aboutme").getBoundingClientRect().top - 75;
  //       const blogSection =
  //         document.getElementById("blog").getBoundingClientRect().top - 75;
  //       setHomeSectionTopPixel(homeSection);
  //       setAboutmeSectionTopPixel(aboutmeSection);
  //       setProjectsSectionTopPixel(projectsSection);
  //       setBlogSectionTopPixel(blogSection);
  //       //endnfor scroll
  //       const activeLine = document.getElementById("activeline");
  //       const navBarHeight = 73.75 + 250;
  //       const homeEndPixel =
  //         document.getElementById("home").getBoundingClientRect().bottom -
  //         navBarHeight;
  //       const aboutmeEndPixel =
  //         document.getElementById("aboutme").getBoundingClientRect().bottom -
  //         navBarHeight;
  //       const projectsEndPixel =
  //         document.getElementById("projects").getBoundingClientRect().bottom -
  //         navBarHeight;
  //       const blogEndPixel =
  //         document.getElementById("blog").getBoundingClientRect().bottom -
  //         navBarHeight;
  //       window.addEventListener("scroll", () => {
  //         let currentScrollPoint = window.scrollY;
  //         // reach home page
  //         if (currentScrollPoint < homeEndPixel) {
  //           let offsetIndex = 0;
  //           activeLine.style.transform = `translateX(${calcSlidePixel(
  //             offsetIndex
  //           )}px)`;
  //         }
  //         // reach about me page
  //         else if (
  //           currentScrollPoint > homeEndPixel &&
  //           currentScrollPoint < aboutmeEndPixel
  //         ) {
  //           let offsetIndex = 1;
  //           activeLine.style.transform = `translateX(${calcSlidePixel(
  //             offsetIndex
  //           )}px)`;
  //         }
  //         // reach projects page
  //         else if (
  //           currentScrollPoint > aboutmeEndPixel &&
  //           currentScrollPoint < projectsEndPixel
  //         ) {
  //           let offsetIndex = 2;
  //           activeLine.style.transform = `translateX(${calcSlidePixel(
  //             offsetIndex
  //           )}px)`;
  //         }
  //         // reach blog page
  //         else if (
  //           currentScrollPoint > projectsEndPixel &&
  //           currentScrollPoint < blogEndPixel
  //         ) {
  //           let offsetIndex = 3;
  //           activeLine.style.transform = `translateX(${calcSlidePixel(
  //             offsetIndex
  //           )}px)`;
  //         }
  //       });
  //       //burger
  //       const home = document.getElementById("home");
  //       const aboutme = document.getElementById("aboutme");
  //       const projects = document.getElementById("projects");
  //       const blog = document.getElementById("blog");
  //       const burgerIcon = document.getElementById("burgericon");
  //       const burgerMenu = document.querySelector(".burgermenu");

  //       function showBurgerMenu() {
  //         burgerMenu.classList.toggle("show");
  //         if (burgerMenu.classList.contains("show")) {
  //           document.documentElement.style.overflow = "hidden";
  //         } else {
  //           document.documentElement.style.overflow = "auto";
  //         }
  //       }
  //       burgerIcon.addEventListener("click", showBurgerMenu);
  //       // burgerIcon.addEventListener("blur", () => {
  //       //   document.body.classList.remove("noscroll");
  //       //   burgerMenu.classList.remove("show");
  //       // });
  //       function removeBurgerMenu() {
  //         document.documentElement.style.overflow = "auto";
  //         burgerMenu.classList.remove("show");
  //       }
  //       // on blur hatayera particular section lai click garda burgermenu hatne
  //       home.addEventListener("click", () => {
  //         removeBurgerMenu();
  //       });
  //       aboutme.addEventListener("click", () => {
  //         removeBurgerMenu();
  //       });
  //       projects.addEventListener("click", () => {
  //         removeBurgerMenu();
  //       });
  //       blog.addEventListener("click", () => {
  //         removeBurgerMenu();
  //       });
  //       // harek menu lai thickda ni burgermenu hatna paryo
  //       const burgerLinks = document.querySelectorAll(".burgerlink");
  //       burgerLinks.forEach((burgerLink) => {
  //         burgerLink.addEventListener("click", () => {
  //           removeBurgerMenu();
  //         });
  //       });
  //       return () => {
  //         burgerIcon.removeEventListener("click", showBurgerMenu);
  //         home.removeEventListener("click", removeBurgerMenu);
  //         aboutme.removeEventListener("click", removeBurgerMenu);
  //         projects.removeEventListener("click", removeBurgerMenu);
  //         blog.removeEventListener("click", removeBurgerMenu);
  //       };
  //     }
  //   }, [pathname]);
  // for path /blog/blogid

  //   useEffect(() => {
  //     if (
  //       pathname != "/" &&
  //       pathname != "/home" &&
  //       pathname != "/aboutme" &&
  //       pathname != "/projects" &&
  //       pathname != "/blog"
  //     ) {
  //       const burgerIcon = document.getElementById("burgericon");
  //       const burgerMenu = document.querySelector(".burgermenu");
  //       function showBurgerMenu() {
  //         burgerMenu.classList.toggle("show");
  //         document.body.classList.toggle("noscroll");
  //       }
  //       burgerIcon.addEventListener("click", showBurgerMenu);

  //       // harek menu lai thickda ni burgermenu hatna paryo
  //       const burgerLinks = document.querySelectorAll(".burgerlink");
  //       burgerLinks.forEach((burgerLink) => {
  //         burgerLink.addEventListener("click", () => {
  //           removeBurgerMenu();
  //         });
  //       });

  //       const singleBlogContainer = document.getElementById(
  //         "singleBlogContainer"
  //       );

  //       function removeBurgerMenu() {
  //         document.body.classList.remove("noscroll");
  //         burgerMenu.classList.remove("show");
  //       }
  //       // on blur hatayera particular section(singleBlogContainer) lai click garda burgermenu hatne
  //       singleBlogContainer.addEventListener("click", () => {
  //         removeBurgerMenu();
  //       });
  //       return () => {
  //         burgerIcon.removeEventListener("click", showBurgerMenu);
  //         // home.removeEventListener("click");
  //         // aboutme.removeEventListener("click");
  //         // projects.removeEventListener("click");
  //         // blog.removeEventListener("click");
  //       };
  //       // harek menu lai thickda ni burgermenu hatna paryo
  //     }
  //   }, [pathname]);
  // in link click
  //   const navLinkClick = (e) => {
  //     const activeLine = document.getElementById("activeline");
  //     activeLine.style.transition = "none";
  //     activeLine.style.opacity = 0;
  //     let offsetIndex = Number(e.target.id);
  //     const fixedPixel = 133;
  //     let slidePixel = offsetIndex * fixedPixel;
  //     activeLine.style.transform = `translateX(${slidePixel}px)`;
  //     setTimeout(() => {
  //       activeLine.style.transition = "all .25s linear";
  //       activeLine.style.opacity = 1;
  //     }, 560);
  //     // scoll animation in nav link click
  //     // singlepage component bata scroll hatayera yeta haleko
  //     let scrollPixel = 0;
  //     let navLinkId = e.target.id;

  //     if (navLinkId == "0") {
  //       scrollPixel = homesectionTopPixel;
  //     } else if (navLinkId == "1") {
  //       scrollPixel = aboutmesectionTopPixel;
  //     } else if (navLinkId == "2") {
  //       scrollPixel = projectssectionTopPixel;
  //     } else if (navLinkId == "3") {
  //       scrollPixel = blogsectionTopPixel;
  //     }

  //     window.scrollTo({
  //       top: scrollPixel,
  //     });
  //   };
  function toggleBurgerMenu() {
    const burgerMenu = document.querySelector(".burgerlinks");
    burgerMenu?.classList.toggle("showBurgerMenu");
  }
  useEffect(() => {}, []);
  return (
    <>
      <nav
        id="navbar"
        className="navbar fixed top-0 z-10 text-white bg-[rgb(45,45,45)] w-full flex justify-between items-center h-[10vh] px-8 transition-all duration-200 ease-out md:px-24 md:bg-white md:text-black"
      >
        <div className="burgermenu ">
          <div className="burgerlinks h-[90vh] w-[80%] bg-[rgb(45,45,45)] fixed top-0 left-full mt-[10.1vh] flex flex-col justify-center items-center transition-all duration-400 ease-in">
            <Link
              href="/home"
              id="b0"
              className="burgerlink"
              //   onClick={navLinkClick}
            >
              Home
            </Link>
            <Link
              href="/aboutme"
              id="b1"
              className="burgerlink"
              //   onClick={navLinkClick}
            >
              About Me
            </Link>
            <Link
              href="/projects"
              id="b2"
              className="burgerlink"
              //   onClick={navLinkClick}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              id="b3"
              className="burgerlink"
              //   onClick={navLinkClick}
            >
              My Blog
            </Link>
            <div className="burgersocials mt-20">
              <a
                target="_blank"
                href="https://www.instagram.com/cyruz_maharjan/"
                className="burgersocialicon"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/cyrus-maharjan-1540aa2aa/"
                className="burgersocialicon"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/cyruu"
                className="burgersocialicon"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCmI2DPvG2eHIjAtl0Yk3XEQ"
                className="burgersocialicon"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>
        <Link href="/" className="">
          <span className="logo text-3xl">Cyfolio</span>
        </Link>
        {/* burger menu button */}
        <button
          id="burgericon"
          className="burgericon block z-100 sm:hidden"
          onClick={toggleBurgerMenu}
        >
          <i className="ri-menu-line text-2xl burgerremixicon"></i>
        </button>
        {/* main links */}
        <div className="links hidden h-full relative md:flex md:text-md ">
          <span
            id="activeline"
            className="absolute h-[4px] w-[100px] rounded-sm bottom-0 bg-[rgb(45,45,45)]"
          ></span>
          <Link href="/" id="0" className="eachlink">
            Home <span className="line"></span>
          </Link>
          <Link href="/aboutme" id="1" className="eachlink">
            About Me <span className="line"></span>
          </Link>
          <Link href="/projects" id="2" className="eachlink">
            Projects <span className="line"></span>
          </Link>
          <Link href="/blog" id="3" className="eachlink">
            My Blog <span className="line"></span>
            <span id="blogline"></span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
