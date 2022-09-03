import React, { useRef, useState, useEffect } from "react";
import "./Main.scss";
import { gsap, Power3 } from "gsap";

const Main = () => {
  const burgerAnimationRef1 = useRef(null);
  const burgerAnimationRef2 = useRef(null);

  const [isBurger, setIsBurger] = useState(false);
  const [isBurger2, setIsBurger2] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    setTimeout(() => {
      setIsBurger2(false);
    }, 300);
    setTimeout(() => {
      setIsBurger(false);
    }, 1000);
  };

  return (
    <div className='main-container'>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#463E3F",
          position: "absolute",
          transform: "translateX(-100%)",
          top: scrollPosition,
          display: isBurger ? "" : "none",
          // zIndex: 1000,
        }}
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
          display: isBurger ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
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
              zIndex: 100000,
            }}
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
        <div style={{ color: "white" }} className='textt'>
          Hi, my name is Yingson and I am a Full-stack software engineer from
          Chicago
        </div>
      </div>
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default Main;
