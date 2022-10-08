import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Main.scss";
import { gsap, Power3 } from "gsap";
import KUTE from "kute.js";
const parentDiv = document.getElementsByClassName("parent")[0];
import Projects from "./Projects.jsx";
import TestSVg from "./Projects/TestSVg";
import About from "./About";
import Contact from "./Contact";
import { init } from "./longfunctions/greenblob";
import { initRed } from "./longfunctions/redblob";
import { initYellow } from "./longfunctions/yellowblob";
import { initBlue } from "./longfunctions/blueblob";

import $ from "jquery";

const Main = () => {
  const [vpHeight, setvpHeight] = useState(0);
  const [vpWidth, setvpWidth] = useState(0);

  const burgerAnimationRef1 = useRef(null);
  const burgerAnimationRef2 = useRef(null);
  const [shouldStart, setShouldStart] = useState(false);
  const blobref = useRef(null);

  const [isBurger, setIsBurger] = useState(false);
  const [isBurger2, setIsBurger2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigateHome = () => {
    const parent = document.getElementsByClassName("parent")[0];
    burgerAnimationClose();

    setTimeout(() => {
      parent.scrollIntoView({ behavior: "smooth" }, true);
    }, 800);
  };

  const nagivateProjects = () => {
    const parent = document.getElementById("test");
    burgerAnimationClose();

    setTimeout(() => {
      parent.scrollIntoView({ behavior: "smooth" }, true);
    }, 800);
  };

  const navigateAbout = () => {
    const parent = document.getElementsByClassName("aboutme")[0];
    burgerAnimationClose();

    setTimeout(() => {
      parent.scrollIntoView({ behavior: "smooth" }, true);
    }, 800);
  };

  const navigateContact = () => {
    const parent = document.getElementById("parentcontact");
    burgerAnimationClose();

    setTimeout(() => {
      parent.scrollIntoView({ behavior: "smooth" }, true);
    }, 800);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  const preventDefault = useCallback((e) => {
    e.preventDefault();
  }, []);

  const preventDefaultForScrollKeys = useCallback((e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  });

  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener(wheelEvent, preventDefault, { passive: false }); // modern desktop
    window.addEventListener("touchmove", preventDefault, { passive: false }); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  const burgerAnimation = () => {
    gsap.to(burgerAnimationRef1.current, {
      x: 0,
      duration: 0.5,
      ease: "power4",
    });

    gsap.to(burgerAnimationRef2.current, {
      x: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power4",
    });

    gsap.to("#burger-stroke-1", {
      rotation: 47,
      y: "100%",
    });

    gsap.to("#burger-stroke-2", {
      rotation: -47,
    });

    gsap.to("#linkedin-logo", { y: 0, duration: 1, ease: "power4" });
    gsap.to("#github-logo", { y: 0, duration: 1, ease: "power4" });
    gsap.to("#codepen-logo", { y: 0, duration: 1, ease: "power4" });
    disableScroll();
    setIsBurger(true);
    setIsBurger2(true);
  };

  const burgerAnimationClose = () => {
    gsap.to(burgerAnimationRef2.current, {
      x: "100%",
      duration: 0.5,
      ease: "power4",
    });

    gsap.to(burgerAnimationRef1.current, {
      x: "-100%",
      duration: 0.5,
      ease: "power4",
      delay: 0.5,
    });

    gsap.to("#burger-stroke-1", {
      rotation: 0,
    });

    gsap.to("#burger-stroke-2", {
      rotation: 0,
    });

    gsap.to("#linkedin-logo", { y: "-200%", duration: 1, ease: "power4" });
    gsap.to("#github-logo", { y: "-200%", duration: 1, ease: "power4" });
    gsap.to("#codepen-logo", { y: "-200%", duration: 1, ease: "power4" });

    setTimeout(() => {
      setIsBurger2(false);
    }, 300);
    setTimeout(() => {
      setIsBurger(false);
    }, 1000);

    enableScroll();
  };

  useEffect(() => {
    handleScroll();
    window.scrollTo({ top: 0 });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //remove opacity0 classes
  useEffect(() => {
    setTimeout(() => {
      $("#burgerking").removeClass("opacity0-topnav");
      $("#burgerking").addClass("topnav-animation");
      $("#text-intro").removeClass("opacity0");
      $("#text-intro").addClass("text-animation-intro");
      $("#blob-animated").removeClass("opacity0-blob");
      $("#blob-animated").addClass("blob-scalea");
      $("#yellow-blob-svg").removeClass("opacity0-blob");
      $("#yellow-blob-svg").addClass("blob-scalea");
      $("#blue-blob-svg").removeClass("opacity0-blob");
      $("#blue-blob-svg").addClass("blob-scalea");
      $("#green-blob-svg").removeClass("opacity0-blob");
      $("#green-blob-svg").addClass("blob-scalea");
    }, 6850);

    setTimeout(() => {
      $("#logo-topleft").removeClass("opacity0");
      $("#logo-topleft").addClass("scale-logo-animation");
    }, 7250);

    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 7400);

    setTimeout(() => {
      setShouldStart(true);
    }, 8500);
  }, []);

  useEffect(() => {
    if (!shouldStart) return;
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 9999, duration: 2300, yoyo: true }
    );

    const tween2 = KUTE.fromTo(
      "#yellow-blob1",
      { path: "#yellow-blob1" },
      { path: "#yellow-blob2" },
      { repeat: 9999, duration: 2000, yoyo: true }
    );

    const tween3 = KUTE.fromTo(
      "#blue-blob1",
      { path: "#blue-blob1" },
      { path: "#blue-blob2" },
      { repeat: 9999, duration: 2700, yoyo: true }
    );

    const tween4 = KUTE.fromTo(
      "#green-blob1",
      { path: "#green-blob1" },
      { path: "#green-blob2" },
      { repeat: 9999, duration: 3300, yoyo: true }
    );
    tween.start();
    tween4.start();
    tween2.start();
    tween3.start();
  }, [shouldStart]);

  useEffect(() => {
    const height = document
      .getElementsByClassName("parent")[0]
      .getBoundingClientRect().height;
    const width = document
      .getElementsByClassName("parent")[0]
      .getBoundingClientRect().width;
    setvpHeight(height);
    setvpWidth(width);
  }, [parentDiv?.clientHeight, parentDiv?.clientWidth]);

  //red blob
  useEffect(() => {
    if (!shouldStart) return;
    initRed(vpHeight, vpWidth);
  }, [vpHeight, vpWidth, document.hidden, shouldStart]);

  //YELLOW BLOB
  useEffect(() => {
    if (!shouldStart) return;
    initYellow(vpHeight, vpWidth);
  }, [vpHeight, vpWidth, document.hidden, shouldStart]);

  // //BLUE BLOB
  useEffect(() => {
    if (!shouldStart) return;
    initBlue(vpHeight, vpWidth);
  }, [vpHeight, vpWidth, document.hidden, shouldStart]);

  // //GREEN BLOB
  useEffect(() => {
    if (!shouldStart) return;
    init(vpHeight, vpWidth);
  }, [vpHeight, vpWidth, document.hidden, shouldStart]);

  return (
    <div className='main-container'>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "plum",
          position: "absolute",
          transform: "translateX(-100%)",
          top: scrollPosition,
          left: 0,
          display: isBurger ? "" : "none",
          zIndex: 6,
          overflow: "hidden",
        }}
        id='burger-animation-first'
        ref={burgerAnimationRef1}
      />

      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          position: "absolute",
          transform: "translateX(100%)",
          top: scrollPosition,
          right: 0,
          display: isBurger ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 6,
        }}
        id='burger-animation-first'
        ref={burgerAnimationRef2}
      >
        <a className='menu-items' onClick={() => navigateHome()}>
          Home
        </a>

        <a className='menu-items' onClick={() => nagivateProjects()}>
          Projects
        </a>

        <a className='menu-items' onClick={() => navigateAbout()}>
          About
        </a>

        <a className='menu-items' onClick={() => navigateContact()}>
          Contact
        </a>
      </div>
      <div className='parent'>
        <TestSVg />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            zIndex: 10000,
          }}
        >
          <svg
            viewBox='0 0 68 71'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='opacity0'
            id='logo-topleft'
          >
            <path
              d='M0.873977 0.788862L30.7285 26.1886'
              className='logo-color'
            />
            <path d='M30.3653 26.2092L44.1335 10.08' className='logo-color' />
            <path d='M4.22946 25.8616L22.2975 37.8756' className='logo-color' />
            <path d='M22.0394 37.8756L22.0394 70' className='logo-color' />
            <path d='M39.8493 39.965L40.2709 58.8' className='logo-color' />
            <path d='M39.8493 40.1175L67.2165 4.46313' className='logo-color' />
            <path
              d='M0.873993 0.788879L4.22949 26.1228'
              className='logo-color'
            />
            <path d='M22.0394 70L40.568 58.8' className='logo-color' />
            <path d='M43.9792 10.1911L67.4745 4.22819' className='logo-color' />
            <path d='M30.8159 34.2365L30.8159 25.8616' className='logo-color' />
            <path d='M30.8153 34.2191L21.8748 38.119' className='logo-color' />
            <path d='M30.8153 34.2191L39.9895 39.7457' className='logo-color' />
            <path d='M21.5446 37.4574L14.5541 21.4216' className='logo-color' />
            <path d='M30.4659 26.04L14.296 21.4216' className='logo-color' />
            <path d='M4.12933 25.6209L14.5541 21.4216' className='logo-color' />
            <path d='M1.34773 1.16767L14.5541 21.4216' className='logo-color' />
            <line
              y1='-0.5'
              x2='16.0817'
              y2='-0.5'
              transform='matrix(-0.224703 0.974427 -0.973242 -0.229781 43.9792 10.1912)'
              className='logo-color'
            />
            <path d='M40.3655 26.3839L67.2165 4.46308' className='logo-color' />
            <path d='M40.6624 25.8727L39.9738 39.48' className='logo-color' />
            <path d='M40.5 26.4865L30.4991 26.0135' className='logo-color' />
            <line
              y1='-0.5'
              x2='12.4977'
              y2='-0.5'
              transform='matrix(-0.743507 0.668728 -0.659983 -0.751281 40.3655 25.8616)'
              className='logo-color'
            />
            <path d='M14.2959 21.4216L30.7192 34.0158' className='logo-color' />
            <path d='M30.8152 34.2124L30.8152 53.76' className='logo-color' />
            <path d='M31.0734 54.3296L22.0696 37.9981' className='logo-color' />
            <path d='M31.0734 54.3295L39.6287 39.8294' className='logo-color' />
            <path d='M31.0734 54.0684L22.0006 69.8766' className='logo-color' />
            <line
              y1='-0.5'
              x2='10.1885'
              y2='-0.5'
              transform='matrix(0.91202 0.410146 -0.402154 0.915572 31.0734 54.5907)'
              className='logo-color'
            />
          </svg>
          <div style={{ flexGrow: 1 }} />
          <a
            href='https://github.com/yuiyuuuu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 24 24'
              id='github-logo'
            >
              <path
                d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                id='github-path'
              />
            </svg>
          </a>

          <a
            href='https://www.linkedin.com/in/yingson-yu-3b0a581b9/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='50'
              height='50'
              viewBox='0 0 430.117 430.117'
              id='linkedin-logo'
            >
              <path
                d='M430.117 261.543V420.56H337.93V272.193c0-37.27-13.335-62.707-46.704-62.707-25.473 0-40.632 17.142-47.3 33.724-2.433 5.928-3.06 14.18-3.06 22.477V420.56H148.65s1.242-251.285 0-277.32h92.21v39.31c-.187.293-.43.61-.606.895h.606v-.896c12.25-18.87 34.13-45.825 83.102-45.825 60.673 0 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.25 0 57.463c0 26.62 20.038 47.94 50.96 47.94h.615c32.16 0 52.16-21.317 52.16-47.94-.607-27.212-20-47.905-51.552-47.905zM5.477 420.56H97.66V143.24H5.478v277.32z'
                id='linkedin-path'
              ></path>
            </svg>
          </a>

          <a
            href='https://codepen.io/scrubbydubby123'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              width='50px'
              height='50px'
              viewBox='0 0 256 256'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid'
              id='codepen-logo'
            >
              <g>
                <path
                  d='M127.574384,0.00746439363 L127.796306,0.00167782314 L127.796306,0.00167782314 L128.20519,0.00167782314 L128.20519,0.00167782314 L128.486141,0.0097244509 L128.486141,0.0097244509 L128.818919,0.0276579086 L128.818919,0.0276579086 C130.964539,0.17047912 132.95713,0.872238627 134.652708,1.98839909 L250.382971,78.7918676 C251.580336,79.551859 252.660542,80.5341365 253.557405,81.7257506 L253.78091,82.0323989 L253.78091,82.0323989 L253.935824,82.2573416 C255.318112,84.3120948 255.987031,86.6375943 256,88.9413079 L256,166.811881 C256.03119,169.039864 255.450844,171.29795 254.205768,173.320861 L254.074393,173.529595 L254.074393,173.529595 L253.935824,173.740176 L253.935824,173.740176 C253.051161,175.055215 251.953658,176.141399 250.719997,176.983724 L134.839215,253.883856 C133.108518,255.069623 131.054453,255.817846 128.836451,255.969094 L128.322542,255.993293 L128.322542,255.993293 L128,255.997518 L127.789275,255.997518 L127.789275,255.997518 L127.475407,255.986176 L127.475407,255.986176 L127.148065,255.967582 L127.148065,255.967582 C124.947969,255.815172 122.909756,255.074972 121.189044,253.903158 L5.6484681,177.225537 C4.61918038,176.576678 3.67574668,175.764035 2.85999587,174.795791 L2.83257337,174.761845 C2.57552382,174.455224 2.33428632,174.136593 2.10956752,173.807269 L2.06417622,173.740176 C0.641355515,171.625173 -0.0256459584,169.223312 5.25801624e-13,166.853621 L5.25801624e-13,89.1856365 C-0.0280623264,87.1721938 0.443071969,85.1341658 1.45299925,83.2673401 L1.70085109,82.8315384 L1.70085109,82.8315384 L1.80191444,82.6641914 L1.80191444,82.6641914 C2.00985041,82.3270184 2.23410459,81.9999993 2.47430303,81.6842144 C3.37285239,80.5005893 4.45279237,79.5257068 5.64861026,78.7718911 L121.167856,2.10882142 C122.791188,0.998296578 124.698531,0.272512667 126.758524,0.0628312606 L127.216102,0.025340344 L127.216102,0.025340344 L127.574384,0.00746439363 L127.574384,0.00746439363 Z M70.058,142.6 L33.925,166.907 L115.884,221.293 L115.884,173.428 L70.058,142.6 Z M185.941,142.599 L140.115,173.428 L140.115,221.293 L222.072,166.905 L185.941,142.599 Z M128.000216,103.621053 L91.768,127.995 L128.000216,152.36593 L164.232,127.995 L128.000216,103.621053 Z M24.221,111.764 L24.221,144.232 L48.353,127.998 L24.221,111.764 Z M231.758,111.777 L207.646,127.998 L231.758,144.219 L231.758,111.777 Z M115.884,34.686 L33.918,89.083 L70.061,113.394 L115.884,82.568 L115.884,34.686 Z M140.115,34.699 L140.115,82.568 L185.938,113.394 L222.078,89.086 L140.115,34.699 Z'
                  id='codepen-path'
                ></path>
              </g>
            </svg>
          </a>
          <div style={{ flexGrow: 1 }} />
          <div
            className='burger-color-div opacity0-topnav'
            onClick={(e) => {
              !isBurger ? burgerAnimation() : burgerAnimationClose();
            }}
            id='burgerking'
          >
            <svg
              width='52'
              height='44'
              viewBox='0 0 52 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ zIndex: 6 }}
            >
              <g clipPath='url(#clip0_20_2)'>
                <rect
                  x='-1'
                  width='53'
                  height='2'
                  className='burger-color'
                  style={{ transform: "translateY(41deg)" }}
                  id='burger-stroke-1'
                />
                <rect
                  x='-1'
                  y='21'
                  width='53'
                  height='2'
                  className='burger-color'
                  style={{ display: isBurger2 ? "none" : "" }}
                />
                <path
                  d='M-1 42H52V44H25.5H-1V42Z'
                  className='burger-color'
                  id='burger-stroke-2'
                />
              </g>
              <defs>
                <clipPath id='clip0_20_2'>
                  <rect width='52' height='44' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            height: "100vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          className='textt'
        >
          <div
            style={{
              fontWeight: "600",
              zIndex: 2,
            }}
            id='text-intro'
            className='opacity0'
          >
            Hey! My name is Yingson.
            <br />I am a Full-stack software engineer from Chicago that
            graduated from Fullstack Academy
          </div>
          <div ref={blobref}>
            <svg
              id='blob-animated'
              viewBox='0 0 900 600'
              width='900'
              height='600'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              style={{ position: "absolute", right: 150 }}
              className='opacity0-blob'
            >
              <g transform='translate(475.0204534580877 297.1349620302673)'>
                <path
                  id='blob1'
                  d='M160.5 -173.6C194.1 -126.8 198.1 -63.4 184 -14C170 35.4 138 70.7 104.4 120.7C70.7 170.7 35.4 235.4 -17.2 252.6C-69.8 269.8 -139.5 239.5 -183 189.5C-226.5 139.5 -243.8 69.8 -241.5 2.2C-239.3 -65.3 -217.6 -130.6 -174.1 -177.4C-130.6 -224.2 -65.3 -252.6 -0.9 -251.7C63.4 -250.7 126.8 -220.5 160.5 -173.6'
                  fill='#b92379'
                ></path>
              </g>
              <g
                transform='translate(508.6613108091376 275.91589513044124)'
                style={{ visibility: "hidden" }}
              >
                <path
                  id='blob2'
                  d='M115.5 -116.3C140.5 -90.5 145.3 -45.3 143 -2.2C140.8 40.8 131.6 81.6 106.6 119.2C81.6 156.9 40.8 191.4 -11.7 203.1C-64.1 214.8 -128.2 203.6 -178.2 165.9C-228.2 128.2 -264.1 64.1 -260.6 3.5C-257 -57 -214.1 -114.1 -164.1 -139.9C-114.1 -165.7 -57 -160.4 -5.9 -154.5C45.3 -148.6 90.5 -142.2 115.5 -116.3'
                  fill='#b92379'
                ></path>
              </g>
            </svg>

            <svg
              id='yellow-blob-svg'
              viewBox='0 0 900 600'
              width='900'
              height='600'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              style={{ position: "absolute", left: -1, top: -50 }}
              className='opacity0-blob'
            >
              <g transform='translate(465.27723997269925 335.6427759040981)'>
                <path
                  d='M179 -188.2C218.5 -139.5 227.8 -69.8 210.6 -17.2C193.4 35.4 149.7 70.7 110.2 97.9C70.7 125 35.4 144 -17.7 161.7C-70.7 179.4 -141.4 195.8 -188.6 168.6C-235.8 141.4 -259.4 70.7 -245.4 14C-231.3 -42.7 -179.7 -85.3 -132.5 -134C-85.3 -182.7 -42.7 -237.3 13.6 -250.9C69.8 -264.4 139.5 -236.9 179 -188.2'
                  fill='#f1d056'
                  id='yellow-blob1'
                ></path>
              </g>

              <g transform='translate(456.6842695026673 334.1164563455272)'>
                <path
                  d='M120.7 -116.9C170.7 -70.7 235.4 -35.4 235.5 0.1C235.6 35.6 171.2 71.2 121.2 104.8C71.2 138.5 35.6 170.3 -0.5 170.7C-36.5 171.2 -73.1 140.4 -121.7 106.7C-170.4 73.1 -231.2 36.5 -245.5 -14.3C-259.7 -65.1 -227.4 -130.1 -178.8 -176.3C-130.1 -222.4 -65.1 -249.7 -14.8 -234.9C35.4 -220 70.7 -163 120.7 -116.9'
                  fill='#f1d056'
                  id='yellow-blob2'
                  style={{ visibility: "hidden" }}
                ></path>
              </g>
            </svg>

            <svg
              id='blue-blob-svg'
              viewBox='0 0 900 600'
              width='900'
              height='600'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              style={{ position: "absolute", top: 30, right: 30 }}
              className='opacity0-blob'
            >
              <g transform='translate(470.02425535291934 256.4533814357629)'>
                <path
                  d='M118.2 -111.7C149.7 -86.7 169.4 -43.4 175.7 6.4C182.1 56.1 175.2 112.2 143.7 162.2C112.2 212.2 56.1 256.1 9.7 246.4C-36.8 236.8 -73.5 173.5 -115.2 123.5C-156.9 73.5 -203.4 36.8 -215 -11.5C-226.5 -59.9 -203.1 -119.7 -161.4 -144.7C-119.7 -169.7 -59.9 -159.9 -8.2 -151.6C43.4 -143.4 86.7 -136.7 118.2 -111.7'
                  fill='#00d8ee'
                  id='blue-blob1'
                ></path>
              </g>

              <g transform='translate(478.44208859469927 291.7866695273314)'>
                <path
                  d='M125.4 -114.4C161.8 -89.1 189.9 -44.5 186.2 -3.7C182.6 37.2 147.1 74.5 110.8 102.8C74.5 131.1 37.2 150.6 -6.4 156.9C-50 163.3 -99.9 156.6 -149.9 128.3C-199.9 99.9 -250 50 -242.7 7.3C-235.4 -35.4 -170.7 -70.7 -120.7 -96C-70.7 -121.4 -35.4 -136.7 4.6 -141.3C44.5 -145.9 89.1 -139.8 125.4 -114.4'
                  fill='#00d8ee'
                  id='blue-blob2'
                  style={{ visibility: "hidden" }}
                ></path>
              </g>
            </svg>

            <svg
              id='green-blob-svg'
              viewBox='0 0 900 600'
              width='900'
              height='600'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              style={{ position: "absolute", bottom: 30, left: 30 }}
              className='opacity0-blob'
            >
              <g transform='translate(447.7870854592553 266.08738422510714)'>
                <path
                  d='M173.3 -154.6C217 -129.6 239.5 -64.8 242.4 2.9C245.4 70.7 228.8 141.4 185.1 184.4C141.4 227.4 70.7 242.7 7.8 234.9C-55.2 227.2 -110.3 196.3 -155.1 153.3C-200 110.3 -234.5 55.2 -238 -3.5C-241.6 -62.2 -214.1 -124.5 -169.3 -149.5C-124.5 -174.5 -62.2 -162.2 1.3 -163.5C64.8 -164.8 129.6 -179.6 173.3 -154.6'
                  fill='#10d710'
                  id='green-blob1'
                ></path>
              </g>

              <g transform='translate(476.39631870327395 294.15530164383813)'>
                <path
                  d='M120.8 -110.8C155.8 -85.8 182.9 -42.9 189.4 6.5C195.9 55.9 181.7 111.7 146.7 137.9C111.7 164.1 55.9 160.5 8.7 151.8C-38.4 143.1 -76.8 129.2 -126.8 103C-176.8 76.8 -238.4 38.4 -243.4 -4.9C-248.3 -48.3 -196.6 -96.6 -146.6 -121.6C-96.6 -146.6 -48.3 -148.3 -2.7 -145.6C42.9 -142.9 85.8 -135.8 120.8 -110.8'
                  fill='#10d710'
                  id='green-blob2'
                  style={{ visibility: "hidden" }}
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Projects />
      <div className='aboutme'>
        <About />
      </div>
      <Contact />
    </div>
  );
};

export default Main;
