import React, { useEffect, useState } from "react";
import "./Projects.scss";
import $ from "jquery";
import { useNavigate } from "react-router";
import Html from "../longsvgs/Html";

import gsap from "gsap";
import Sass from "../longsvgs/Sass";
import Jquery from "../longsvgs/Jquery";
import Gsap from "../longsvgs/Gsap";

const PersonalWebsite = () => {
  const [show, setShow] = useState(false);

  const [showMeme, setShowMeme] = useState(false);

  const history = useNavigate();

  function fadeInAllProjects() {
    $("#div1-content").addClass("shadow-pj");
    $("#div2-content").addClass("shadow-pj");
    $("#div3-content").addClass("shadow-pj");

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
    $("#div1-content").removeClass("shadow-pj");
    $("#div2-content").removeClass("shadow-pj");
    $("#div3-content").removeClass("shadow-pj");
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
              <g clip-path='url(#clip0_37_28)'>
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
                  history("/bullseye");
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
            style={{ marginTop: "7vh" }}
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
                  fadeOutAllProjects();
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              >
                View Project
              </div>
            </div>
          </div>
        </div>
      </div>

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
            style={{ marginRight: "2vw", userSelect: "none" }}
            className='all-projects-p animation-fade-top'
            id='home-bullseye'
            onClick={() => history("/")}
          >
            Home
          </div>
          <div
            style={{ marginRight: "8vw", userSelect: "none" }}
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontWeight: "600", color: "white" }}
            className='namefor-projects animation-fade-bot'
            id='remove3'
          >
            Personal Website
          </div>

          <div
            style={{ fontStyle: "italic", color: "white" }}
            className='desctop-forprojects animation-fade-bot'
            id='remove2'
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
          className='animation-fade-bot'
          id='remove1'
        >
          <div
            style={{ color: "#00BFFF", userSelect: "none" }}
            className='font-projects'
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
            className='font-projects'
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
            className='font-projects'
          >
            Period:{" "}
            <span style={{ color: "white" }}>
              {" "}
              September 2022 - October 2022
            </span>
          </div>
        </div>
      </div>

      <div id='secondsection-personal'>
        <div
          style={{
            fontWeight: "600",
            color: "white",
            userSelect: "none",
          }}
          className='intro-secondsection-title'
          id='introduction-happilist'
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
          My personal website was a solo project. I wanted to display myself and
          my skills outside of a black and white resume. The website showcases
          animations, my current projects, a short biography, and a form of
          contact.
        </div>

        <div
          className='visit-website-project visitweb-but'
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

      <div className='project-body-container'>
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
            New Libraries
          </div>
          <div className='line-divider' />

          <div className='p-desc-projects top2' style={{ marginTop: "30px" }}>
            The frontend is built with React, SASS, jQuery, along with GSAP and
            Kute.js. The contact form uses an external service, formspree, to
            send messages directly to my email.
          </div>

          <div className='p-desc-projects top2' style={{ marginTop: "30px" }}>
            Alongside building a website for myself, I also wanted to try new
            javascript libraries. One of my favorite was Three.js because it was
            incredibly easy to make 3D animations and objects.{" "}
            <a
              href='https://codepen.io/scrubbydubby123/pen/ZEorRVP'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span style={{ color: "#545454", textDecoration: "underline" }}>
                Check out this solar system I made with Three.js
              </span>
            </a>
          </div>
          <h1 style={{ marginTop: "10vh" }} className='sub-title-project'>
            Tech Stack
          </h1>

          <div className='techstack-container'>
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

            <Html />

            <Sass />
            <Jquery />
            <Gsap />
          </div>
        </div>
      </div>
      <div className='next-project3' onClick={() => history("/bullseye")}>
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
            <div className='color-change-next2'>Bullseye</div>
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

export default PersonalWebsite;
