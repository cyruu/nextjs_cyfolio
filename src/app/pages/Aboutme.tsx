// import React, { useEffect } from "react";
// import "../css/aboutme.css";
import Image from "next/image";
import js from "@/images/js.png";
import html from "../../images/html.png";
import mysql from "../../images/mysql.png";
import php from "../../images/phpimage.png";
import react from "../../images/react.png";
import redux from "../../images/redux.png";
import tailwind from "../../images/tailwind.png";
import css from "../../images/css.png";
import nextjs from "../../images/nextjs.png";
import expressjs from "../../images/expressjs.png";
import nodejs from "../../images/nodejs.png";
import mongodb from "../../images/mongodb.png";
import "@/css/aboutme.css";
// import CyrusResume from "@/resume/CyrusResume.pdf";
import Link from "next/link";
function AboutMe() {
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
  //   const aboutme = document.getElementById("aboutme");
  //   //observer for about me text
  //   const aboutmeTextObserver = new IntersectionObserver(
  //     function (entries, observer) {
  //       const aboutmeText = document.getElementById("abouttext");
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           aboutmeText.style.opacity = "1";
  //         } else {
  //           aboutmeText.style.opacity = "0";
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.45,
  //     }
  //   );
  // aboutmeTextObserver.observe(aboutme);
  // // about me paragraph observer
  // const aboutmeParaObserver = new IntersectionObserver(
  //   function (entries, observer) {
  //     const aboutPara = document.getElementById("aboutpara");
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         aboutPara.style.opacity = "1";
  //         aboutPara.style.transform = "translateX(0px)";
  //       } else {
  //         aboutPara.style.opacity = "0";
  //         aboutPara.style.transform = "translateX(-300px)";
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.75,
  //   }
  // );
  // aboutmeParaObserver.observe(aboutme);
  // about me skills observer
  //   const aboutmeskillsObserver = new IntersectionObserver(
  //     function (entries, observer) {
  //       const aboutSkills = document.getElementById("skillresume");
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           aboutSkills.style.opacity = "1";
  //           aboutSkills.style.transform = "translateX(0px)";
  //         } else {
  //           aboutSkills.style.opacity = "0";
  //           aboutSkills.style.transform = "translateX(300px)";
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.75,
  //     }
  //   );
  //   aboutmeskillsObserver.observe(aboutme);
  // }, []);
  return (
    <section
      id="aboutme"
      className="flex min-h-[90vh] justify-center flex-col items-center text-center"
    >
      <div
        id="who"
        className="flex mx-auto justify-center flex-col items-center w-[90%] md:w-[70%]"
      >
        {/* first */}
        <p
          id="abouttext"
          className="font-bold text-2xl mb-8 text-gray-600 transition-all duration-600 ease-out md:text-3xl"
        >
          Who am I?
        </p>
        {/* second */}
        <p id="aboutpara" className="text-xs md:text-sm">
          Hi, I&apos;m Cyrus Maharjan and this is my portfolio website. I&apos;m
          very passionate and enthusiastic on learning how web really works.
          I&apos;ve developed strong skills that allow me to build both
          front-end and back-end functionality in a web application.
          <br />
          <b>Excited to take on new challenging projects in this field."</b>
          <br />
          <br />
          <span className="themeColor">Here are some of my skills </span>
        </p>
      </div>
      {/* third */}
      <div
        id="skillresume"
        className="skill-resume flex flex-col transition-all duration-500 ease-out"
      >
        <div
          id="skills"
          className="my-6 mx-auto w-[95%] flex flex-wrap justify-center items-center md:w-[70%]"
        >
          <div className="skill">
            <Image src={js} alt="js" className="" />
          </div>
          <div className="skill">
            <Image src={react} alt="react" />
          </div>
          <div className="skill">
            <Image src={nextjs} alt="nextjs" className="h-full" />
          </div>
          <div className="skill">
            <Image src={mongodb} alt="mongodb" />
          </div>
          <div className="skill">
            <Image src={expressjs} alt="expressjs" />
          </div>
          <div className="skill">
            <Image src={redux} alt="redux" />
          </div>
          <div className="skill">
            <Image src={tailwind} alt="tailiwind" />
          </div>
          <div className="skill">
            <Image src={php} alt="php" />
          </div>
          <div className="skill">
            <Image src={mysql} alt="mysql" />
          </div>
          <div className="skill">
            <Image src={html} alt="html" />
          </div>
          <div className="skill">
            <Image src={css} alt="css" />
          </div>
        </div>
        <div className="resume flex flex-col mt-2">
          <p className="themeColor text-xs md:text-sm">
            Take a look at my Résumé
          </p>
          <Link
            href="/resume/CyrusResume.pdf"
            target="_blank"
            download="cyrusResume"
            className="button resumebutton mx-auto p-2 text-md"
          >
            Résumé
            <i className="ri-download-fill ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
