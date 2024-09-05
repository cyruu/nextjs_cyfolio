// import React, { useEffect, useState } from "react";
"use client";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import Link from "next/link";
import { useEffect } from "react";
import "@/css/burger.css";
function Navbar() {
  function toggleBurgerMenu() {
    const burgerMenu = document.querySelector(".burgerlinks");
    burgerMenu?.classList.toggle("showBurgerMenu");
  }
  useEffect(() => {
    const activeLine = document.getElementById("activeline");
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

      window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        console.log(scrolled + " " + (homeTop + 370));

        if (scrolled >= 0 && scrolled < homeTop + 370) {
          console.log("home");
          if (activeLine) {
            activeLine.style.transform = "translateX(0%)";
          }
        } else if (scrolled >= homeTop + 370 && scrolled < aboutmeTop + 370) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${1 * 130}%)`;
          }
          console.log("about");
        } else if (
          scrolled >= aboutmeTop + 370 &&
          scrolled < projectsTop + 370
        ) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${2 * 130}%)`;
          }
          console.log("projects");
        } else if (scrolled > projectsTop + 370) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${3 * 130}%)`;
          }
          console.log("blogs");
        }
      });
    }
  }, []);
  return (
    <>
      <nav
        id="navbar"
        className="navbar fixed top-0 z-10 text-white bg-[rgb(45,45,45)] w-full flex justify-between items-center h-[10vh] px-8 transition-all duration-200 ease-out md:px-24 md:bg-white md:text-black"
      >
        <div className="burgermenu block md:hidden">
          <div className="burgerlinks h-[90vh] w-[80%] bg-[rgb(45,45,45)] fixed top-0 left-full mt-[10vh] flex flex-col justify-center items-center transition-all duration-400 ease-in">
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
          <span className="logo text-3xl ">Cyfolio</span>
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
            className="absolute h-[4px] w-[100px] rounded-sm bottom-0 bg-[rgb(45,45,45)] transition-all duration-200 ease-in"
          ></span>
          <button id="0" className="eachlink">
            Home <span className="line"></span>
          </button>
          <button id="1" className="eachlink">
            About Me <span className="line"></span>
          </button>
          <button id="2" className="eachlink">
            Projects <span className="line"></span>
          </button>
          <button id="3" className="eachlink">
            My Blog <span className="line"></span>
            <span id="blogline"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
