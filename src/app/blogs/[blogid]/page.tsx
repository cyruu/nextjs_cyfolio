// "use client";
// import "@/css/singleblog.css";
// import React, { useState, useEffect } from "react";
// import { blogs } from "@/index";
// const EachBlog = ({ params }: any) => {
//   const blogId = params.blogid;
//   const [singleBlogObject, setSingleBlogObject] = useState({});

//   function handleCopyText(element: any) {
//     return function () {
//       element.style.opacity = 1;
//       setTimeout(() => {
//         element.style.opacity = 0;
//       }, 500);
//     };
//   }
//   function copyToClipboard(element: any) {
//     return function () {
//       let codeText = element.innerText;

//       navigator.clipboard.writeText(codeText);
//     };
//   }
//   function navScrollAnimation() {
//     // const blogline = document.getElementById("blogline");
//     // const activeLine = document.getElementById("activeline");
//     const navbar = document.getElementById("navbar");
//     const lines = document.querySelectorAll(".line");
//     let currentScrollPoint = window.scrollY;
//     let screenWidth = window.innerWidth;
//     if (screenWidth > 431) {
//       if (currentScrollPoint > 100) {
//         // change navbar color
//         navbar.style.backgroundColor = "rgb(45,45,45)";
//         navbar.style.color = "white";
//         // activeline.style.backgroundColor = "white";
//         lines.forEach((line) => {
//           line.style.backgroundColor = "white";
//         });
//         // blogline.style.backgroundColor = "white";
//         navbar.style.boxShadow = "3px 3px 3px rgba(0,0,0,0.2)";
//       } else {
//         navbar.style.backgroundColor = "white";
//         navbar.style.boxShadow = "none";
//         navbar.style.color = "black";
//         lines.forEach((line) => {
//           line.style.backgroundColor = "black";
//         });
//         // activeLine.style.backgroundColor = "black";
//         // blogline.style.backgroundColor = "black";
//       }
//     }
//   }
//   function initialScrollToTop() {
//     window.scrollTo(0, 0);
//   }
//   useEffect(() => {
//     //navbar scroll
//     // const blogline = document.getElementById("blogline");
//     // blogline.style.display = "block";
//     // // const activeLine = document.getElementById("activeline");
//     // activeLine.style.display = "none";

//     // // const activeline = document.getElementById("activeline");
//     // activeline.style.transform = "translateX(390px)";
//     const navbar = document.getElementById("navbar");
//     if (navbar) {
//       navbar.style.position = "fixed";
//       navbar.style.top = "0px";
//     }
//     window.addEventListener("scroll", navScrollAnimation);
//     initialScrollToTop();

//     const blog = blogs.filter((blog) => blog.id == blogId);
//     setSingleBlogObject(blog[0]);
//     //buttons
//     const copycss = document.getElementById("copycss");
//     const copyhtml = document.getElementById("copyhtml");
//     const copyjs = document.getElementById("copyjs");

//     //copied text
//     const htmlcopied = document.getElementById("htmlcopied");
//     const csscopied = document.getElementById("csscopied");
//     const jscopied = document.getElementById("jscopied");
//     copyhtml.addEventListener("click", handleCopyText(htmlcopied));
//     copycss.addEventListener("click", handleCopyText(csscopied));
//     copyjs.addEventListener("click", handleCopyText(jscopied));

//     var codeBlockHtml = document.getElementById("codeBlockHtml");
//     var codeBlocCss = document.getElementById("codeBlockCss");
//     var codeBlockJs = document.getElementById("codeBlockJs");

//     copyhtml.addEventListener("click", copyToClipboard(codeBlockHtml));
//     copycss.addEventListener("click", copyToClipboard(codeBlocCss));
//     copyjs.addEventListener("click", copyToClipboard(codeBlockJs));

//     return () => {
//       copyhtml.removeEventListener("click", handleCopyText(htmlcopied));
//       copycss.removeEventListener("click", handleCopyText(csscopied));
//       copyjs.removeEventListener("click", handleCopyText(jscopied));
//       copyhtml.removeEventListener("click", copyToClipboard(codeBlockHtml));
//       copycss.removeEventListener("click", copyToClipboard(codeBlocCss));
//       copyjs.removeEventListener("click", copyToClipboard(codeBlockJs));
//       window.removeEventListener("scroll", navScrollAnimation);
//     };
//   }, []);

