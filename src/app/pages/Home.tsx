import React from "react";
import "@/css/home.css";
import Image from "next/image";
import profile from "@/images/profile.jpg";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[90vh] flex justify-center items-center overflow-hidden mt-[10vh]"
      >
        <div
          id="intro-pic"
          className="intro-pic flex flex-col items-center justify-center md:flex-row"
        >
          <div
            id="pic"
            className="pic flex-1 flex justify-center items-center flex-col relative"
          >
            <div className="socials">
              <div className="instagram social-icon">
                <a
                  href="https://www.instagram.com/cyruz_maharjan/"
                  target="_blank"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-instagram-line"></i>
                  </div>
                  <p className="ml-2">Instagram</p>
                </a>
              </div>
              <div className="linkedin social-icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/cyrus-maharjan-1540aa2aa/"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </div>
                  <p className="ml-5">Linkedin</p>
                </a>
              </div>
              <div className="github social-icon">
                <a
                  href="https://github.com/cyruu"
                  target="_blank"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-github-fill"></i>
                  </div>
                  <p className="ml-5">Github</p>
                </a>
              </div>

              <div className="youtube social-icon">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCmI2DPvG2eHIjAtl0Yk3XEQ"
                  className="social-content"
                >
                  <div className="icon">
                    <i className="ri-youtube-fill"></i>
                  </div>
                  <p className="ml-2">Youtube</p>
                </a>
              </div>
            </div>
            <div className="image h-[310px] rounded-full overflow-hidden w-[310px] mb-8 md:h-[390px] md:w-[390px]">
              <Image
                src={profile}
                className="w-full h-full "
                alt="profile-image"
              />
            </div>
            <div className="under hidden relative md:flex">
              <div className="underline absolute left-[-55px] top-[20px] h-0.5 w-[250px] z-[-5]"></div>
              <p className="mt-2 bg-white px-2">Web Developer</p>
            </div>
          </div>
          <div id="intro" className="intro flex justify-center items-center">
            <p className="hello text-2xl md:text-3xl">
              <span className="secondname mr-2">हेलो !</span>I'm
            </p>
            <p className="name text-5xl mt-2 mb-4 md:text-7xl md:my-4">
              Cyrus<span className="lastname ml-5">Maharjan</span>
            </p>

            <p className="small text-xs">
              Student at the moment. Always willing to aquire new skills.
              Extremely delighted to share my portfolio with you.
            </p>
            <div className="buttons flex">
              <a href="#projects" className="button text-md">
                <span>My Projects</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;