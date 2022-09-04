import React, { useRef, useState, useEffect } from "react";
import "./Main.scss";
import { gsap, Power3 } from "gsap";
import KUTE from "kute.js";
const parentDiv = document.getElementsByClassName("parent")[0];

const Main = () => {
  const [vpHeight, setvpHeight] = useState(0);
  const [vpWidth, setvpWidth] = useState(0);

  const burgerAnimationRef1 = useRef(null);
  const burgerAnimationRef2 = useRef(null);
  const blobref = useRef(null);

  const [isBurger, setIsBurger] = useState(false);
  const [isBurger2, setIsBurger2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

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

    setTimeout(() => {
      setIsBurger2(false);
    }, 300);
    setTimeout(() => {
      setIsBurger(false);
    }, 1000);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

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

  useEffect(() => {
    let previous = "moveDownRight";
    let previousX = 50;
    let previousY = 50;
    const init = () => {
      if (vpHeight === 0 || vpWidth === 0) return;

      const moveDownRight = (posy, posx) => {
        if (!document.hidden) {
          const offsets = document
            .getElementById("blob-animated")
            .getBoundingClientRect();
          const offsetX = offsets.x;
          const offsetY = offsets.y;

          gsap.to("#blob-animated", {
            x: posx,
            y: posy,
            duration: 3,
            ease: "none",
          });

          previous = "moveDownRight";
          previousX = posx;
          previousY = posy;

          if (offsetY > vpHeight - 500) {
            return setTimeout(() => {
              moveUpRight(posy - 100, posx + 100);
            }, 3000);
          }

          if (offsetX >= vpWidth - 501) {
            return setTimeout(() => {
              moveDownLeft(posy + 100, posx - 100);
            }, 3000);
          }

          return setTimeout(() => {
            moveDownRight(posy + 100, posx + 100);
          }, 3000);
        } else {
          setTimeout(() => {
            init();
          }, 500);
        }
      };

      const moveUpRight = (posy, posx) => {
        if (!document.hidden) {
          console.log("ran2");
          const offsets = document
            .getElementById("blob-animated")
            .getBoundingClientRect();
          const offsetX = offsets.x;
          const offsetY = offsets.y;

          gsap.to("#blob-animated", {
            x: posx,
            y: posy,
            duration: 3,
            ease: "none",
          });

          previous = "moveUpRight";
          previousX = posx;
          previousY = posy;

          if (offsetX >= vpWidth - 501) {
            return setTimeout(() => {
              moveUpLeft(posy - 100, posx - 100);
            }, 3000);
          }

          if (offsetY <= vpHeight - 1170) {
            return setTimeout(() => {
              moveDownRight(posy + 100, posx + 100);
            }, 3000);
          }

          return setTimeout(() => {
            moveUpRight(posy - 100, posx + 100);
          }, 3000);
        } else {
          setTimeout(() => {
            init();
          }, 500);
        }
      };

      const moveUpLeft = (posy, posx) => {
        if (!document.hidden) {
          const offsets = document
            .getElementById("blob-animated")
            .getBoundingClientRect();
          const offsetX = offsets.x;
          const offsetY = offsets.y;

          gsap.to("#blob-animated", {
            x: posx,
            y: posy,
            duration: 3,
            ease: "none",
          });

          previous = "moveUpLeft";
          previousX = posx;
          previousY = posy;

          if (offsetY <= vpHeight - 1170) {
            return setTimeout(() => {
              moveDownLeft(posy + 100, posx - 100);
            }, 3000);
          }

          if (offsetX <= vpWidth - 1870) {
            return setTimeout(() => {
              moveUpRight(posy - 100, posx + 100);
            }, 3000);
          }

          return setTimeout(() => {
            moveUpLeft(posy - 100, posx - 100);
          }, 3000);
        } else {
          setTimeout(() => {
            init();
          }, 500);
        }
      };

      const moveDownLeft = (posy, posx) => {
        if (!document.hidden) {
          const offsets = document
            .getElementById("blob-animated")
            .getBoundingClientRect();
          const offsetX = offsets.x;
          const offsetY = offsets.y;

          gsap.to("#blob-animated", {
            x: posx,
            y: posy,
            duration: 3,
            ease: "none",
          });

          previous = "moveDownLeft";
          previousX = posx;
          previousY = posy;

          if (offsetX <= vpWidth - 1700) {
            return setTimeout(() => {
              moveDownRight(posy + 100, posx + 100);
            }, 3000);
          }

          if (offsetY > vpHeight - 400) {
            return setTimeout(() => {
              moveUpLeft(posy - 100, posx - 100);
            }, 3000);
          }

          return setTimeout(() => {
            moveDownLeft(posy + 100, posx - 100);
          }, 3000);
        } else {
          setTimeout(() => {
            init();
          }, 500);
        }
      };
      switch (previous) {
        case "moveDownRight":
          return moveDownRight(previousY, previousX);
        case "moveDownLeft":
          return moveDownLeft(previousY, previousX);
        case "moveUpLeft":
          return moveUpLeft(previousY, previousX);
        case "moveUpRight":
          return moveUpRight(previousY, previousX);
      }
    };
    init();
  }, [vpHeight, vpWidth, document.hidden]);

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
          zIndex: 3,
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
          zIndex: 4,
        }}
        id='burger-animation-first'
        ref={burgerAnimationRef2}
      >
        <a className='menu-items'>Home</a>

        <a className='menu-items'>Projects</a>

        <a className='menu-items'>About</a>

        <a className='menu-items'>Contact</a>
      </div>
      <div className='parent'>
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
            width='80'
            height='80'
            viewBox='0 0 68 71'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              marginTop: "20px",
              cursor: "pointer",
              marginLeft: "10vh",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
          <div style={{ flexGrow: 1 }} />
          <div
            className='burger-color-div'
            onClick={(e) => {
              !isBurger ? burgerAnimation() : burgerAnimationClose();
            }}
          >
            <svg
              width='52'
              height='44'
              viewBox='0 0 52 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ zIndex: 6 }}
            >
              <g clip-path='url(#clip0_20_2)'>
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
              fontSize: "46px",
              fontWeight: "600",
              zIndex: 2,
              height: "10vh",
              width: "55vw",
              marginRight: "15vw",
            }}
            id='text-intro'
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
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "plum",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Main;
