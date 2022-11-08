import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./Projects.scss";

import $ from "jquery";

import gsap from "gsap";

import Sass from "../longsvgs/Sass";
import Jquery from "../longsvgs/Jquery";
import Gsap from "../longsvgs/Gsap";
import Logo from "../longsvgs/Logo";
import Html from "../longsvgs/Html";
import AllProjectsOverlay from "./AllProjectsOverlay";
import LogoNoAnimation from "../longsvgs/LogoNoAnimation";

const PersonalWebsite = () => {
  const [show, setShow] = useState(false);

  const [showMeme, setShowMeme] = useState(false);

  const history = useNavigate();

  function fadeInAllProjects() {
    const a = document.getElementById("div1-content");
    const b = document.getElementById("div2-content");
    const c = document.getElementById("div3-content");

    a.classList.add("shadow-pj");
    b.classList.add("shadow-pj");
    c.classList.add("shadow-pj");

    gsap.fromTo(
      "#image1-allpj",
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.4,
      }
    );

    gsap.fromTo(
      "#close-button-allpj",
      { opacity: 0, y: "-100%" },
      {
        opacity: 1,
        y: 0,
        ease: "power1",
        duration: 0.4,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      "#div1-allpj",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.1,
        ease: "power1",
      }
    );

    gsap.fromTo(
      "#image2-allpj",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 0.3,
        ease: "power1",
      }
    );

    gsap.fromTo(
      "#div2-allpj",
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.4,
        delay: 0.5,
      }
    );

    gsap.fromTo(
      "#image3-allpj",
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.4,
        delay: 0.7,
      }
    );

    gsap.fromTo(
      "#div3-allpj",
      { opacity: 0, x: "100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.3,
        delay: 0.9,
      }
    );

    gsap.fromTo(
      "#image4-allpj",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: 1.1,
        ease: "power1",
      }
    );

    gsap.fromTo(
      "#div4-allpj",
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
        ease: "power1",
        duration: 0.4,
        delay: 1.3,
      }
    );
  }

  useEffect(() => {
    setTimeout(() => {
      $("#home-bullseye").removeClass("animation-fade-top");
      $("#all-projects-bullseye").removeClass("animation-fade-top");
      $("#logo-bullseye").removeClass("animation-fade-top");
      $("#remove1").removeClass("animation-fade-bot");
      $("#remove2").removeClass("animation-fade-bot");
      $("#remove3").removeClass("animation-fade-bot");
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "auto";
  }, []);
  return (
    <div>
      <AllProjectsOverlay show={show} setShow={setShow} />

      {/*start of main*/}
      <div
        style={{
          width: "100%",
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#031c27",
        }}
      >
        <LogoNoAnimation />
        <div
          style={{
            height: "12vh",
            width: "100%",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: 0,
          }}
          className="nav-projects"
        >
          <Logo />
          <div style={{ flexGrow: 1 }} />

          <div
            style={{ marginRight: "2vw", userSelect: "none" }}
            className="all-projects-p animation-fade-top"
            id="home-bullseye"
            onClick={() => history("/")}
          >
            Home
          </div>
          <div
            style={{ marginRight: "8vw", userSelect: "none" }}
            className="all-projects-p animation-fade-top"
            id="all-projects-bullseye"
            onClick={() => {
              setShow(true);
              document.body.style.overflow = "hidden";
              fadeInAllProjects();
            }}
          >
            All Projects
          </div>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontWeight: "600", color: "white" }}
            className="namefor-projects animation-fade-bot"
            id="remove3"
          >
            Personal Website
          </div>

          <div
            style={{ fontStyle: "italic", color: "white" }}
            className="desctop-forprojects animation-fade-bot"
            id="remove2"
          >
            For Yingson, designed and developed by Yingson
          </div>
        </div>
        <div style={{ flexGrow: 1 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignSelf: "flex-end",
            justifyContent: "center",
            marginBottom: "5vh",
          }}
          className="animation-fade-bot"
          id="remove1"
        >
          <div
            style={{ color: "#00BFFF", userSelect: "none" }}
            className="font-projects"
          >
            Role: <span style={{ color: "white" }}>Fullstack Developer</span>
          </div>

          <div
            style={{
              marginRight: "10vw",
              marginLeft: "10vw",
              color: "#00BFFF",
              userSelect: "none",
            }}
            className="font-projects"
          >
            Context:{" "}
            <span
              style={{
                color: "white",
                fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
              }}
            >
              Personal Project
            </span>
          </div>

          <div
            style={{ color: "#00BFFF", userSelect: "none" }}
            className="font-projects"
          >
            Period:{" "}
            <span style={{ color: "white" }}>
              {" "}
              September 2022 - October 2022
            </span>
          </div>
        </div>
      </div>

      <div id="secondsection-personal">
        <div
          style={{
            fontWeight: "600",
            color: "white",
            userSelect: "none",
          }}
          className="intro-secondsection-title"
          id="introduction-happilist"
        >
          Introduction
        </div>

        <div
          style={{
            color: "white",
            marginTop: "38px",
            lineHeight: 1.5,
          }}
          className="intro-secondsection-desc"
          id="intro-desc-bullseye"
        >
          My personal website was a solo project. I wanted to display myself and
          my skills outside of a black and white resume. The website showcases
          animations, my current projects, a short biography, and a form of
          contact.
        </div>

        <div
          className="visit-website-project visitweb-but"
          style={{ userSelect: "none", marginBottom: "4vh" }}
          onClick={() => setShowMeme(true)}
        >
          View Website
        </div>
        <div
          style={{
            color: "red",
            marginBottom: "3vh",
            display: showMeme ? "" : "none",
          }}
        >
          DID YOU FORGET WHAT SITE YOU'RE ON RIGHT NOW???
        </div>
      </div>

      <div className="project-body-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontWeight: "600", margin: 0 }}
            className="title-thirdsection-projects"
          >
            The Project
          </div>

          <div
            style={{
              marginTop: "7vh",
              fontWeight: "600",
            }}
            className="sub-title-project subtitle-bullseye"
          >
            New Libraries
          </div>
          <div className="line-divider" />

          <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
            The frontend is built with React, SASS, jQuery, along with GSAP and
            Kute.js. The contact form uses an external service, formspree, to
            send messages directly to my email.
          </div>

          <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
            Alongside building a website for myself, I also wanted to try new
            javascript libraries. One of my favorite was Three.js because it was
            incredibly easy to make 3D animations and objects.{" "}
            <a
              href="https://codepen.io/scrubbydubby123/pen/ZEorRVP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: "#545454", textDecoration: "underline" }}>
                Check out this solar system I made with Three.js
              </span>
            </a>
          </div>
          <h1 style={{ marginTop: "10vh" }} className="sub-title-project">
            Tech Stack
          </h1>

          <div className="techstack-container">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="256px"
                height="228px"
                viewBox="0 0 256 228"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                className="tech-stack-icon"
              >
                <g>
                  <path
                    d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z"
                    fill="#00D8FF"
                  ></path>
                </g>
              </svg>
            </a>

            <Html />

            <Sass />
            <Jquery />
            <Gsap />
          </div>
        </div>
      </div>
      <div
        className="next-project3"
        onClick={() => history("/mycha")}
        style={{ overflow: "hidden" }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "row",
            zIndex: 2,
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <div className="color-change-next1">Next Project</div>
            <div className="color-change-next2">Mycha</div>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
            }}
            className="svg-arrow-container"
          >
            <svg
              width="67"
              height="33"
              viewBox="0 0 67 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61.09 17.6L40.0772 31.317L41.875 33L67 16.4538L41.875 0L40.0744 1.6808L61.0928 15.4H0V17.6H61.09Z"
                id="path-fill-arrow"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;
