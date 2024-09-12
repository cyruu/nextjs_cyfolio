// import React, { useEffect, useState } from "react";
"use client";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/css/burger.css";
import Image from "next/image";
import lgwhite from "@/images/lg_white.png";
import CyShop from "./CyShop";
import { useRouter } from "next/navigation";
function Navbar() {
  // dont show new initially
  const [visited, setVisited] = useState(true);
  const router = useRouter();
  function cyshopclick() {
    setVisited(true);
    if (!visited) {
      const date = new Date();
      const currentDate = date.toISOString();
      localStorage.setItem("visitedDate", currentDate);
      router.push("/");
    } else {
      console.log("visited no need to update");
    }
  }
  function toggleBurgerMenu() {
    // setVisited(true);
    const burgerMenu = document.querySelector(".burgerlinks");
    const body = document.querySelector("body");
    burgerMenu?.classList.toggle("showBurgerMenu");
    if (burgerMenu?.classList.contains("showBurgerMenu")) {
      if (body) {
        body.style.overflowY = "hidden";
      }
    } else {
      if (body) {
        body.style.overflowY = "auto";
      }
    }
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
        // console.log(scrolled + " " + (homeTop + 370));

        if (scrolled >= 0 && scrolled < homeTop + 370) {
          console.log("home");
          if (activeLine) {
            activeLine.style.transform = "translateX(0%)";
          }
        } else if (scrolled >= homeTop + 370 && scrolled < aboutmeTop + 370) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${1 * 130}%)`;
          }
          // console.log("about");
        } else if (
          scrolled >= aboutmeTop + 370 &&
          scrolled < projectsTop + 370
        ) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${2 * 130}%)`;
          }
          // console.log("projects");
        } else if (scrolled > projectsTop + 370) {
          if (activeLine) {
            activeLine.style.transform = `translateX(${3 * 130}%)`;
          }
          // console.log("blogs");
        }
        // change navbar scroll color in medium screen

        if (window.innerWidth > 640) {
          const navbar: any = document.getElementById("navbar");
          const logo: any = document.querySelector(".logo");
          const eachLink: any = document.querySelectorAll(".eachlink");
          const shopLink: any = document.getElementById("shoplink");

          if (navbar) {
            // console.log(window.scrollY);
            // change bg colors if scroll > 150px
            // set dark bg
            if (window.scrollY > 150) {
              navbar.style.background = "rgb(45, 45, 45)";
              if (logo && eachLink && shopLink && activeLine) {
                logo.style.color = "white";
                eachLink.forEach((link: any) => {
                  link.style.color = "white";
                });
                shopLink.style.color = "white";
                activeLine.style.background = "white";
                navbar.style.boxShadow = "3px 3px 4px rgba(0,0,0,.2)";
              }
            }
            // set light bg
            else {
              navbar.style.background = "rgb(255, 255, 255)";

              if (logo && eachLink && shopLink && activeLine) {
                logo.style.color = "rgb(45, 45, 45)";
                eachLink.forEach((link: any) => {
                  link.style.color = "rgb(45, 45, 45)";
                });
                shopLink.style.color = "rgb(45, 45, 45)";
                activeLine.style.background = "rgb(45,45,45";
                navbar.style.boxShadow = "none";
              }
            }
          }
        }
      });
    }

    // handle visited from localstorage
    const visitedDateLocalStorage = localStorage.getItem("visitedDate");
    // visitedDate not found in localStorage -> (not visited)
    if (!visitedDateLocalStorage) {
      setVisited(false);
      console.log("visitedDate not found in localStorage");
    } else {
      const visitedDate = new Date(visitedDateLocalStorage).getTime();
      const currentDate = new Date().getTime();
      const passedMiliseconds = currentDate - visitedDate;
      // set not visited again
      // console.log(passedMiliseconds);
      if (passedMiliseconds > 15 * 1000) {
        setVisited(false);
      } else {
        setVisited(true);
      }
    }
  }, []);
  return (
    <>
      <nav
        id="navbar"
        className="navbar top-0 z-20 sticky text-white bg-[rgb(45,45,45)] w-full flex justify-between items-center h-[10vh] px-8 transition-all duration-200 ease-out md:px-24 md:bg-white md:text-black"
      >
        <div className="burgermenu block md:hidden">
          <div className="burgerlinks h-[90vh] w-[80%] bg-[rgb(45,45,45)] fixed top-0 left-full mt-[10vh] flex flex-col justify-center items-center transition-all duration-400 ease-in">
            <button
              id="b0"
              className="eachlink burgereachlink py-2"
              //   onClick={navLinkClick}
            >
              Home
            </button>
            <button
              id="b1"
              className="eachlink  burgereachlink py-2"
              //   onClick={navLinkClick}
            >
              About Me
            </button>
            <button
              id="b2"
              className="eachlink burgereachlink  py-2"
              //   onClick={navLinkClick}
            >
              Projects
            </button>
            <button
              id="b3"
              className="eachlink burgereachlink py-2"
              //   onClick={navLinkClick}
            >
              My Blog
            </button>
            <button
              id="b3"
              className="eachlink burgereachlink py-2"
              onClick={cyshopclick}
              //   onClick={navLinkClick}
            >
              <CyShop visited={visited} />
            </button>

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
          className="burgericon block z-100  relative sm:hidden"
          onClick={toggleBurgerMenu}
        >
          {!visited ? (
            <span className="h-3 w-3 bg-red-600 absolute right-[-4px] rounded-full"></span>
          ) : (
            ""
          )}

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
          {/* <button className=""> */}
          <button
            onClick={cyshopclick}
            className="text-[rgb(45,45,45)]"
            id="shoplink"
          >
            <CyShop visited={visited} />
          </button>
          {/* </button>  */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
