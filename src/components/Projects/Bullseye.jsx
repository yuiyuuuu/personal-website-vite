import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import "./Projects.scss";
import "../Main.scss";
import Nodejs from "../longsvgs/Nodejs";
import Html from "../longsvgs/Html";
import $ from "jquery";

import { gsap } from "gsap";
import Css from "../longsvgs/Css";

const Bullseye = () => {
  const history = useNavigate();
  const image1ref = useRef(null);
  const image2ref = useRef(null);

  const [show, setShow] = useState(false);

  const [imageDivHeight, setImageDivheight] = useState(null);

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
  }

  function fadeOutAllProjects() {
    const a = document.getElementById("div1-content");
    const b = document.getElementById("div2-content");
    const c = document.getElementById("div3-content");

    a.classList.remove("shadow-pj");
    b.classList.remove("shadow-pj");
    c.classList.remove("shadow-pj");
    gsap.to("#image1-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "-100%",
    });

    gsap.to("#div2-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "-100%",
      delay: 0.3,
    });

    gsap.to("#close-button-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      y: "-100%",
      delay: 0.2,
    });

    gsap.to("#image3-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "-100%",
      delay: 0.7,
    });

    //right
    gsap.to("#div1-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "100%",
      delay: 0.1,
    });

    gsap.to("#image2-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "100%",
      delay: 0.5,
    });

    gsap.to("#div3-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "100%",
      delay: 0.9,
    });
  }

  useEffect(() => {
    const v = document.getElementById("name--bullseye");
    const p = document.getElementById("desc--bullseye");
    const i = document.getElementById("home-bullseye");
    const l = document.getElementById("all-projects-bullseye");
    const q = document.getElementById("logo-bullseye");
    const y = document.getElementById("role-bullseye");
    const o = document.getElementById("context-bullseye");
    const k = document.getElementById("period-bullseye");
    setTimeout(() => {
      v.classList.remove("animation-fade-bot");
      p.classList.remove("animation-fade-bot");
      i.classList.remove("animation-fade-top");
      l.classList.remove("animation-fade-top");
      q.classList.remove("animation-fade-top");
      y.classList.remove("animation-fade-bot");
      o.classList.remove("animation-fade-bot");
      k.classList.remove("animation-fade-bot");
    }, 1500);
  }, []);

  $(window).on("popstate", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("ran");
  });

  window.addEventListener("resize", () => {
    const image1 = image1ref.current.offsetHeight;
    const image2 = image2ref.current.offsetHeight;

    setImageDivheight(image1 + image2);
    console.log(imageDivHeight);
  });

  useEffect(() => {
    const image1 = image1ref.current.offsetHeight;
    const image2 = image2ref.current.offsetHeight;
    setImageDivheight(image1 + image2);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "auto";
  }, []);
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      {/*start of overlay*/}
      <div
        className='all-projects-div'
        style={{
          position: "fixed",
          top: 0,
          zIndex: 10,
          display: show ? "" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "30vh",
            alignItems: "center",
          }}
          className='containerfor-overlay'
        >
          <div
            onClick={() => {
              document.body.style.overflow = "auto";
              fadeOutAllProjects();
              setTimeout(() => {
                setShow(false);
              }, 1000);
            }}
            style={{
              position: "fixed",
              top: -50,
              zIndex: 21,
            }}
            className='visit-website-project-1'
            id='close-button-allpj'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: "10px" }}
            >
              <g clipPath='url(#clip0_37_28)'>
                <line
                  x1='-0.646447'
                  y1='-0.353553'
                  x2='31.3536'
                  y2='31.6464'
                  stroke='white'
                  strokeWidth={1.5}
                />
                <line
                  x1='-3.35355'
                  y1='28.6464'
                  x2='28.6464'
                  y2='-3.35355'
                  stroke='white'
                  strokeWidth={1.5}
                />
              </g>
              <defs>
                <clipPath id='clip0_37_28'>
                  <rect width='25' height='25' fill='white' />
                </clipPath>
              </defs>
            </svg>
            Close
          </div>
          <div
            className='all-projects-content shadow-pj'
            id='div1-content'
            style={{ marginTop: "9vh" }}
          >
            <div
              style={{
                height: "100%",
                width: "38%",
                position: "relative",
                zIndex: 20,
              }}
              id='image1-allpj'
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: 0,
                  backgroundColor: "black",
                  zIndex: 20,
                  height: "100%",
                  opacity: 0.5,
                }}
                className='shadow-img'
              />
            </div>
            <div
              style={{
                width: "62%",
                backgroundColor: "gainsboro",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
              }}
              id='div1-allpj'
              className='div-allpj-text'
            >
              <div
                style={{
                  fontWeight: "600",
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  marginTop: "12%",
                }}
                className='title-overlayall'
              >
                Bullseye Store
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#949494",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                  userSelect: "none",
                }}
                className='three-overlay'
              >
                Fullstack Developer{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                Project Redesign{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                2022
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#545454",
                  textAlign: "center",
                  marginTop: "20px",
                }}
                className='desc-overlay-1'
              >
                Bullseye is an E-commerce store inspired by the famous Gopuff's
                website and business model. Originally a project built by a team
                of 4 including me, I decided to rebuild the frontend...
              </div>

              <div
                className='visit-website-project-1 visitweb-but'
                onClick={() => {
                  document.body.style.overflow = "auto";
                  fadeOutAllProjects();
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                View Project
              </div>

              <svg
                width='854'
                height='308'
                viewBox='0 0 704 178'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  position: "absolute",
                  bottom: -80,
                  opacity: 0.3,
                  left: -25,
                }}
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M577.726 43.1462C561.446 46.7175 548.561 60.7185 545.08 78.6219C540.023 104.638 550.66 120.428 573.241 120.428C583.393 120.428 584.36 120.233 591.697 116.673C603.156 111.119 606.332 96.7477 597.002 92.6679C591.343 90.1917 590.101 90.7558 588.651 96.4598C583.868 115.262 564.27 112.295 564.27 92.7661V89.2703L573.054 88.3652C595.125 86.0912 607.874 76.9217 608.928 62.5675C610.083 46.8523 597.247 38.864 577.726 43.1462ZM523.899 54.9652L515.302 59.2434L515.547 61.9341C515.716 63.7974 515.529 64.4471 514.937 64.0466C514.437 63.7075 514.158 63.9261 514.268 64.5717C515.905 74.176 501.205 111.619 496.563 109.672C493.016 108.182 491.166 99.1257 490.934 82.1214C490.773 70.3453 490.765 70.3024 489.207 71.3668C488.345 71.9553 484.276 74.0045 480.164 75.9191C470.505 80.4197 470.808 79.911 471.264 90.9108C471.991 108.405 477.608 120.008 485.356 120.022C487.721 120.028 482.577 123.238 477.293 125.056C469.175 127.849 461.573 126.419 457.211 121.277C455.041 118.718 453.584 119.605 451.651 124.66C444.363 143.73 474.697 149.869 496.388 133.717C513.745 120.788 532.463 86.608 533.93 65.154C534.096 62.7432 534.405 60.22 534.618 59.5458C535.444 56.9246 534.763 50.9895 533.618 50.8383C533.001 50.7566 528.628 52.6137 523.899 54.9652ZM589.165 56.9C592.359 60.0443 592.111 65.487 588.531 70.6722C584.3 76.8058 563.941 82.6648 565.428 77.3203C569.972 61.0024 582.437 50.2785 589.165 56.9ZM438.116 95.8123C435.547 97.1826 433.486 98.6842 433.531 99.1501C433.729 101.12 433.381 102.029 432.504 101.837C431.991 101.725 431.617 102.276 431.675 103.063C431.731 103.849 431.29 104.493 430.696 104.493C430.041 104.493 429.826 104.898 430.152 105.514C430.447 106.076 430.422 106.272 430.097 105.951C429.348 105.214 426.54 106.8 427.038 107.68C427.241 108.038 426.386 108.365 425.137 108.403C423.891 108.442 422.472 108.824 421.986 109.251C420.935 110.179 416.256 109.88 415.59 108.842C414.803 107.617 413.151 108.046 405.965 111.347C399.724 114.213 397.704 115.75 399.797 116.036C401.219 116.23 401.674 116.404 403.249 117.364C404.12 117.895 405.045 118.095 405.305 117.811C405.565 117.528 405.778 117.765 405.778 118.337C405.778 118.941 406.264 119.174 406.938 118.891C407.576 118.623 407.916 118.727 407.693 119.119C407.141 120.1 414.293 120.989 420.894 120.76C436.166 120.233 447.615 111.595 447.64 100.582C447.645 98.2066 445.562 94.6864 444.149 94.6864C443.556 94.6864 443.278 94.3187 443.532 93.8691C444.188 92.7085 443.394 92.9928 438.116 95.8123Z'
                  fill='#5B637D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M247.96 20.0545C247.028 20.2527 246.455 20.7541 246.689 21.1709C246.923 21.5878 246.633 21.7261 246.047 21.4764C245.461 21.2287 244.514 21.5424 243.943 22.1719C243.372 22.8012 242.488 23.1644 241.976 22.9766C241.465 22.7889 240.842 23.2201 240.593 23.9362C240.344 24.6523 239.914 25.0856 239.637 24.8957C239.36 24.706 238.326 25.2218 237.341 26.0431L235.549 27.533L238.39 31.7986C241.706 36.7801 241.752 34.6938 237.79 59.9172C234.233 82.5716 234.247 82.456 235.302 81.5336C236.203 80.7476 253.569 72.2989 254.284 72.2989C254.503 72.2989 254.481 72.8746 254.236 73.5804C253.99 74.2837 254.103 74.6491 254.483 74.3896C254.865 74.1294 255.182 73.275 255.19 72.4887C255.2 71.7025 255.87 67.7177 256.68 63.6317C265.37 19.8049 264.71 16.5051 247.96 20.0545ZM290.832 20.6303C287.265 21.8788 280.252 25.7397 279.671 26.7757C279.447 27.1781 280.566 29.5162 282.16 31.9719L285.06 36.4354L284.014 43.0163C283.439 46.6379 282.81 51.3017 282.619 53.3839C282.427 55.466 282.06 57.8804 281.801 58.7492C281.511 59.7254 281.578 59.9585 281.974 59.3621C282.453 58.6357 301.194 49.1865 302.152 49.1865C302.247 49.1865 302.47 49.6508 302.646 50.2183C302.822 50.7857 302.853 50.4701 302.715 49.5146C302.577 48.5612 302.691 47.5294 302.971 47.222C303.616 46.51 303.666 46.2727 305.305 36.3921C307.857 20.9976 303.458 16.208 290.832 20.6303ZM203.98 42.5974C203.722 43.0576 203.168 43.202 202.749 42.9151C201.83 42.2899 196.127 44.9974 196.127 46.058C196.127 46.4708 195.816 46.5967 195.436 46.3366C195.056 46.0766 193.534 46.6524 192.056 47.614L189.366 49.364L191.002 52.3706C191.902 54.0236 193.211 56.2791 193.911 57.3831C195.067 59.2074 195.084 59.8429 194.111 64.3994C193.522 67.1543 192.046 74.796 190.833 81.3785C189.621 87.9617 188.472 94.1213 188.277 95.0669C187.556 98.5874 182.033 104.318 177.594 106.151C163.365 112.019 160.429 99.3689 168.41 66.5786C168.804 64.9566 169.309 61.5887 169.532 59.0918C169.757 56.5948 170.062 53.3591 170.212 51.9022L170.484 49.2505L168.146 50.3338C166.858 50.9302 162.055 53.2043 157.473 55.3877L149.139 59.358V62.732C149.137 64.5892 148.945 66.6652 148.708 67.3462C148.293 68.5493 147.898 70.7966 145.523 85.506C141.407 110.979 147.709 123.922 160.94 117.17C163.616 115.806 175.464 110.071 187.266 104.432C207.233 94.8872 208.727 94.0289 208.704 92.1094C208.691 90.9744 210.083 83.5455 211.798 75.6007C217.544 48.9657 217.684 47.3622 214.609 43.6148C212.964 41.6089 204.962 40.8433 203.98 42.5974ZM120.524 73.2027C110.875 77.8788 109.949 78.5291 110.531 80.2002C110.755 80.8483 110.621 81.3785 110.229 81.3785C109.838 81.3785 109.093 82.949 108.571 84.8684C105.478 96.2533 93.2927 106.526 79.9686 108.983L77.2303 109.489L76.9739 104.927C76.8317 102.415 76.9421 100.362 77.221 100.362C77.498 100.364 77.6159 99.0639 77.483 97.4726C77.3482 95.8835 77.5429 94.3756 77.9135 94.1213C78.284 93.87 78.5873 93.2421 78.5873 92.7283C78.5873 92.2145 78.1662 92.386 77.6514 93.1124C77.1367 93.8365 72.9555 96.2019 68.3587 98.3667L60 102.303L60.3087 105.769C61.2839 116.751 66.7323 121 79.8358 121C104.588 121 124.241 105.717 129.077 82.7096C130.159 77.5552 130.423 68.9682 129.496 69.0178C129.29 69.028 125.253 70.9121 120.524 73.2027ZM183.961 110.174C182.829 111.371 181.902 112.655 181.902 113.024C181.902 113.396 182.954 112.539 184.24 111.121C187.092 107.977 186.843 107.13 183.961 110.174Z'
                  fill='#5B637D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M418.024 49.7445C409.798 53.7059 402.01 57.3313 400.715 57.7983C399.413 58.2674 397.892 59.6438 397.309 60.8789C396.73 62.1058 395.658 63.8346 394.925 64.7194C394.195 65.6043 393.762 66.8025 393.966 67.3822C394.169 67.9619 394.032 68.435 393.663 68.435C391.482 68.435 389.571 77.9329 389.541 88.9179C389.507 101.324 390.397 104.685 395.529 111.533L398.147 115.025L405.72 111.404C409.885 109.413 413.59 107.983 413.955 108.231C415.196 109.069 414.623 107.594 412.772 105.191C410.565 102.324 409.38 98.0554 409.375 92.9489L409.372 89.194L417.803 88.2688C444.272 85.3643 458.854 71.5218 453.46 54.4248C451.74 48.9702 445.302 42.7762 442.984 44.3411C442.424 44.7201 442.319 44.5685 442.688 43.9151C443.073 43.2371 442.803 42.9565 441.867 43.0651C441.101 43.1531 440.305 43.1326 440.099 43.02C437.135 41.4059 432.241 42.895 418.024 49.7445ZM469.703 43.2616C468.465 43.8126 466.707 44.7324 465.792 45.3038L464.13 46.3423L466.309 50.0947C469.06 54.8386 470.04 59.8158 470.606 71.9027C470.939 79.0572 471.265 81.2371 471.878 80.4214C472.721 79.3008 488.512 71.5074 490.031 71.4644C491.195 71.4296 490.571 59.4697 489.109 53.8103C486.648 44.2715 477.984 39.5624 469.703 43.2616ZM517.829 44.335C515.855 45.4575 514.409 46.67 514.614 47.0326C514.818 47.393 515.044 50.277 515.118 53.4416L515.251 59.1953L524.308 54.7853C529.289 52.3601 533.792 50.5535 534.315 50.7727C535.274 51.1762 535.237 50.2606 534.137 46.4856C532.808 41.9241 524.086 40.773 517.829 44.335ZM436.203 61.2988C436.772 70.7127 429.549 76.8434 415.367 78.9817C409.379 79.8848 409.583 80.1246 411.406 74.2868C417.033 56.2724 435.323 46.6925 436.203 61.2988ZM349.851 82.3614C337.418 88.16 337.223 88.328 341.336 89.741C353.114 93.7905 356.52 97.2212 353.398 101.893C347.521 110.691 330.962 109.167 323.712 99.159C322.081 96.9059 320.571 95.2472 320.355 95.4722C320.141 95.6979 318.791 97.0577 317.355 98.4958C315.634 100.22 314.903 101.558 315.209 102.431C315.51 103.288 315.375 103.551 314.826 103.178C312.593 101.67 314.699 111.097 317.232 113.956C324.704 122.383 348.529 123.474 362.059 116.008C376.984 107.772 378.519 88.8357 364.979 79.981C363.441 78.9751 361.869 78.3652 361.483 78.6235C361.099 78.8833 360.672 78.736 360.533 78.2956C360.395 77.8574 355.589 79.6864 349.851 82.3614ZM434.487 92.9859C434.201 93.9711 434.163 94.9911 434.403 95.2531C434.643 95.5173 434.465 96.2257 434.006 96.8304C432.843 98.3626 433.446 98.2271 438.336 95.8638C443.063 93.5773 443.01 92.5907 438.115 91.7365C435.355 91.2547 434.948 91.3938 434.487 92.9859ZM415.367 108.534C415.367 109.286 419.09 110.521 419.616 109.946C419.794 109.749 418.912 109.198 417.653 108.718C416.395 108.24 415.367 108.157 415.367 108.534ZM286.27 112.613C279.066 115.966 276.012 118.72 279.351 118.851C279.758 118.868 280.806 119.316 281.679 119.849C287.137 123.169 300.813 117.717 297.129 113.689C296.346 112.834 295.784 111.543 295.879 110.822C296.194 108.477 294.454 108.801 286.27 112.613Z'
                  fill='#5B637D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M72.6988 21.2767C70.4722 22.1561 67.1783 23.9274 65.3794 25.2125L62.1098 27.5481L65.1149 31.9699C66.7675 34.4021 68.12 36.5235 68.12 36.6841C68.12 36.8447 66.6231 45.9541 64.7923 56.9252C59.7389 87.2066 58.0131 102 59.5325 102C59.7633 102 63.5205 100.293 67.8817 98.2088C74.1469 95.2139 75.9458 94.6476 76.4354 95.5213C76.8912 96.3303 77.0507 96.1882 77.03 94.9877C76.9888 92.3947 80.5077 80.5009 82.7605 75.6179C91.9017 55.811 108.905 54.9501 109.48 74.2626L109.613 78.7318L111.939 77.2917C113.218 76.4991 117.726 74.2314 121.956 72.2523C130.385 68.3083 130.27 68.4854 128.84 61.6684C123.685 37.1125 96.9922 34.3631 85.7693 57.2322C83.438 61.9855 83.4657 61.7137 87.2194 43.5094C91.8788 20.9122 88.137 15.1805 72.6988 21.2767ZM152.606 43.8987C147.031 46.4154 146.665 46.8335 147.623 49.5933C148.046 50.8228 148.451 53.4776 148.52 55.4939C148.59 57.5122 148.787 59.1619 148.959 59.1619C149.131 59.1619 153.535 57.1126 158.748 54.6082C163.96 52.1038 168.605 50.2153 169.068 50.411C171.186 51.3027 169.331 43.9604 167.108 42.6547C164.578 41.1657 157.272 41.7938 152.606 43.8987Z'
                  fill='#5B637D'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M339.3 43.9884C323.137 48.7351 315.515 59.5779 318.929 72.9722C320.477 79.0564 331.124 88.0147 336.34 87.6262C337.063 87.5707 337.655 87.9185 337.655 88.3958C337.655 88.953 338.047 88.9078 338.748 88.2752C339.349 87.7305 344.401 85.1665 349.976 82.5765L360.11 77.8687L357.337 76.5397C355.811 75.8101 352.121 74.3156 349.138 73.2179C336.118 68.4303 334.418 62.1171 344.794 57.1001C350.267 54.4544 352.304 54.3275 353.243 56.5759C359.326 71.1252 378.612 70.3757 378.612 55.5909C378.612 44.7604 357.699 38.5885 339.3 43.9884ZM425.582 43.243C425.582 43.7201 425.26 43.8941 424.87 43.63C422.273 41.8812 408.829 48.7044 402.945 54.7555L399.034 58.7772L401.975 57.612C405.659 56.152 432.488 43.3126 432.983 42.772C433.184 42.5529 431.599 42.3748 429.465 42.3748C427.233 42.3748 425.582 42.7434 425.582 43.243ZM302.533 48.5098C301.833 49.8736 282.995 58.9881 282.11 58.3922C281.8 58.1834 281.612 58.8264 281.693 59.8195C281.772 60.8106 281.52 62.0618 281.133 62.5983C280.746 63.1348 280.506 64.2406 280.6 65.0557C280.694 65.8707 280.562 67.0911 280.308 67.7668C277.738 74.5957 274.46 109.659 276.091 112.869C277.131 114.916 277.269 115.348 277.451 117.118C277.523 117.804 277.738 117.855 278.108 117.271C278.699 116.341 294.09 109.021 294.875 109.295C295.132 109.386 295.555 104.778 295.818 99.0568C296.269 89.1987 297.144 82.0785 299.694 67.56C300.306 64.0666 301.274 58.4926 301.845 55.1711C302.414 51.8497 303.115 48.7166 303.403 48.2109C303.69 47.703 303.754 47.2893 303.541 47.2893C303.331 47.2893 302.879 47.8381 302.533 48.5098ZM244.842 76.7602C239.469 79.3753 234.887 81.3947 234.66 81.2475C234.433 81.0995 234.207 81.784 234.16 82.7689C234.111 83.7538 233.538 87.8756 232.884 91.93C230.648 105.816 231.498 115.146 235.338 118.874C238.598 122.042 248.771 121.305 253.105 117.588L254.909 116.042L253.335 113.133C251.3 109.375 252.322 76.7217 254.599 72.7039C255.198 71.6494 256.231 71.2193 244.842 76.7602ZM181.392 106.979C167.574 113.608 156.15 119.411 156.008 119.878C155.845 120.417 158.103 120.756 162.166 120.806C165.87 120.852 168.404 120.57 168.158 120.138C167.925 119.726 168.211 119.587 168.791 119.831C170.112 120.384 178.333 116.497 178.333 115.32C178.333 114.844 178.698 114.455 179.143 114.455C179.588 114.455 181.195 113.074 182.713 111.384C185.922 107.812 187.237 107.291 187.305 109.557C187.331 110.45 187.37 111.959 187.391 112.914C187.561 120.235 197.584 123.453 205.991 118.887C210.314 116.54 210.389 116.405 208.744 113.843C207.618 112.092 205.982 101.35 206.841 101.35C207.079 101.35 207.306 99.8752 207.346 98.0733C207.385 96.2715 207.214 94.8278 206.966 94.8625C206.718 94.8995 195.208 100.353 181.392 106.979Z'
                  fill='#5B637D'
                />
              </svg>
            </div>
          </div>

          <div
            className='all-projects-content shadow-pj'
            style={{ marginTop: "7vh" }}
            id='div2-content'
          >
            <div
              style={{
                width: "62%",
                backgroundColor: "gainsboro",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                overflowY: "hidden",
              }}
              id='div2-allpj'
              className='div-allpj-text'
            >
              <div
                style={{
                  fontWeight: "600",
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  marginTop: "12%",
                }}
                className='title-overlayall'
              >
                HappiList
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#949494",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                  userSelect: "none",
                }}
                className='three-overlay'
              >
                Fullstack Developer{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                Group Project{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                2022
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#545454",
                  textAlign: "center",
                  marginTop: "20px",
                }}
                className='desc-overlay-1'
              >
                Positivity and producivity was our goal with HappiList. Jealousy
                and envy is the objective of every social media app to keep you
                on your screen for the longest time possible...
              </div>

              <div
                className='visit-website-project-2 visitweb-but'
                onClick={() => {
                  document.body.style.overflow = "auto";
                  history("/happilist");
                }}
              >
                View Project
              </div>

              <svg
                width='621'
                height='171'
                viewBox='0 0 621 171'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  opacity: 0.2,
                  position: "absolute",
                  bottom: -20,
                  right: 50,
                }}
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.5208 3.9264C-0.13233 6.48218 -0.989256 123.821 2.61415 128.149C11.3641 138.656 15.478 128.31 15.478 95.7973V68.7306L21.0853 61.9968C30.132 51.1328 46.0837 52.8784 53.9436 65.5916C56.7978 70.2096 57.4028 75.1081 58.2249 100.252C59.2443 131.403 61.1869 136.409 69.1694 128.453C72.1794 125.454 72.5225 81.4498 69.6434 67.7195C64.6511 43.9133 41.872 33.3577 21.8063 45.5534L15.7681 49.2239L15.2095 27.4101C14.573 2.45543 12.2625 -2.18837 3.5208 3.9264ZM423.666 5.04306C419.986 9.46194 420.631 108.24 424.398 117.205C429.082 128.348 444.104 134.419 449.867 127.498C454.162 122.34 450.181 114.771 443.144 114.711C437.234 114.661 436.897 111.956 436.037 57.6635C435.127 0.16637 433.498 -6.76251 423.666 5.04306ZM384.91 7.72823C383.097 9.90781 381.611 13.0269 381.611 14.6611C381.611 23.3038 392.219 28.3079 397.025 21.9323C404.971 11.3867 393.279 -2.32173 384.91 7.72823ZM469.389 6.85042C464.944 10.5905 464.639 17.82 468.74 22.2767C474.564 28.6064 482.629 24.1856 482.629 14.6611C482.629 5.26998 475.951 1.33081 469.389 6.85042ZM588.098 14.0659C586.948 15.4493 586.119 22.0776 586.119 29.9122C586.119 42.6593 585.917 43.3798 582.311 43.3798C571.776 43.3798 570.266 55.0978 580.523 57.2575L585.295 58.2607L586.119 84.9849C587.211 120.372 593.513 131.72 611.195 130.139C623.593 129.03 624.248 116.315 611.971 115.059C601.413 113.978 599.314 108.288 599.314 80.7432V57.2435H607.612C621.818 57.2435 621.238 44.8886 606.978 43.766L599.314 43.1628V29.8027C599.314 13.3573 594.415 6.48218 588.098 14.0659ZM124.328 40.7703C100.824 45.4021 87.3257 70.4703 93.0109 98.9263C98.7475 127.645 127.837 140.908 146.863 123.481C153.465 117.432 153.682 117.45 154.318 124.088C154.914 130.31 160.692 132.575 165.003 128.278C169.808 123.489 167.496 74.4334 161.93 63.0259C155.77 50.4042 137.659 37.486 129.275 39.7372C128.823 39.8586 126.597 40.3224 124.328 40.7703ZM218.336 41.5983C207.682 44.0904 198.668 52.4903 193.227 64.9985L188.589 75.6575L189.032 121.198C189.429 162.068 189.769 166.961 192.36 168.922C199.117 174.037 200.982 168.679 201.481 142.691C201.736 129.464 202.343 118.642 202.829 118.642C203.314 118.642 206.09 120.82 208.996 123.481C221.646 135.07 242.594 133.105 253.193 119.337C279.34 85.3791 255.781 32.8402 218.336 41.5983ZM315.946 41.5406C303.26 44.5303 292.932 55.048 287.883 70.126C284.427 80.4486 285.972 166.125 289.667 168.922C296.424 174.037 298.287 168.679 298.788 142.691C299.043 129.464 299.648 118.642 300.135 118.642C300.621 118.642 303.396 120.82 306.301 123.481C326.397 141.887 357.165 125.211 360.729 93.9819C364.501 60.9299 342.584 35.2626 315.946 41.5406ZM525.922 41.2699C498.125 49.397 499.127 79.2603 527.529 89.1709C550.438 97.1667 554.103 100.676 549.107 109.83C544.25 118.734 528.149 118.943 517.208 110.248C507.992 102.923 498.961 108.576 504.555 118.168C511.225 129.604 536.613 134.888 550.66 127.766C571.034 117.436 567.919 87.8473 545.712 80.7492C526.094 74.4811 521.243 72.007 519.923 67.5941C516.27 55.3765 535.487 50.5913 549.268 60.291C561.639 68.9974 567.918 60.8264 557.388 49.7235C549.659 41.5764 536.745 38.105 525.922 41.2699ZM385.649 43.9252C385.205 45.3146 385.042 65.1458 385.288 87.9946L385.735 129.534L389.536 130.183C397.628 131.56 398.105 129.11 398.105 86.1155C398.105 57.6735 397.533 45.4678 396.125 43.7759C393.509 40.6329 386.67 40.7305 385.649 43.9252ZM469.422 43.6903C467.924 45.4897 467.374 56.9052 467.374 86.1155C467.374 129.11 467.85 131.56 475.941 130.183L479.742 129.534V85.9623V42.3886L475.608 41.8093C473.334 41.4889 470.551 42.3368 469.422 43.6903ZM142.154 59.2718C152.726 67.0128 156.525 85.0745 150.776 100.28C142.423 122.378 116.13 122.378 107.776 100.28C97.022 71.8278 120.709 43.5709 142.154 59.2718ZM239.284 59.1445C250.205 67.1402 253.984 89.0117 246.84 102.867C236.839 122.267 213.809 121.22 205.209 100.973C193.434 73.257 217.768 43.3878 239.284 59.1445ZM335.705 58.7284C357.17 73.8999 348.249 116.662 323.617 116.662C299.303 116.662 290 76.2248 310.526 59.7595C317.397 54.2459 328.707 53.7841 335.705 58.7284Z'
                  fill='black'
                />
              </svg>
            </div>
            <div
              style={{ height: "100%", width: "38%", position: "relative" }}
              id='image2-allpj'
            ></div>
          </div>

          <div
            className='all-projects-content shadow-pj'
            style={{ marginTop: "7vh", marginBottom: "10vh" }}
            id='div3-content'
          >
            <div
              style={{
                height: "100%",
                width: "38%",
                position: "relative",
                zIndex: 20,
              }}
              id='image3-allpj'
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  left: 0,
                  top: 0,
                  backgroundColor: "black",
                  zIndex: 2,
                  height: "100%",
                  opacity: 0.5,
                }}
                className='shadow-img'
              />
            </div>
            <div
              style={{
                width: "62%",
                backgroundColor: "gainsboro",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
              }}
              id='div3-allpj'
              className='div-allpj-text'
            >
              <div
                style={{
                  fontWeight: "600",
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  marginTop: "12%",
                }}
                className='title-overlayall'
              >
                Personal Website
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#949494",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                  userSelect: "none",
                }}
                className='three-overlay'
              >
                Fullstack Developer{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                Personal Project{" "}
                <svg
                  viewBox='0 0 29 28'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='dot-allpj'
                >
                  <circle cx='14' cy='14' r='4' fill='#949494' />
                </svg>
                2022
              </div>

              <div
                style={{
                  fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                  color: "#545454",
                  textAlign: "center",
                  marginTop: "20px",
                }}
                className='desc-overlay-1'
              >
                My personal website was a solo project. I wanted to display
                myself and my skills outside of a black and white resume. The
                website showcases animations, my current projects, a short
                biography, and a form of contact.
              </div>

              <div
                className='visit-website-project-3 visitweb-but'
                onClick={() => {
                  document.body.style.overflow = "auto";
                  history("/personal");
                }}
              >
                View Project
              </div>
            </div>
          </div>

          <div style={{ height: "10vh", width: "100%" }} />
        </div>
      </div>
      {/*end of overlay*/}
      {/* start of main*/}
      <div
        style={{
          width: "100%",
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#1b1f2d",
          position: "relative",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
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
          className='nav-projects'
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
            className='animation-fade-top'
            id='logo-bullseye'
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
            <path
              d='M30.8159 34.2365L30.8159 25.8616'
              className='logo-color2'
            />
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
            style={{ marginRight: "2vw" }}
            className='all-projects-p animation-fade-top'
            id='home-bullseye'
            onClick={() => history("/")}
          >
            Home
          </div>
          <div
            style={{ marginRight: "8vw" }}
            className='all-projects-p animation-fade-top'
            id='all-projects-bullseye'
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
        <div style={{ display: "flex", flexDirection: "column", zIndex: 2 }}>
          <div
            style={{ fontWeight: "600", color: "white" }}
            className='animation-fade-bot namefor-projects'
            id='name--bullseye'
          >
            Bullseye Store
          </div>

          <div
            style={{ fontStyle: "italic", color: "white" }}
            className='animation-fade-bot desctop-forprojects'
            id='desc--bullseye'
          >
            Fullstack E-commerce store built from scratch
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
            zIndex: 2,
          }}
        >
          <div
            style={{ color: "#00BFFF" }}
            className='font-projects animation-fade-bot'
            id='role-bullseye'
          >
            Role: <span style={{ color: "white" }}>Fullstack Developer</span>
          </div>

          <div
            style={{
              marginRight: "10vw",
              marginLeft: "10vw",
              color: "#00BFFF",
            }}
            className='font-projects animation-fade-bot'
            id='context-bullseye'
          >
            Context:{" "}
            <span style={{ color: "white" }}>
              Group Project / Project Rebuild
            </span>
          </div>

          <div
            style={{ color: "#00BFFF" }}
            className='font-projects animation-fade-bot'
            id='period-bullseye'
          >
            Period: <span style={{ color: "white" }}> July - August 2022</span>
          </div>
        </div>

        <svg
          width='1124'
          height='935'
          viewBox='0 0 1324 1085'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            position: "absolute",
            left: -50,
            top: -30,
            zIndex: 0,
            opacity: 0.1,
          }}
        >
          <g filter='url(#filter0_d_25_7)'>
            <path
              d='M1154 542.5C1154 813.948 933.724 1034 662 1034C390.276 1034 170 813.948 170 542.5C170 271.052 390.276 51 662 51C933.724 51 1154 271.052 1154 542.5Z'
              fill='#40465A'
            />
          </g>
          <ellipse cx='660' cy='540.5' rx='301' ry='302.5' fill='#1B1F2D' />
          <ellipse cx='658.5' cy='541' rx='159.5' ry='159' fill='#40465A' />
          <defs>
            <filter
              id='filter0_d_25_7'
              x='166'
              y='51'
              width='992'
              height='991'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_25_7'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_25_7'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#2d3963",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5vh",
          position: "relative",
          zIndex: 3,
          overflow: "hidden",
          paddingBottom: "5vh",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            color: "white",
            userSelect: "none",
          }}
          className='intro-secondsection-title'
          id='introduction-bullseye'
        >
          Introduction
        </div>

        <div
          style={{
            color: "white",
            marginTop: "38px",
            lineHeight: 1.5,
          }}
          className='intro-secondsection-desc'
          id='intro-desc-bullseye'
        >
          Bullseye is an E-commerce store inspired by the famous Gopuff's
          website and business model. Order daily essentials and snacks in
          seconds, get it delivered right to your door in minutes.
        </div>

        <a
          href='https://snack-website2.herokuapp.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='visit-website-project visitweb-but'
        >
          <div>View Website</div>
        </a>

        <svg
          width='1179'
          height='343'
          viewBox='0 0 1179 343'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            position: "absolute",
            bottom: -120,
            right: -140,
            opacity: 0.2,
            zIndex: 0,
          }}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1020.3 90.8627C991.491 98.4735 968.694 128.311 962.537 166.466C953.589 221.91 972.408 255.562 1012.36 255.562C1030.32 255.562 1032.03 255.144 1045.02 247.559C1065.29 235.721 1070.91 205.094 1054.4 196.4C1044.39 191.122 1042.19 192.324 1039.62 204.481C1031.16 244.551 996.488 238.229 996.488 196.609V189.159L1012.03 187.23C1051.08 182.384 1073.64 162.843 1075.5 132.252C1077.54 98.7608 1054.83 81.7367 1020.3 90.8627ZM925.061 116.051L909.85 125.168L910.283 130.902C910.584 134.873 910.253 136.258 909.205 135.404C908.318 134.681 907.826 135.147 908.021 136.523C910.918 156.991 884.91 236.787 876.696 232.638C870.419 229.464 867.145 210.163 866.735 173.924C866.451 148.828 866.438 148.736 863.68 151.005C862.155 152.259 854.957 156.626 847.682 160.705C830.592 170.297 831.128 169.213 831.935 192.655C833.221 229.938 843.158 254.665 856.868 254.695C861.051 254.708 851.951 261.549 842.602 265.424C828.238 271.376 814.789 268.328 807.071 257.369C803.232 251.917 800.652 253.807 797.233 264.579C784.34 305.219 838.009 318.303 876.385 283.88C907.095 256.328 940.213 183.486 942.808 137.764C943.103 132.626 943.648 127.249 944.025 125.812C945.487 120.226 944.283 107.578 942.256 107.256C941.165 107.081 933.427 111.039 925.061 116.051ZM1040.53 120.174C1046.19 126.875 1045.75 138.474 1039.41 149.524C1031.93 162.595 995.906 175.082 998.538 163.692C1006.58 128.917 1028.63 106.062 1040.53 120.174ZM773.285 203.1C768.742 206.022 765.094 209.222 765.174 210.215C765.524 214.412 764.909 216.35 763.358 215.94C762.449 215.701 761.787 216.876 761.89 218.553C761.989 220.229 761.209 221.601 760.157 221.601C759 221.601 758.619 222.463 759.195 223.778C759.717 224.975 759.674 225.393 759.099 224.709C757.773 223.137 752.806 226.516 753.686 228.393C754.046 229.155 752.532 229.851 750.323 229.934C748.117 230.017 745.607 230.831 744.747 231.741C742.889 233.718 734.609 233.082 733.432 230.87C732.039 228.258 729.116 229.172 716.402 236.208C705.36 242.317 701.785 245.591 705.489 246.201C708.006 246.614 708.809 246.984 711.597 249.031C713.138 250.163 714.775 250.589 715.234 249.984C715.694 249.379 716.071 249.884 716.071 251.103C716.071 252.392 716.931 252.888 718.124 252.283C719.252 251.713 719.854 251.935 719.46 252.771C718.481 254.861 731.137 256.755 742.816 256.267C769.836 255.144 790.094 236.735 790.137 213.267C790.147 208.203 786.459 200.701 783.96 200.701C782.911 200.701 782.419 199.918 782.868 198.96C784.029 196.487 782.624 197.092 773.285 203.1Z'
            fill='#5b637d'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M437.288 43.4457C435.641 43.8637 434.629 44.9217 435.043 45.8012C435.456 46.6807 434.943 46.9724 433.908 46.4456C432.873 45.9231 431.2 46.5849 430.192 47.9129C429.183 49.2409 427.619 50.0072 426.716 49.611C425.813 49.2147 424.712 50.1247 424.272 51.6356C423.833 53.1464 423.072 54.0607 422.583 53.6602C422.093 53.2596 420.268 54.3481 418.525 56.081L415.361 59.2246L420.38 68.2243C426.24 78.7349 426.319 74.333 419.319 127.552C413.036 175.35 413.059 175.107 414.924 173.16C416.515 171.501 447.198 153.676 448.462 153.676C448.849 153.676 448.809 154.891 448.376 156.38C447.942 157.865 448.141 158.635 448.812 158.087C449.487 157.538 450.049 155.736 450.062 154.077C450.079 152.418 451.262 144.01 452.694 135.389C468.048 42.9188 466.881 35.9568 437.288 43.4457ZM513.034 44.6604C506.731 47.2946 494.34 55.4409 493.315 57.6266C492.918 58.4757 494.896 63.4088 497.713 68.5901L502.835 78.0078L500.987 91.8928C499.972 99.534 498.861 109.374 498.523 113.767C498.183 118.161 497.535 123.255 497.078 125.088C496.566 127.147 496.685 127.639 497.382 126.381C498.229 124.848 531.34 104.911 533.033 104.911C533.202 104.911 533.595 105.891 533.906 107.088C534.217 108.286 534.273 107.619 534.028 105.604C533.784 103.592 533.985 101.415 534.481 100.766C535.619 99.2641 535.708 98.7634 538.605 77.9163C543.112 45.4354 535.341 35.3298 513.034 44.6604ZM359.585 91.0089C359.128 91.9798 358.149 92.2846 357.409 91.6794C355.785 90.3601 345.709 96.0726 345.709 98.3106C345.709 99.1814 345.16 99.4469 344.489 98.8983C343.818 98.3497 341.129 99.5645 338.517 101.593L333.765 105.286L336.655 111.629C338.246 115.117 340.557 119.876 341.794 122.205C343.838 126.054 343.867 127.395 342.148 137.009C341.106 142.822 338.5 158.944 336.358 172.834C334.215 186.723 332.184 199.72 331.841 201.714C330.567 209.142 320.809 221.233 312.965 225.099C287.827 237.482 282.639 210.792 296.739 141.607C297.437 138.185 298.329 131.079 298.723 125.81C299.12 120.542 299.659 113.715 299.923 110.641L300.403 105.046L296.273 107.332C293.998 108.59 285.512 113.388 277.417 117.995L262.692 126.372V133.491C262.689 137.41 262.348 141.79 261.931 143.227C261.197 145.765 260.5 150.506 256.303 181.542C249.032 235.288 260.166 262.596 283.541 248.35C288.27 245.472 309.202 233.372 330.055 221.472C365.332 201.335 367.971 199.524 367.931 195.475C367.908 193.08 370.368 177.405 373.397 160.643C383.549 104.445 383.797 101.062 378.364 93.1554C375.457 88.9233 361.321 87.308 359.585 91.0089ZM212.134 155.583C195.088 165.449 193.451 166.821 194.479 170.348C194.876 171.715 194.638 172.834 193.947 172.834C193.256 172.834 191.94 176.147 191.017 180.196C185.551 204.217 164.024 225.892 140.482 231.077L135.645 232.144L135.192 222.517C134.94 217.219 135.135 212.886 135.628 212.886C136.118 212.891 136.326 210.148 136.091 206.791C135.853 203.438 136.197 200.255 136.852 199.72C137.506 199.189 138.042 197.865 138.042 196.781C138.042 195.697 137.298 196.058 136.389 197.591C135.479 199.119 128.092 204.109 119.97 208.676L105.202 216.983L105.748 224.294C107.471 247.466 117.097 256.431 140.248 256.431C183.98 256.431 218.702 224.185 227.246 175.642C229.158 164.766 229.624 146.649 227.987 146.753C227.623 146.775 220.491 150.75 212.134 155.583ZM324.215 233.59C322.214 236.115 320.578 238.823 320.578 239.603C320.578 240.386 322.436 238.579 324.708 235.588C329.747 228.953 329.308 227.167 324.215 233.59Z'
            fill='#5b637d'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M737.955 105.24C723.438 113.66 709.692 121.367 707.407 122.36C705.109 123.357 702.424 126.283 701.395 128.908C700.373 131.516 698.482 135.191 697.189 137.072C695.899 138.953 695.135 141.5 695.496 142.732C695.853 143.964 695.612 144.97 694.96 144.97C691.111 144.97 687.738 165.16 687.685 188.51C687.626 214.882 689.196 222.027 698.254 236.583L702.873 244.006L716.239 236.308C723.59 232.076 730.131 229.037 730.773 229.564C732.965 231.345 731.953 228.21 728.686 223.103C724.791 217.007 722.701 207.933 722.691 197.079L722.684 189.098L737.565 187.13C784.28 180.956 810.017 151.531 800.497 115.189C797.461 103.594 786.099 90.4273 782.008 93.7538C781.02 94.5593 780.835 94.2371 781.486 92.8481C782.164 91.407 781.688 90.8105 780.038 91.0412C778.685 91.2285 777.28 91.1849 776.916 90.9454C771.685 87.5145 763.047 90.6799 737.955 105.24ZM829.163 91.4592C826.981 92.6304 823.876 94.5854 822.262 95.8002L819.329 98.0076L823.175 105.984C828.029 116.068 829.759 126.648 830.757 152.341C831.346 167.55 831.921 172.183 833.003 170.45C834.491 168.068 862.36 151.501 865.042 151.41C867.096 151.336 865.995 125.913 863.415 113.882C859.07 93.6058 843.78 83.5959 829.163 91.4592ZM914.102 93.7407C910.62 96.1267 908.067 98.7043 908.428 99.475C908.788 100.241 909.188 106.372 909.317 113.099L909.552 125.329L925.537 115.955C934.33 110.8 942.276 106.96 943.199 107.425C944.892 108.283 944.826 106.337 942.884 98.3124C940.54 88.6161 925.147 86.1691 914.102 93.7407ZM770.041 129.801C771.043 149.812 758.295 162.843 733.266 167.389C722.698 169.309 723.058 169.818 726.276 157.409C736.206 119.116 768.487 98.7522 770.041 129.801ZM617.637 174.573C595.693 186.899 595.349 187.256 602.608 190.26C623.394 198.868 629.406 206.161 623.897 216.093C613.524 234.793 584.298 231.554 571.504 210.28C568.624 205.491 565.958 201.964 565.578 202.443C565.201 202.922 562.817 205.813 560.284 208.869C557.245 212.536 555.955 215.379 556.494 217.234C557.027 219.058 556.789 219.615 555.82 218.823C551.878 215.618 555.595 235.655 560.066 241.734C573.253 259.646 615.303 261.967 639.181 246.096C665.523 228.589 668.231 188.336 644.336 169.514C641.621 167.376 638.847 166.078 638.166 166.627C637.488 167.18 636.734 166.866 636.489 165.93C636.245 164.998 627.763 168.887 617.637 174.573ZM767.012 197.157C766.506 199.251 766.44 201.42 766.863 201.977C767.287 202.539 766.972 204.045 766.162 205.33C764.109 208.586 765.174 208.299 773.804 203.275C782.147 198.415 782.055 196.317 773.414 194.501C768.543 193.478 767.826 193.774 767.012 197.157ZM733.266 230.208C733.266 231.806 739.837 234.432 740.766 233.208C741.08 232.79 739.523 231.619 737.3 230.6C735.082 229.581 733.266 229.407 733.266 230.208ZM505.421 238.877C492.706 246.005 487.316 251.861 493.209 252.14C493.926 252.174 495.778 253.128 497.319 254.26C506.952 261.318 531.088 249.728 524.587 241.168C523.205 239.348 522.213 236.605 522.381 235.072C522.937 230.087 519.865 230.775 505.421 238.877Z'
            fill='#5b637d'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M128.918 45.7214C124.993 47.5805 119.186 51.325 116.015 54.0419L110.251 58.9794L115.549 68.3274C118.462 73.4695 120.846 77.9541 120.846 78.2937C120.846 78.6334 118.207 97.8911 114.98 121.085C106.071 185.102 103.029 216.377 105.708 216.377C106.114 216.377 112.738 212.767 120.426 208.361C131.471 202.03 134.642 200.833 135.505 202.679C136.309 204.39 136.59 204.09 136.554 201.551C136.481 196.07 142.684 170.925 146.656 160.602C162.77 118.729 192.746 116.909 193.758 157.737L193.993 167.185L198.093 164.142C200.348 162.466 208.295 157.672 215.751 153.488C230.612 145.15 230.407 145.524 227.887 131.112C218.8 79.1994 171.745 73.3868 151.96 121.734C147.85 131.783 147.899 131.208 154.516 92.723C162.73 44.9508 156.133 32.8335 128.918 45.7214ZM269.785 93.5459C259.957 98.8665 259.312 99.7503 260.998 105.585C261.746 108.184 262.46 113.796 262.582 118.059C262.705 122.326 263.052 125.813 263.356 125.813C263.657 125.813 271.422 121.481 280.611 116.187C289.801 110.892 297.988 106.9 298.805 107.313C302.539 109.199 299.268 93.6765 295.35 90.916C290.889 87.7681 278.009 89.0961 269.785 93.5459Z'
            fill='#5b637d'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M598.6 92.6673C570.152 102.76 556.736 125.814 562.744 154.294C565.469 167.23 584.209 186.278 593.388 185.451C594.662 185.334 595.703 186.074 595.703 187.088C595.703 188.273 596.394 188.177 597.628 186.831C598.686 185.673 607.578 180.222 617.389 174.714L635.226 164.704L630.345 161.879C627.66 160.329 621.166 157.15 615.914 154.816C592.998 144.637 590.006 131.213 608.269 120.546C617.902 114.921 621.486 114.651 623.14 119.431C633.847 150.367 667.791 148.773 667.791 117.337C667.791 94.3087 630.983 81.1857 598.6 92.6673ZM750.462 91.0824C750.462 92.0969 749.896 92.467 749.208 91.9053C744.638 88.187 720.975 102.695 710.618 115.561L703.736 124.112L708.912 121.635C715.396 118.53 762.617 91.2305 763.487 90.081C763.841 89.6151 761.053 89.2363 757.297 89.2363C753.368 89.2363 750.462 90.02 750.462 91.0824ZM533.886 102.281C532.656 105.181 499.498 124.56 497.941 123.293C497.395 122.849 497.065 124.216 497.207 126.328C497.346 128.435 496.903 131.096 496.221 132.237C495.54 133.377 495.117 135.728 495.282 137.461C495.447 139.194 495.216 141.789 494.77 143.226C490.246 157.747 484.476 232.3 487.346 239.123C489.178 243.477 489.419 244.396 489.74 248.158C489.866 249.616 490.246 249.725 490.897 248.484C491.936 246.508 519.025 230.942 520.407 231.525C520.86 231.717 521.604 221.92 522.067 209.755C522.861 188.795 524.402 173.656 528.889 142.786C529.967 135.358 531.67 123.507 532.675 116.445C533.677 109.382 534.911 102.721 535.417 101.645C535.923 100.565 536.035 99.6859 535.662 99.6859C535.291 99.6859 534.494 100.853 533.886 102.281ZM432.347 162.349C422.89 167.909 414.824 172.202 414.424 171.889C414.024 171.575 413.627 173.029 413.545 175.124C413.459 177.218 412.45 185.982 411.299 194.603C407.364 224.128 408.859 243.965 415.618 251.893C421.355 258.629 439.262 257.062 446.89 249.159L450.065 245.872L447.294 239.685C443.713 231.695 445.511 162.266 449.519 153.724C450.574 151.481 452.393 150.567 432.347 162.349ZM320.67 226.601C296.348 240.695 276.243 253.034 275.992 254.027C275.704 255.172 279.679 255.895 286.831 255.999C293.349 256.099 297.81 255.499 297.377 254.58C296.967 253.705 297.469 253.409 298.491 253.927C300.816 255.102 315.286 246.838 315.286 244.335C315.286 243.325 315.928 242.498 316.712 242.498C317.495 242.498 320.323 239.559 322.994 235.966C328.642 228.373 330.957 227.263 331.076 232.083C331.123 233.981 331.192 237.19 331.228 239.219C331.526 254.785 349.168 261.629 363.966 251.92C371.575 246.93 371.707 246.643 368.81 241.196C366.829 237.473 363.949 214.632 365.46 214.632C365.88 214.632 366.28 211.497 366.35 207.665C366.419 203.834 366.118 200.764 365.682 200.838C365.245 200.917 344.988 212.511 320.67 226.601Z'
            fill='#5b637d'
          />
        </svg>
      </div>

      <div className='project-body-container'>
        <div
          style={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{ fontWeight: "600" }}
            className='title-thirdsection-projects'
          >
            The Project
          </div>
          <div
            style={{
              marginTop: "7vh",
              fontWeight: "600",
            }}
            className='sub-title-project subtitle-bullseye'
          >
            Frontend Rebuild with Additional Features
          </div>
          <div className='line-divider' />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            id='paragraph-container-bullseye'
          >
            <div className='p-desc-projects top2' style={{ marginTop: "30px" }}>
              Originally I built this project with a team of 4 as my Grace
              Shopper project for Fullstack Academy. Though acceptable for a
              week worth of work, I was unsatisfied with the final product as a
              presentable product.
            </div>

            <div className='p-desc-projects top2' style={{ marginTop: "30px" }}>
              I decided to rebuild the project to create a deployed and
              presentable final product without depending on a frontend library
              with prebuilt components, such as MaterialUI, and to strengthen my
              HTML & CSS skills.
            </div>
            <div className='line-divider' />
            <div
              style={{
                marginTop: "7vh",
              }}
              id='container-2-bullseye'
            >
              <div id='container-2child'>
                <div className='sub-title-project subtitle-bullseye2'>
                  Bullseye!
                </div>
                <div className='line-divider2' />
                <div className='p-desc-projects bottom2'>
                  I rewrote and resigned the whole frontend of Bullseye and
                  connected the new frontend to the backend. The new frontend
                  featured{" "}
                  <span style={{ color: "#00BFFF" }}>
                    simple animations, more products, and a fulfilling
                    e-commerce experience.
                  </span>
                </div>

                <div
                  className='p-desc-projects bottom2'
                  style={{ marginTop: "30px" }}
                >
                  Alongside the rebuilt frontend, I added more features. For
                  more payment options, I added paypal checkout. For easier
                  product navigation, I added a search feature, allowing
                  customers to find any product in our store in seconds.
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "60%",
                  marginTop: "3vh",
                  height: `${imageDivHeight}px`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1018796390622707712/unknown.png'
                  style={{
                    boxShadow: "0 0 10px lightgray",
                  }}
                  className='images-bullseye'
                  id='image1-bull'
                  ref={image1ref}
                />

                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1018796935697666089/unknown.png'
                  style={{
                    top: 0,
                    boxShadow: "0 0 10px lightgray",
                  }}
                  className='images-bullseye'
                  id='image2-bull'
                  ref={image2ref}
                />
              </div>
            </div>
            <h1 style={{ marginTop: "10vh" }} className='sub-title-project'>
              Tech Stack
            </h1>

            {/* tech stack start*/}
            <div className='techstack-container'>
              <Nodejs />
              <a
                href='https://reactjs.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='256px'
                  height='228px'
                  viewBox='0 0 256 228'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  preserveAspectRatio='xMidYMid'
                  className='tech-stack-icon'
                >
                  <g>
                    <path
                      d='M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z'
                      fill='#00D8FF'
                    ></path>
                  </g>
                </svg>
              </a>

              <a
                href='https://redux.js.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='256px'
                  height='244px'
                  viewBox='0 0 256 244'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  preserveAspectRatio='xMidYMid'
                  className='tech-stack-icon'
                >
                  <g>
                    <path
                      d='M177.380953,169.732752 C186.828305,168.755405 193.995262,160.610839 193.669491,150.83736 C193.34372,141.063881 185.199451,133.245097 175.426328,133.245097 L174.774787,133.245097 C164.675893,133.57088 156.857395,142.041229 157.183166,152.14049 C157.508937,157.02723 159.463561,161.262404 162.395498,164.194448 C151.319292,186.021884 134.379213,201.985233 108.969093,215.342321 C91.7032429,224.464235 73.7858511,227.722061 55.8684592,225.441583 C41.208775,223.486887 29.8067984,216.971234 22.6398417,206.220408 C12.2151773,190.257058 11.237865,172.990579 20.0336756,155.724099 C26.22332,143.344359 35.9964428,134.222445 42.1860873,129.661488 C40.8830043,125.426314 38.9283797,118.259096 37.9510674,113.046574 C-9.28569288,147.253751 -4.39913147,193.514885 9.934782,215.342321 C20.6852171,231.631453 42.5118581,241.730715 66.6188943,241.730715 C73.1343096,241.730715 79.6497248,241.079149 86.16514,239.450236 C127.863797,231.30567 159.463561,206.54619 177.380953,169.732752 Z M234.716607,129.335706 C209.958029,100.341051 173.471704,84.3777023 131.773046,84.3777023 L126.560714,84.3777023 C123.628777,78.5136149 117.439133,74.6042233 110.597947,74.6042233 L109.946406,74.6042233 C99.8475119,74.9300059 92.0290137,83.4003544 92.3547844,93.499616 C92.6805552,103.273095 100.824824,111.091878 110.597947,111.091878 L111.249489,111.091878 C118.416445,110.766096 124.60609,106.205139 127.212256,100.015269 L133.07613,100.015269 C157.834707,100.015269 181.290202,107.182487 202.465302,121.19114 C218.75384,131.941967 230.481587,145.95062 236.997002,162.891317 C242.535105,176.574188 242.209334,189.931276 236.345461,201.333668 C227.223879,218.600148 211.912654,228.047844 191.714866,228.047844 C178.684036,228.047844 166.304747,224.138452 159.789332,221.206409 C156.205854,224.464235 149.690438,229.676757 145.129648,232.934584 C159.13779,239.450236 173.471704,243.033845 187.154076,243.033845 C218.428069,243.033845 241.557793,225.767366 250.353603,208.500886 C259.800955,189.605493 259.149414,157.02723 234.716607,129.335706 Z M69.2250604,175.271057 C69.5508312,185.044536 77.6951002,192.86332 87.468223,192.86332 L88.1197645,192.86332 C98.2186581,192.537537 106.037156,184.067188 105.711386,173.967927 C105.385615,164.194448 97.2413458,156.375664 87.468223,156.375664 L86.8166815,156.375664 C86.16514,156.375664 85.1878277,156.375664 84.5362862,156.701447 C71.179685,134.548228 65.6415821,110.440313 67.5962066,84.3777023 C68.8992897,64.8307442 75.4147049,47.8900472 86.8166815,33.881394 C96.2640336,21.8274365 114.507196,15.9633491 126.886485,15.6375664 C161.418186,14.9860012 176.07787,57.9893089 177.055182,75.2557885 C181.290202,76.2331364 188.457159,78.5136149 193.34372,80.142528 C189.434471,27.3657413 156.857395,0 125.583402,0 C96.2640336,0 69.2250604,21.1758712 58.4746253,52.4510041 C43.4891703,94.1511813 53.2622932,134.222445 71.5054558,165.823361 C69.876602,168.103839 68.8992897,171.687448 69.2250604,175.271057 Z'
                      fill='#764ABC'
                    ></path>
                  </g>
                </svg>
              </a>

              <Html />
              <Css />

              <a
                href='https://expressjs.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='512px'
                  height='149px'
                  viewBox='0 0 512 149'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  preserveAspectRatio='xMidYMid'
                  className='tech-stack-icon'
                >
                  <g>
                    <path
                      d='M3.33224862,115.629027 L3.33224862,58.6475756 L74.4757566,58.6475756 L74.4757566,55.315327 L3.33224862,55.315327 L3.33224862,3.33224862 L78.9742922,3.33224862 L78.9742922,0 L-3.55271368e-15,0 L-3.55271368e-15,118.961276 L79.640742,118.961276 L79.640742,115.629027 L3.33224862,115.629027 L3.33224862,115.629027 Z M143.786528,33.3224862 L114.296128,72.1431826 L85.472177,33.3224862 L81.1402538,33.3224862 L112.296778,74.642369 L78.14123,118.961276 L82.1399284,118.961276 L114.296128,77.1415554 L146.618939,118.961276 L150.78425,118.961276 L116.462089,74.642369 L147.785226,33.3224862 L143.786528,33.3224862 L143.786528,33.3224862 Z M160.780996,148.285063 L160.780996,94.9690856 L161.114221,94.9690856 C163.11358,102.744371 167.056701,108.992275 172.943703,113.712984 C178.830705,118.433693 186.32819,120.794012 195.436381,120.794012 C201.323384,120.794012 206.543854,119.599969 211.09795,117.211845 C215.652046,114.823722 219.456324,111.574812 222.510902,107.465018 C225.565478,103.355224 227.898028,98.5790488 229.508624,93.1363488 C231.119218,87.6936488 231.924504,81.973346 231.924504,75.9752684 C231.924504,69.532889 231.09145,63.5904384 229.425318,58.1477384 C227.759184,52.7050384 225.343328,47.9844 222.177676,43.9856818 C219.012024,39.9869634 215.179976,36.8768958 210.681418,34.6553856 C206.18286,32.4338754 201.101232,31.323137 195.436381,31.323137 C191.104437,31.323137 187.07801,31.9618116 183.35698,33.23918 C179.635951,34.5165484 176.331504,36.3214982 173.443541,38.654084 C170.555577,40.9866696 168.056416,43.7357472 165.945981,46.9013992 C163.835546,50.0670512 162.224976,53.5381088 161.114221,57.3146762 L160.780996,57.3146762 L160.780996,33.3224862 L157.448747,33.3224862 L157.448747,148.285063 L160.780996,148.285063 L160.780996,148.285063 Z M195.436381,117.628376 C184.995284,117.628376 176.609208,114.046245 170.277904,106.881874 C163.9466,99.717504 160.780996,89.415405 160.780996,75.9752684 C160.780996,70.421493 161.558513,65.1454854 163.11357,60.1470876 C164.668627,55.1486896 166.917872,50.7612728 169.861373,46.9847054 C172.804874,43.2081382 176.442543,40.2091444 180.774487,37.9876342 C185.106432,35.766124 189.993681,34.6553856 195.436381,34.6553856 C200.990156,34.6553856 205.849638,35.766124 210.01497,37.9876342 C214.1803,40.2091444 217.62359,43.2359066 220.34494,47.0680118 C223.06629,50.9001168 225.121156,55.2875336 226.5096,60.2303938 C227.898044,65.173254 228.592256,70.421493 228.592256,75.9752684 C228.592256,80.9736664 227.95358,85.9442208 226.676212,90.887081 C225.398844,95.8299412 223.427284,100.272895 220.76147,104.216075 C218.095658,108.159256 214.680138,111.380398 210.514806,113.879596 C206.349474,116.378795 201.323384,117.628376 195.436381,117.628376 L195.436381,117.628376 L195.436381,117.628376 Z M250.251872,118.961276 L250.251872,70.4770582 C250.251872,65.8118868 250.918314,61.2578592 252.25122,56.814839 C253.584126,52.3718186 255.638992,48.4564656 258.41588,45.0686626 C261.192768,41.6808596 264.719362,39.0150872 268.99577,37.0712658 C273.272176,35.1274444 278.353806,34.322159 284.240808,34.6553856 L284.240808,31.323137 C279.131334,31.2120614 274.660612,31.7674308 270.828506,32.9892614 C266.996402,34.211092 263.691954,35.8771996 260.915066,37.9876342 C258.138178,40.098069 255.916702,42.569462 254.25057,45.4018874 C252.584436,48.2343128 251.362624,51.2610752 250.585096,54.4822648 L250.251872,54.4822648 L250.251872,33.3224862 L246.919622,33.3224862 L246.919622,118.961276 L250.251872,118.961276 L250.251872,118.961276 Z M288.406118,76.8083306 L360.049464,76.8083306 C360.271614,70.9213286 359.688476,65.2565626 358.300032,59.8138626 C356.911588,54.3711628 354.690112,49.5394506 351.635536,45.3185812 C348.580958,41.0977118 344.637838,37.7099596 339.806052,35.155223 C334.974268,32.6004862 329.226196,31.323137 322.561666,31.323137 C317.78542,31.323137 313.120318,32.3228016 308.566222,34.3221608 C304.012126,36.32152 300.013468,39.2372084 296.570126,43.0693134 C293.126786,46.9014184 290.34994,51.5942884 288.239506,57.1480638 C286.12907,62.7018392 285.07387,69.0330484 285.07387,76.1418808 C285.07387,82.473185 285.79585,88.387867 287.23983,93.8861048 C288.683812,99.3843424 290.90529,104.160518 293.904328,108.214774 C296.903366,112.26903 300.763182,115.406866 305.483892,117.628376 C310.204602,119.849886 315.897136,120.905088 322.561666,120.794012 C332.33631,120.794012 340.555776,118.044935 347.220306,112.546697 C353.884836,107.048459 357.827958,99.3010588 359.049788,89.304263 L355.71754,89.304263 C354.273558,98.7456812 350.580352,105.826639 344.637814,110.547348 C338.695274,115.268057 331.225558,117.628376 322.228442,117.628376 C316.119288,117.628376 310.954354,116.573175 306.733486,114.46274 C302.512616,112.352305 299.069326,109.464385 296.403514,105.798894 C293.737702,102.133402 291.766142,97.8292904 290.488774,92.8864302 C289.211404,87.94357 288.517194,82.5842572 288.406118,76.8083306 L288.406118,76.8083306 L288.406118,76.8083306 Z M356.717214,73.476082 L288.406118,73.476082 C288.739344,67.4780046 289.850082,62.0909232 291.738366,57.3146762 C293.62665,52.5384294 296.098044,48.4564656 299.15262,45.0686626 C302.207196,41.6808596 305.76156,39.0983926 309.815816,37.3211846 C313.870072,35.5439764 318.22972,34.6553856 322.89489,34.6553856 C328.448666,34.6553856 333.335916,35.6828186 337.556784,37.7377156 C341.777654,39.7926126 345.304248,42.597227 348.136674,46.1516434 C350.9691,49.7060596 353.107272,53.8435602 354.551252,58.5642694 C355.995234,63.2849786 356.717214,68.255533 356.717214,73.476082 L356.717214,73.476082 L356.717214,73.476082 Z M429.193622,58.6475756 L432.52587,58.6475756 C432.52587,49.0950818 429.749024,42.1529666 424.195248,37.8210218 C418.641474,33.489077 411.088452,31.323137 401.535958,31.323137 C396.204334,31.323137 391.705844,31.98958 388.040352,33.3224862 C384.37486,34.6553922 381.375866,36.3770368 379.04328,38.4874716 C376.710694,40.5979062 375.044586,42.930457 374.044908,45.4851936 C373.045228,48.0399304 372.545396,50.4835548 372.545396,52.8161406 C372.545396,57.481312 373.37845,61.2022858 375.044582,63.9791734 C376.710714,66.7560612 379.32095,68.9220012 382.875366,70.4770582 C385.319028,71.5878134 388.095874,72.587478 391.205988,73.476082 C394.316102,74.364686 397.926002,75.3088138 402.035796,76.3084934 C405.701288,77.1970974 409.311188,78.0856882 412.865604,78.9742922 C416.42002,79.8628962 419.557856,81.0569402 422.279206,82.5564594 C425.000556,84.0559788 427.222032,85.9720026 428.943704,88.3045884 C430.665374,90.637174 431.526196,93.6917048 431.526196,97.468272 C431.526196,101.133764 430.665374,104.243831 428.943704,106.798568 C427.222032,109.353305 425.028324,111.435939 422.362512,113.046534 C419.6967,114.657129 416.725474,115.823405 413.448748,116.545395 C410.17202,117.267386 406.978646,117.628376 403.868532,117.628376 C393.760662,117.628376 386.01326,115.379131 380.626098,110.880573 C375.238936,106.382015 372.545396,99.3010572 372.545396,89.6374878 L369.213146,89.6374878 C369.213146,100.411812 372.128836,108.298055 377.9603,113.296453 C383.791764,118.294851 392.427754,120.794012 403.868532,120.794012 C407.534024,120.794012 411.22723,120.377485 414.94826,119.544419 C418.669288,118.711353 422.001504,117.350698 424.945004,115.462415 C427.888506,113.574131 430.276594,111.130506 432.10934,108.131468 C433.942086,105.132429 434.858444,101.466992 434.858444,97.1350472 C434.858444,93.0252534 434.05316,89.693038 432.442564,87.1383014 C430.83197,84.5835646 428.721566,82.4731616 426.111292,80.807029 C423.501018,79.1408964 420.55756,77.8357786 417.280834,76.8916368 C414.004106,75.947495 410.699658,75.0311358 407.367394,74.1425318 C402.702222,72.9207012 398.620258,71.8654996 395.12138,70.9768956 C391.622502,70.0882914 388.373592,69.03309 385.374552,67.8112594 C382.48659,66.5894288 380.181808,64.8400158 378.460136,62.5629678 C376.738466,60.2859198 375.877644,57.03701 375.877644,52.8161406 C375.877644,52.038612 376.099792,50.650189 376.544094,48.6508298 C376.988396,46.6514706 378.043598,44.624373 379.70973,42.569476 C381.375862,40.5145792 383.93056,38.6818608 387.373902,37.0712658 C390.817242,35.460671 395.53788,34.6553856 401.535958,34.6553856 C405.645752,34.6553856 409.394494,35.099681 412.782298,35.988285 C416.1701,36.8768892 419.085788,38.2930806 421.52945,40.236902 C423.973112,42.1807234 425.861366,44.6521164 427.194272,47.6511552 C428.527178,50.650194 429.193622,54.3156308 429.193622,58.6475756 L429.193622,58.6475756 L429.193622,58.6475756 Z M506.335178,58.6475756 L509.667426,58.6475756 C509.667426,49.0950818 506.89058,42.1529666 501.336804,37.8210218 C495.783028,33.489077 488.230008,31.323137 478.677514,31.323137 C473.34589,31.323137 468.847398,31.98958 465.181906,33.3224862 C461.516416,34.6553922 458.517422,36.3770368 456.184836,38.4874716 C453.85225,40.5979062 452.186142,42.930457 451.186462,45.4851936 C450.186784,48.0399304 449.68695,50.4835548 449.68695,52.8161406 C449.68695,57.481312 450.520004,61.2022858 452.186138,63.9791734 C453.85227,66.7560612 456.462506,68.9220012 460.016922,70.4770582 C462.460582,71.5878134 465.237428,72.587478 468.347544,73.476082 C471.457658,74.364686 475.067558,75.3088138 479.177352,76.3084934 C482.842842,77.1970974 486.452742,78.0856882 490.00716,78.9742922 C493.561576,79.8628962 496.699412,81.0569402 499.420762,82.5564594 C502.142112,84.0559788 504.363588,85.9720026 506.085258,88.3045884 C507.80693,90.637174 508.667752,93.6917048 508.667752,97.468272 C508.667752,101.133764 507.80693,104.243831 506.085258,106.798568 C504.363588,109.353305 502.16988,111.435939 499.504068,113.046534 C496.838256,114.657129 493.86703,115.823405 490.590302,116.545395 C487.313576,117.267386 484.120202,117.628376 481.010088,117.628376 C470.902216,117.628376 463.154816,115.379131 457.767654,110.880573 C452.380492,106.382015 449.68695,99.3010572 449.68695,89.6374878 L446.354702,89.6374878 C446.354702,100.411812 449.27039,108.298055 455.101854,113.296453 C460.93332,118.294851 469.56931,120.794012 481.010088,120.794012 C484.67558,120.794012 488.368784,120.377485 492.089814,119.544419 C495.810844,118.711353 499.14306,117.350698 502.08656,115.462415 C505.030062,113.574131 507.418148,111.130506 509.250894,108.131468 C511.08364,105.132429 512,101.466992 512,97.1350472 C512,93.0252534 511.194714,89.693038 509.58412,87.1383014 C507.973524,84.5835646 505.863122,82.4731616 503.252848,80.807029 C500.642572,79.1408964 497.699116,77.8357786 494.422388,76.8916368 C491.145662,75.947495 487.841214,75.0311358 484.508948,74.1425318 C479.843778,72.9207012 475.761814,71.8654996 472.262936,70.9768956 C468.764056,70.0882914 465.515146,69.03309 462.516108,67.8112594 C459.628144,66.5894288 457.323362,64.8400158 455.601692,62.5629678 C453.880022,60.2859198 453.0192,57.03701 453.0192,52.8161406 C453.0192,52.038612 453.241348,50.650189 453.68565,48.6508298 C454.129952,46.6514706 455.185152,44.624373 456.851286,42.569476 C458.517418,40.5145792 461.072116,38.6818608 464.515458,37.0712658 C467.958798,35.460671 472.679436,34.6553856 478.677514,34.6553856 C482.787308,34.6553856 486.53605,35.099681 489.923852,35.988285 C493.311656,36.8768892 496.227344,38.2930806 498.671006,40.236902 C501.114666,42.1807234 503.002922,44.6521164 504.335828,47.6511552 C505.668734,50.650194 506.335178,54.3156308 506.335178,58.6475756 L506.335178,58.6475756 L506.335178,58.6475756 Z'
                      fill='#222222'
                    ></path>
                  </g>
                </svg>
              </a>

              <a
                href='https://www.postgresql.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='256px'
                  height='264px'
                  viewBox='0 0 256 264'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  preserveAspectRatio='xMidYMid'
                  className='tech-stack-icon'
                >
                  <g>
                    <path
                      d='M255.007926,158.085617 C253.473109,153.437413 249.452194,150.199279 244.251788,149.42182 C241.799982,149.055852 238.991667,149.211935 235.668988,149.897164 C229.877358,151.092028 225.580342,151.546679 222.44449,151.635363 C234.280794,131.650217 243.905921,108.859714 249.446873,87.4065589 C258.406282,52.7182633 253.61855,36.9154365 248.023797,29.7669469 C233.217182,10.8477783 211.614448,0.683454965 185.55152,0.371879908 C171.649478,0.202198614 159.443658,2.94725173 153.077358,4.92075751 C147.149155,3.87547344 140.774577,3.29134411 134.08606,3.18315012 C121.550337,2.9833164 110.473164,5.71595381 101.008259,11.332582 C95.7670577,9.56127483 87.3580785,7.06335335 77.6460416,5.46882217 C54.8035104,1.71868822 36.3939769,4.64110855 22.9282587,14.153903 C6.62230023,25.6721293 -0.937090069,45.6838799 0.461154734,73.6339954 C0.904572748,82.5082679 5.86908083,109.507695 13.6850624,135.114199 C18.1771824,149.831538 22.9672794,162.053912 27.9223279,171.443732 C34.9490254,184.758688 42.4676212,192.600092 50.9085266,195.415501 C55.6400924,196.992296 64.2358984,198.09552 73.2774873,190.566873 C74.4232794,191.953885 75.9515935,193.33321 77.9812656,194.613801 C80.5578199,196.239076 83.7090439,197.566965 86.8555381,198.353885 C98.1969885,201.189395 108.820102,200.479926 117.882975,196.506309 C117.93855,198.117986 117.981709,199.658125 118.018365,200.987788 C118.07867,203.145164 118.137792,205.259972 118.217016,207.237617 C118.753848,220.612286 119.663741,231.011326 122.359723,238.286928 C122.507529,238.687778 122.706771,239.29733 122.917247,239.943538 C124.261691,244.062005 126.511298,250.955677 132.232573,256.355326 C138.158411,261.947714 145.325229,263.663446 151.888998,263.662855 C155.180933,263.662855 158.322106,263.231261 161.076619,262.640628 C170.897441,260.536462 182.050291,257.329663 190.118134,245.84218 C197.745515,234.981986 201.453672,218.625182 202.124711,192.851363 C202.211621,192.122975 202.292028,191.427104 202.369478,190.763751 C202.421506,190.316194 202.474716,189.858587 202.528517,189.402162 L204.325838,189.560018 L204.788767,189.591353 C214.791095,190.047187 227.021155,187.925875 234.532065,184.437062 C240.467363,181.68255 259.485857,171.642383 255.007926,158.085617'
                      fill='#000000'
                    ></path>
                    <path
                      d='M237.905589,160.722476 C208.165838,166.857016 206.121386,156.78788 206.121386,156.78788 C237.521885,110.194697 250.64824,51.0516028 239.320388,36.5766651 C208.417109,-2.90823095 154.921977,15.7655797 154.029229,16.2503834 L153.741894,16.3018199 C147.866309,15.0821247 141.290716,14.3555104 133.900416,14.2349007 C120.443566,14.0143741 110.236083,17.7627344 102.490457,23.636545 C102.490457,23.636545 7.06039723,-15.6768961 11.4987159,73.0806097 C12.4429007,91.9631224 38.5625866,215.954032 69.7171363,178.502947 C81.1041109,164.808425 92.1061986,153.229303 92.1061986,153.229303 C97.5708822,156.859418 104.112776,158.711132 110.970975,158.046005 L111.503667,157.593718 C111.338125,159.294079 111.413801,160.957192 111.717099,162.925968 C103.691233,171.893062 106.049626,173.467492 90.0055797,176.770069 C73.7711594,180.115806 83.308194,186.072388 89.5349654,187.629081 C97.0837136,189.516859 114.54788,192.190965 126.34812,175.672166 L125.877506,177.556988 C129.022226,180.075603 131.230448,193.940397 130.860342,206.508637 C130.490236,219.077469 130.243104,227.706383 132.720924,234.446337 C135.198744,241.186291 137.668286,256.351187 158.759612,251.831871 C176.383409,248.055132 185.516046,238.268009 186.786587,221.94254 C187.688203,210.336222 189.728517,212.051954 189.857404,201.675381 L191.493912,196.762901 C193.381099,181.029838 191.793663,175.95418 202.651492,178.314938 L205.290125,178.546697 C213.2817,178.9103 223.741044,177.261376 229.879723,174.408129 C243.098309,168.273589 250.93794,158.031224 237.904406,160.722476 L237.905589,160.722476'
                      fill='#336791'
                    ></path>
                    <path
                      d='M108.076342,81.5250624 C105.396915,81.152 102.969349,81.4972748 101.741376,82.426679 C101.050236,82.9499122 100.836804,83.5559169 100.779455,83.973321 C100.625145,85.0783187 101.399649,86.2997875 101.874993,86.9300323 C103.220619,88.7137552 105.18703,89.9399538 107.133339,90.2101432 C107.415353,90.249164 107.695594,90.2680831 107.974651,90.2680831 C111.220471,90.2680831 114.170679,87.7411917 114.430818,85.8758799 C114.755991,83.5399538 111.36473,81.9826697 108.076342,81.5250624'
                      fill='#FFFFFF'
                    ></path>
                    <path
                      d='M196.860453,81.5989654 L196.859861,81.5989654 C196.604453,79.7679446 193.345626,79.2458938 190.253524,79.6757136 C187.166152,80.1061247 184.171603,81.4996397 184.421691,83.3347991 C184.622707,84.7620139 187.19867,87.198448 190.249386,87.1978568 C190.506568,87.1978568 190.766707,87.1807113 191.028619,87.1440554 C193.064794,86.8620416 194.558818,85.5690346 195.268286,84.8235012 C196.349635,83.688351 196.974559,82.4219492 196.860453,81.5989654'
                      fill='#FFFFFF'
                    ></path>
                    <path
                      d='M247.802088,160.025423 C246.66812,156.596323 243.018494,155.492508 236.954309,156.745312 C218.949173,160.461155 212.501284,157.886965 210.38352,156.327908 C224.378975,135.007187 235.89188,109.236323 242.102688,85.1906513 C245.04521,73.8007206 246.670485,63.2231316 246.802919,54.601903 C246.949543,45.1375889 245.338457,38.1842032 242.014005,33.9362587 C228.611547,16.8108637 208.942115,7.62501617 185.131751,7.37256351 C168.763122,7.18869284 154.93321,11.3781062 152.252009,12.5558245 C146.60582,11.1516674 140.450587,10.2896628 133.750245,10.1796952 C121.461654,9.98104388 110.840314,12.9229746 102.045857,18.9191686 C98.2259584,17.4978661 88.3536998,14.10897 76.2814965,12.1644342 C55.4089238,8.80332564 38.8233164,11.3497275 26.9870115,19.7350577 C12.8638522,29.740933 6.34383372,47.626642 7.60727945,72.8943741 C8.03236952,81.3961755 12.8756767,107.547788 20.5202032,132.593219 C30.5822448,165.556915 41.5192979,184.218309 53.0280647,188.056536 C54.374873,188.505866 55.9286097,188.820397 57.6407945,188.820397 C61.8390762,188.820397 66.9856813,186.927889 72.3409885,180.490051 C81.2359538,169.788896 89.5408776,160.821801 92.6022356,157.563566 C97.1262818,159.992314 102.09552,161.347991 107.179455,161.483972 C107.188323,161.616998 107.201921,161.750023 107.213746,161.882457 C106.193885,163.092102 105.357303,164.152166 104.644286,165.05733 C101.122365,169.528166 100.389247,170.458753 89.0519353,172.793497 C85.8273995,173.458624 77.2611547,175.224018 77.1364065,181.227898 C76.9998337,187.787529 87.2605266,190.542633 88.4299677,190.834697 C92.5040924,191.854559 96.4286374,192.357691 100.171677,192.357691 C109.275344,192.357099 117.285838,189.365506 123.688203,183.576831 C123.490734,206.962697 124.466254,230.006836 127.273977,237.028212 C129.573247,242.775501 135.191649,256.822984 152.93842,256.821801 C155.54158,256.821801 158.408425,256.519095 161.561423,255.843326 C180.082106,251.872074 188.124527,243.686577 191.236139,225.640055 C192.901025,215.995418 195.758411,192.963695 197.101672,180.610069 C199.937774,181.49454 203.589173,181.899529 207.536185,181.898938 C215.768388,181.898938 225.266993,180.150097 231.224166,177.384942 C237.91564,174.277469 249.991982,166.650679 247.802088,160.025423 L247.802088,160.025423 Z M203.696185,76.5445912 C203.634697,80.1918522 203.132748,83.5027067 202.600647,86.9590023 C202.028342,90.6760277 201.435935,94.5189838 201.286947,99.1843326 C201.139732,103.724342 201.706716,108.444674 202.255372,113.008924 C203.363326,122.228471 204.500249,131.720573 200.098587,141.086744 C199.41454,139.871778 198.754143,138.546254 198.14873,137.078245 C197.601848,135.752129 196.414079,133.621949 194.769885,130.673515 C188.370476,119.197857 173.385312,92.3243603 181.056443,81.3583372 C183.340933,78.0935982 189.139658,74.7384018 203.696185,76.5445912 L203.696185,76.5445912 Z M186.052286,14.7581339 C207.386014,15.2293395 224.261321,23.2102725 236.209958,38.4780416 C245.373931,50.1890069 235.282919,103.476028 206.069949,149.446651 C205.781432,149.080092 205.487594,148.709986 205.183704,148.33042 C205.062503,148.178476 204.938938,148.024166 204.814189,147.868083 C212.362938,135.400942 210.886651,123.066236 209.572952,112.129774 C209.033164,107.641792 208.523529,103.402716 208.653007,99.4214134 C208.787215,95.2000739 209.34533,91.5811917 209.884527,88.0811455 C210.548471,83.7675751 211.223058,79.3050162 211.036822,74.0437136 C211.17576,73.4921016 211.231926,72.8399815 211.159206,72.0660693 C210.683861,67.0205635 204.924157,51.9224758 193.18363,38.2551501 C186.762346,30.7808961 177.396767,22.4156674 164.609774,16.7736166 C170.109931,15.6337367 177.631483,14.5707159 186.052286,14.7581339 L186.052286,14.7581339 Z M66.6741062,175.777995 C60.7742818,182.871501 56.6995658,181.512277 55.3598522,181.065903 C46.6292471,178.153533 36.499806,159.702023 27.568776,130.441755 C19.8408868,105.123769 15.3245266,79.6650716 14.9674273,72.5260416 C13.8387806,49.9483788 19.3117413,34.2129515 31.2349561,25.7572656 C50.6389284,11.9965266 82.5413764,20.2328684 95.3602956,24.4104573 C95.1758337,24.591963 94.9842771,24.7622356 94.8015889,24.9466975 C73.7664296,46.1911501 74.2654226,82.4875751 74.3168591,84.7058476 C74.3150855,85.56194 74.3866236,86.7739492 74.485358,88.4412009 C74.8471871,94.5455889 75.5205912,105.907732 73.7214965,118.775132 C72.0489238,130.732046 75.7346143,142.435326 83.8320185,150.883917 C84.6703741,151.758337 85.5453857,152.579547 86.4493672,153.352277 C82.8446744,157.212379 75.0115473,165.74788 66.6741062,175.777995 L66.6741062,175.777995 Z M89.1530346,145.78461 C82.6265127,138.975483 79.6627067,129.503483 81.020157,119.795584 C82.920351,106.202753 82.2185681,94.3646744 81.8419584,88.0048776 C81.7893395,87.1150855 81.7426328,86.335261 81.7148453,85.7197968 C84.7880277,82.9954365 99.0288406,75.3645081 109.184296,77.6915658 C113.819492,78.7534042 116.642587,81.9087667 117.816758,87.3373857 C123.893358,115.440037 118.621413,127.153367 114.385293,136.565654 C113.512055,138.504868 112.687298,140.337663 111.982559,142.234309 L111.436859,143.699954 C110.054577,147.406337 108.768665,150.851991 107.971695,154.124416 C101.034273,154.103132 94.2848591,151.139917 89.1530346,145.78461 L89.1530346,145.78461 Z M90.2178291,183.685025 C88.1922956,183.178938 86.3701432,182.299788 85.3012102,181.570808 C86.1939584,181.150448 87.7831686,180.579326 90.5388637,180.011751 C103.876286,177.265515 105.93552,175.328074 110.433552,169.61685 C111.465238,168.30788 112.634088,166.823316 114.252859,165.015353 C114.25345,165.014171 114.254042,165.01358 114.254633,165.012988 C116.666236,162.31346 117.768868,162.771067 119.768979,163.600554 C121.390115,164.271594 122.968684,166.303039 123.608979,168.539048 C123.911686,169.594975 124.252231,171.599815 123.138956,173.158873 C113.742633,186.31479 100.051067,186.1457 90.2178291,183.685025 L90.2178291,183.685025 Z M160.016554,248.637487 C143.700545,252.133395 137.923695,243.80837 134.116804,234.291436 C131.659677,228.146845 130.452397,200.440314 131.309081,169.84388 C131.320314,169.436527 131.262374,169.043363 131.150042,168.673848 C131.05249,167.96024 130.902319,167.238356 130.694208,166.511741 C129.419529,162.059824 126.315012,158.335704 122.5903,156.792018 C121.110467,156.178919 118.393792,155.05382 115.129644,155.888628 C115.826106,153.0206 117.033386,149.782467 118.341764,146.275326 L118.891012,144.79963 C119.509432,143.136517 120.284527,141.413691 121.105145,139.590356 C125.538143,129.741746 131.609423,116.25297 125.020231,85.7795104 C122.551871,74.3659307 114.310208,68.7924619 101.815871,70.0866513 C94.3250624,70.861746 87.472776,73.8840831 84.0549099,75.6169607 C83.3200185,75.9894319 82.6477968,76.3488961 82.0199169,76.6994919 C82.9735612,65.1990023 86.578254,43.707418 100.060527,30.1098568 C108.54873,21.548933 119.854115,17.3210901 133.628453,17.5487113 C160.768591,17.9933118 178.172453,31.9213672 187.994457,43.5276859 C196.457829,53.5294226 201.040998,63.6038799 202.870245,69.0372286 C189.115418,67.6389838 179.76048,70.3544758 175.017681,77.1340416 C164.700822,91.8815335 180.662097,120.506236 188.333229,134.262836 C189.739751,136.784406 190.954125,138.963067 191.336055,139.888924 C193.833977,145.943058 197.067972,149.984665 199.429321,152.935464 C200.152979,153.839446 200.855353,154.716231 201.389229,155.481866 C197.223464,156.683233 189.740342,159.457848 190.422023,173.328554 C189.872185,180.289035 185.960647,212.874938 183.974134,224.387843 C181.351464,239.597672 175.754346,245.263372 160.016554,248.637487 L160.016554,248.637487 Z M228.120831,170.700564 C223.861062,172.678208 216.732083,174.161589 209.959612,174.479667 C202.479446,174.830263 198.671963,173.641903 197.776259,172.91115 C197.355307,164.267455 200.573339,163.364065 203.978199,162.408055 C204.513256,162.257293 205.035307,162.111261 205.53903,161.935076 C205.852379,162.189894 206.195289,162.442938 206.570716,162.690661 C212.582873,166.658956 223.306494,167.087002 238.444785,163.962383 C238.50036,163.950559 238.555935,163.939917 238.610919,163.928684 C236.569423,165.837746 233.075289,168.400111 228.120831,170.700564 L228.120831,170.700564 Z'
                      fill='#FFFFFF'
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            {/* tech stack end*/}
          </div>
        </div>
      </div>
      <div className='next-project' onClick={() => history("/happilist")}>
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
            <div className='color-change-next1'>Next Project</div>
            <div className='color-change-next2'>HappiList</div>
          </div>
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
            }}
            className='svg-arrow-container'
          >
            <svg
              width='67'
              height='33'
              viewBox='0 0 67 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M61.09 17.6L40.0772 31.317L41.875 33L67 16.4538L41.875 0L40.0744 1.6808L61.0928 15.4H0V17.6H61.09Z'
                id='path-fill-arrow'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bullseye;
