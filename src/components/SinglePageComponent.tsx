import { Home, AboutMe, Blogs, Projects } from "@/index.js";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import { Home, AboutMe, Projects, Blog } from "../index";
function SinglePageComponent() {
  //   let { page } = useParams();
  //   const [homesectionTopPixel, setHomeSectionTopPixel] = useState(0);
  //   const [aboutmesectionTopPixel, setAboutmeSectionTopPixel] = useState(0);
  //   const [projectssectionTopPixel, setProjectsSectionTopPixel] = useState(0);
  //   const [blogsectionTopPixel, setBlogSectionTopPixel] = useState(0);
  // animation bug

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Blogs />
    </>
  );
}

export default SinglePageComponent;