//   return (
//     <div id="singleBlogContainer">
//       <div className="blogContainer">
//         <p className="blogtitle">{singleBlogObject.title}</p>
//         <p className="singleblogdate">
//           {singleBlogObject.date} &nbsp; -Cyrus Maharjan
//         </p>
//         <p className="introduction">{singleBlogObject.firstIntroduction}</p>
//         {/* ytvideo */}
//         <div
//           className={`ytvideo ${singleBlogObject.ytLink ? "" : "displaynone"}`}
//         >
//           {/* <iframe
//             src={singleBlogObject.ytLink}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe> */}
//         </div>
//         {/* if no yt display thubnail */}
//         <div
//           className={`thumbnail ${
//             singleBlogObject.ytLink ? "displaynone" : ""
//           }`}
//         >
//           <img
//             src={singleBlogObject.image}
//             style={{ height: "100%", width: "100%" }}
//           />
//         </div>
//         <p
//           className={`indexhtml ${
//             singleBlogObject.indexHtml ? "" : "displaynone"
//           } `}
//         >
//           Code for <span className="bold">index.html</span>
//           <button id="copyhtml" title="copy">
//             {/* <i class="fa-regular fa-copy"></i> */}
//             <i className="fa-regular fa-copy"></i>
//             <p id="htmlcopied">copied</p>
//           </button>
//         </p>
//         <div
//           className={`codeSection ${
//             singleBlogObject.indexHtml ? "" : "displaynone"
//           }`}
//         >
//           {/* <SyntaxHighlighter
//             language="javascript"
//             style={atomOneDark}
//             id="codeBlockHtml"
//             customStyle={{
//               width: "80%",
//               maxHeight: "500px",
//               fontSize: ".7rem",
//             }}
//           >
//             {singleBlogObject.indexHtml}
//           </SyntaxHighlighter> */}
//         </div>
//         {/* css */}
//         <p className={`stylecss ${singleBlogObject.css ? "" : "displaynone"}`}>
//           Code for <span className="bold">style.css</span>
//           <button id="copycss" title="copy">
//             {/* <i class="fa-regular fa-copy"></i> */}
//             <i className="fa-regular fa-copy"></i>
//             <p id="csscopied">copied</p>
//           </button>
//         </p>
//         <div
//           className={`codeSection ${singleBlogObject.css ? "" : "displaynone"}`}
//         >
//           {/* <SyntaxHighlighter
//                 language="css"
//                 style={atomOneDark}
//                 customStyle={{
//                 width: "80%",
//                 maxHeight: "500px",
//                 fontSize: ".7rem",
//                 }}
//                 id="codeBlockCss"
//             >
//                 {singleBlogObject.css}
//             </SyntaxHighlighter> */}
//         </div>
//         {/* js */}

