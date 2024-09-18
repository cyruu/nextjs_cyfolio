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
import { usePathname } from "next/navigation";
function Navbar() {
  // dont show new initially
  const [visited, setVisited] = useState(true);
  const [docLoaded, setDocLoaded] = useState(false);
  const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  function cyshopclick() {
    setVisited(true);
    if (!visited) {
      const date = new Date();
      const currentDate = date.toISOString();
      localStorage.setItem("visitedDate", currentDate);
    } else {
      console.log("visited no need to update");
    }
    router.push("/cyshop");
  }
  function gotoHomeRoute() {
    router.push("/");
  }
  function scrollToPage({ target }: any) {
    //giving 0
    console.log("scrolling");
    let scrollDestination = 0;
    let id = target.id;
    switch (id) {
      case "0":
      case "b0":
        scrollDestination = homesectionTopPixel;

        break;
      case "1":
      case "b1":
        scrollDestination = aboutmesectionTopPixel;

        break;
      case "2":
      case "b2":
        scrollDestination = projectssectionTopPixel;

        break;
      case "3":
      case "b3":
        scrollDestination = blogsectionTopPixel;

        break;

      default:
        break;
    }
    window.scrollTo({
      top: scrollDestination,
    });
    removeBurgerMenu();
  }
  //remove burger menu
  function removeBurgerMenu() {
    const burgerMenu = document.querySelector(".burgerlinks");
    burgerMenu?.classList.remove("showBurgerMenu");
    const body = document.querySelector("body");
    if (body) {
      body.style.overflowY = "auto";
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
    window.scrollTo({
      top: 0,
    });
    const activeLine = document.getElementById("activeline");
    const homeElement: any = document.getElementById("home");
    const aboutmeElement: any = document.getElementById("aboutme");
    const projectsElement: any = document.getElementById("projects");
    const blogElement: any = document.getElementById("blog");
    const eachlinks = document.querySelectorAll(".eachlink");
    const singlePageComponent: any = document.querySelector(
      ".singlepagecomponent"
    );
    // no home element in single blog site
    // home page reload
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
      });
      // scroll event end
    } // if in home page end
    // change navbar scroll color in medium screen

    if (window.innerWidth > 640) {
      const navbar: any = document.getElementById("navbar");
      const logo: any = document.querySelector(".logo");
      const eachLink: any = document.querySelectorAll(".eachlink");
      const lines: any = document.querySelectorAll(".line");
      const shopLink: any = document.getElementById("shoplink");
      window.addEventListener("scroll", () => {
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
              lines.forEach((line: any) => {
                line.style.background = "white";
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
              lines.forEach((line: any) => {
                line.style.background = "rgb(45,45,45)";
              });
              shopLink.style.color = "rgb(45, 45, 45)";
              activeLine.style.background = "rgb(45,45,45";
              navbar.style.boxShadow = "none";
            }
          }
        }
      });
    }
    eachlinks.forEach((link) => {
      link.addEventListener("click", scrollToPage);
    });
    // add remove button burger if in home page
    if (singlePageComponent) {
      singlePageComponent.addEventListener("click", removeBurgerMenu);
    }
    // remove logo on logo click
    const logo: any = document.querySelector(".logobutton");
    logo.addEventListener("click", removeBurgerMenu);
    // if in blog page
    // dont show about me, projects menu and active line in
    const homeMenu: any = document.getElementById("0");
    const aboutMeMenu: any = document.getElementById("1");
    const projectsMenu: any = document.getElementById("2");
    const blogMenu: any = document.getElementById("3");
    const burgerhomeMenu: any = document.getElementById("b0");
    const burgeraboutMeMenu: any = document.getElementById("b1");
    const burgerprojectsMenu: any = document.getElementById("b2");
    const burgerblogMenu: any = document.getElementById("b3");
    const insideblogline: any = document.getElementById("insideblogline");
    const insidecyshopline: any = document.getElementById("insidecyshopline");
    const singleBlogContainer: any = document.querySelector(".singleblog");
    const cyshopcontainer: any = document.querySelector(".cyshopcontainer");
    // blogs page
    if (pathname.includes("/blogs/")) {
      aboutMeMenu.style.display = "none";
      projectsMenu.style.display = "none";
      //burger
      burgeraboutMeMenu.style.display = "none";
      burgerprojectsMenu.style.display = "none";
      insideblogline.style.display = "block";
      insidecyshopline.style.display = "none";
      if (activeLine) {
        activeLine.style.display = "none";
      }
      //removeburgermenu on click outside in blog page
      singleBlogContainer.addEventListener("click", removeBurgerMenu);

      homeMenu.addEventListener("click", gotoHomeRoute);
      burgerhomeMenu.addEventListener("click", gotoHomeRoute);
      blogMenu.removeEventListener("click", scrollToPage);
    }
    //home page
    else if (pathname == "/") {
      burgerhomeMenu.removeEventListener("click", gotoHomeRoute);
      homeMenu.removeEventListener("click", gotoHomeRoute);
      aboutMeMenu.style.display = "flex";
      projectsMenu.style.display = "flex";
      blogMenu.style.display = "flex";
      //burger
      burgeraboutMeMenu.style.display = "flex";
      burgerprojectsMenu.style.display = "flex";
      burgerblogMenu.style.display = "flex";

      insideblogline.style.display = "none";
      insidecyshopline.style.display = "none";
      if (activeLine) {
        activeLine.style.display = "block";
      }
    }
    // cyshop page
    else if (pathname == "/cyshop") {
      insidecyshopline.style.display = "flex";
      aboutMeMenu.style.display = "none";
      projectsMenu.style.display = "none";
      blogMenu.style.display = "none";
      //burger
      burgeraboutMeMenu.style.display = "none";
      burgerprojectsMenu.style.display = "none";
      burgerblogMenu.style.display = "none";
      if (activeLine) {
        activeLine.style.display = "none";
      }
      //removeburgermenu on click outside in shop page
      cyshopcontainer.addEventListener("click", removeBurgerMenu);
      homeMenu.addEventListener("click", gotoHomeRoute);
      burgerhomeMenu.addEventListener("click", gotoHomeRoute);
    }
    //clean up
    return () => {
      // const eachlinks = document.querySelectorAll(".eachlink");
      eachlinks.forEach((link) => {
        link.removeEventListener("click", scrollToPage); // Clean up listeners
      });
      if (singlePageComponent) {
        singlePageComponent.removeEventListener("click", removeBurgerMenu);
      }
      homeMenu.removeEventListener("click", gotoHomeRoute);
      burgerhomeMenu.removeEventListener("click", gotoHomeRoute);
      cyshopcontainer?.removeEventListener("click", removeBurgerMenu);
      singleBlogContainer?.removeEventListener("click", removeBurgerMenu);
      logo.removeEventListener("click", removeBurgerMenu);
    };
  }, [pathname, docLoaded, aboutmesectionTopPixel]);

  // local storage data
  useEffect(() => {
    setDocLoaded(true);
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
      if (passedMiliseconds > 1 * 1000) {
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
        className="navbar top-0 z-20 fixed text-white bg-[rgb(45,45,45)] w-full flex justify-between items-center h-[10vh] px-8 transition-all duration-200 ease-out md:px-24 md:bg-white md:text-black"
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
        <Link href="/" className="logobutton">
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
            className="absolute md:hidden h-[4px] w-[100px] rounded-sm bottom-0 bg-[rgb(45,45,45)] transition-all duration-200 ease-in"
          ></span>

          <button id="0" className="eachlink">
            Home <span className="line"></span>
          </button>

          <button id="1" className="eachlink">
            About Me <span className="line"></span>
          </button>
          <button id="2" className="eachlink">
            Projects<span className="line"></span>
          </button>
          <button id="3" className="eachlink ">
            My Blog <span className="line"></span>
            <span className="line"></span>
            <span id="insideblogline" className="line md:hidden"></span>
          </button>
          {/* <button className=""> */}
          <button
            onClick={cyshopclick}
            className="text-[rgb(45,45,45)] relative"
            id="shoplink"
          >
            <CyShop visited={visited} />
            <span id="insidecyshopline" className="line md:hidden"></span>
          </button>
          {/* </button>  */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