//         <p className={`scriptjs ${singleBlogObject.js ? "" : "displaynone"}`}>
//           Code for <span className="bold">script.js</span>
//           <button id="copyjs" title="copy">
//             {/* <i class="fa-regular fa-copy"></i> */}
//             <i className="fa-regular fa-copy"></i>
//             <p id="jscopied">copied</p>
//           </button>
//         </p>
//         <div
//           className={`codeSection ${singleBlogObject.js ? "" : "displaynone"}`}
//         >
//           {/* <SyntaxHighlighter
//             language="javascript"
//             style={atomOneDark}
//             customStyle={{
//               width: "80%",
//               maxHeight: "500px",
//               fontSize: ".7rem",
//             }}
//             id="codeBlockJs"
//           >
//             {singleBlogObject.js}
//           </SyntaxHighlighter> */}
//         </div>
//       </div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptates
//         quisquam a quod nisi! Error laudantium magni commodi. Reiciendis ipsum
//         illo, enim culpa magni incidunt, hic iste obcaecati quia esse rem
//         architecto ratione sunt consequuntur, nulla libero cupiditate modi
//         distinctio eius nesciunt id! Minima expedita cum non eum magni dolore,
//         aut vero adipisci soluta enim molestias odit quis distinctio. Odio
//         aperiam est quod quam tempora saepe ab placeat deleniti blanditiis magni
//         optio reprehenderit adipisci, sequi, illum doloribus beatae temporibus
//         veniam soluta! Esse impedit ex odit obcaecati aspernatur maiores nemo
//         qui eveniet debitis assumenda illum culpa nobis dolore error illo
//         voluptate adipisci commodi, soluta sit et harum veritatis? Alias sunt
//         natus facilis at reprehenderit, eos nihil consectetur! Perspiciatis sint
//         quia ipsum, dolor obcaecati esse reprehenderit ab quasi nemo cum
//         tempora! Laborum animi blanditiis qui vel magni dolore suscipit corrupti
//         tempora optio quisquam rem nam cupiditate ipsam asperiores tempore
//         delectus similique, quidem perspiciatis accusantium laboriosam maxime ut
//         porro. Earum impedit debitis voluptates nam praesentium. Beatae
//         dignissimos alias eum, ipsam, aperiam tempore itaque eaque deserunt
//         facere vero eveniet nobis in repellendus quasi reprehenderit, suscipit
//         odio voluptatibus tempora id porro rem nihil veritatis aliquam. Aliquid
//         rerum, quasi nihil reiciendis architecto maiores voluptate temporibus
//         totam. Officiis, doloribus? Nostrum facilis fugiat officia quo sequi?
//         Odio natus repellendus ratione quaerat temporibus facilis, vel odit
//         voluptate eum dolor excepturi deserunt. Accusamus magni suscipit sed nam
//         aspernatur libero delectus fugiat ipsa cupiditate possimus ea, nostrum
//         dolore consequatur, officiis fugit soluta illo eum veniam corrupti
//         quisquam mollitia rem sunt? Qui ratione odit molestias optio accusamus
//         eligendi nam, esse soluta fuga perspiciatis, explicabo quis autem error?
//         Atque, facere! Laboriosam corporis in, ab quia animi unde quaerat aut
//         dignissimos recusandae eius dicta eos cumque velit doloremque
//         repudiandae saepe architecto nesciunt. Quo impedit eos provident nulla
//         rem odio doloremque adipisci voluptas officiis iure facilis
//         necessitatibus perspiciatis natus quia pariatur dolorem qui voluptate
//         praesentium distinctio voluptates mollitia nobis, ea quae error! Quod
//         error dolorem labore voluptatibus perspiciatis magnam accusamus, velit
//         ducimus eaque, iure debitis, repellat ipsum qui cupiditate aperiam. Est
//         voluptate labore modi sit, itaque cumque deleniti dolor similique ipsum
//         atque soluta quo accusantium nulla. Unde repudiandae eum dolorem rem
//         officia dolorum maxime minima soluta molestias ea molestiae ipsum,
//         veniam recusandae! Modi quia maxime nam dicta hic? Quam nemo eaque
//         voluptas quia quisquam, rem reprehenderit fugit obcaecati assumenda
//         aliquam eos minima quae nulla similique quos, amet omnis mollitia,
//         excepturi fugiat? Quos nobis, error recusandae quisquam, incidunt facere
//         deleniti atque voluptate, dicta nisi harum ut? Soluta, a nam? Accusamus
//         adipisci soluta sed totam dolorum sint quos natus perferendis cum error
//         consectetur, voluptatibus eos aut labore! Possimus magni itaque
//         reiciendis incidunt atque perferendis placeat. Suscipit, qui maxime
//         molestiae eligendi possimus recusandae magnam, asperiores doloremque
//         quasi, dicta nulla. Doloribus dolorem quam libero laboriosam ex
//         doloremque facere voluptas quisquam, similique molestias excepturi aut
//         blanditiis ipsam inventore nostrum id repudiandae vitae sed. Repudiandae
//         suscipit quam dolorem dolor, pariatur tempore modi commodi sed sapiente
//         sunt culpa harum non numquam accusamus placeat, accusantium, voluptates
//         aspernatur vel tempora itaque. Voluptatem, autem inventore!
//       </p>
//     </div>
//   );
// };

// export default EachBlog;
import React from "react";

const SingleBlog = ({ params }: any) => {
  return (
    <div className="singleblog">
      <div className="mt-[10vh] min-h-[90vh]">{params.blogid}</div>
      <div className="mt-[10vh] min-h-[90vh]">{params.blogid}</div>
      <div className="mt-[10vh] min-h-[90vh]">{params.blogid}</div>
    </div>
  );
};

export default SingleBlog;
