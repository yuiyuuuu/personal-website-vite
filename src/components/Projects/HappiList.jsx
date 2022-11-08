import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./Projects.scss";
import "../Main.scss";

import { gsap } from "gsap";

import $ from "jquery";

import Logo from "../longsvgs/Logo";
import React2 from "../longsvgs/React2";
import Css from "../longsvgs/Css";
import Expo from "../longsvgs/Expo";
import Firebase from "../longsvgs/Firebase";
import Figma from "../longsvgs/Figma";
import AllProjectsOverlay from "./AllProjectsOverlay";

const HappiList = () => {
  const history = useNavigate();

  const [show, setShow] = useState(false);

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
    const v = document.getElementById("name--happilist");
    const p = document.getElementById("desc--happilist");
    const i = document.getElementById("home-bullseye");
    const l = document.getElementById("all-projects-bullseye");
    const q = document.getElementById("logo-bullseye");
    const y = document.getElementById("role-happilist");
    const o = document.getElementById("context-happilist");
    const k = document.getElementById("period-happilist");
    const m = document.getElementById("img-happilist");
    setTimeout(() => {
      v.classList.remove("animation-fade-bot");
      p.classList.remove("animation-fade-bot");
      i.classList.remove("animation-fade-top");
      l.classList.remove("animation-fade-top");
      q.classList.remove("animation-fade-top");
      y.classList.remove("animation-fade-bot");
      o.classList.remove("animation-fade-bot");
      k.classList.remove("animation-fade-bot");
      m.classList.remove("animation-fade-bot");
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "auto";
  }, []);
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
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
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            top: 0,
          }}
          className="nav-projects"
        >
          <Logo />
          <div style={{ flexGrow: 1 }} />

          <div
            style={{ marginRight: "2vw" }}
            className="all-projects-p animation-fade-top"
            id="home-bullseye"
            onClick={() => history("/")}
          >
            Home
          </div>
          <div
            style={{ marginRight: "8vw" }}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "3vw",
            }}
          >
            <div
              style={{ fontWeight: "600", color: "white" }}
              id="name--happilist"
              className="animation-fade-bot namefor-projects"
            >
              HappiList
            </div>

            <div
              style={{ fontStyle: "italic", color: "white" }}
              id="desc--happilist"
              className="animation-fade-bot desctop-forprojects"
            >
              Social media app that promotes producivity and positivity
            </div>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/779278654714675232/1017874316760711258/phone_-removebg11111.png"
            id="img-happilist"
            className="animation-fade-bot"
          />
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
        >
          <div
            style={{ color: "#00BFFF" }}
            className="font-projects animation-fade-bot"
            id="role-happilist"
          >
            Role: <span style={{ color: "white" }}>Fullstack Developer</span>
          </div>

          <div
            style={{
              marginRight: "10vw",
              marginLeft: "10vw",
              color: "#00BFFF",
            }}
            className="font-projects animation-fade-bot"
            id="context-happilist"
          >
            Context: <span style={{ color: "white" }}>Group Project</span>
          </div>

          <div
            style={{ color: "#00BFFF" }}
            className="font-projects animation-fade-bot"
            id="period-happilist"
          >
            Period: <span style={{ color: "white" }}> July 2022</span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "centr",
          paddingTop: "5vh",
          position: "relative",
          zIndex: 3,
          overflow: "hidden",
          paddingBottom: "5vh",
        }}
        className="happilist-intro"
      >
        <div
          style={{ fontWeight: "600", color: "white" }}
          className="intro-secondsection-title"
        >
          Detox
        </div>

        <div
          style={{
            color: "white",
            marginTop: "38px",
          }}
          className="intro-secondsection-desc"
        >
          Positivity and producivity was our goal with HappiList. Jealousy and
          envy is the objective of every social media app to keep you on your
          screen for the longest time possible. But here at HappiList, we want
          you to detoxify your daily dopamine and help you reach your goals, one
          step at a time.
        </div>

        <a
          href="https://expo.dev/@happilist/happilist"
          target="_blank"
          rel="noopener noreferrer"
          className="visit-website-project visitweb-but"
        >
          <div>View Project</div>
        </a>
        <a
          href="https://www.youtube.com/watch?v=t8calbsEr3o"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="underline-fade-a video-showcase">Video Showcase</div>
        </a>

        <svg
          width="775"
          height="230"
          viewBox="0 0 775 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: -30,
            left: 50,
            zIndex: -1,
            opacity: 0.7,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.80198 5.13508C0.245215 8.56785 -0.82368 166.17 3.67106 171.983C14.5854 186.096 19.7169 172.199 19.7169 128.53V92.1761L26.7113 83.1316C37.9957 68.5397 57.8933 70.8843 67.6974 87.96C71.2576 94.1625 72.0123 100.742 73.0378 134.514C74.3093 176.354 76.7324 183.078 86.6895 172.392C90.444 168.363 90.872 109.26 87.2808 90.8179C81.0534 58.8429 52.6398 44.6654 27.6106 61.0459L20.0787 65.9758L19.382 36.677C18.5881 3.15937 15.706 -3.0779 4.80198 5.13508ZM528.874 6.63491C524.284 12.5701 525.088 145.242 529.788 157.284C535.631 172.25 554.368 180.404 561.557 171.108C566.914 164.181 561.948 154.014 553.171 153.934C545.798 153.867 545.379 150.234 544.306 77.3114C543.171 0.0848429 541.138 -9.22159 528.874 6.63491ZM480.532 10.2415C478.27 13.1689 476.417 17.3583 476.417 19.5532C476.417 31.1616 489.649 37.8827 495.643 29.3195C505.555 15.1553 490.97 -3.25702 480.532 10.2415ZM585.908 9.06244C580.363 14.0859 579.983 23.7961 585.098 29.782C592.363 38.2837 602.423 32.3459 602.423 19.5532C602.423 6.93969 594.093 1.64884 585.908 9.06244ZM733.98 18.7539C732.545 20.6119 731.512 29.5147 731.512 40.0376C731.512 57.1586 731.259 58.1264 726.763 58.1264C713.622 58.1264 711.738 73.8653 724.532 76.766L730.484 78.1135L731.512 114.008C732.874 161.537 740.735 176.779 762.791 174.656C778.256 173.167 779.072 156.089 763.758 154.402C750.589 152.95 747.971 145.306 747.971 108.311V76.7473H758.321C776.041 76.7473 775.318 60.1529 757.531 58.6451L747.971 57.835V39.8905C747.971 17.8021 741.859 8.56785 733.98 18.7539ZM155.492 54.6215C126.175 60.8427 109.337 94.5127 116.428 132.733C123.584 171.306 159.869 189.12 183.601 165.713C191.836 157.588 192.107 157.613 192.901 166.529C193.643 174.886 200.851 177.928 206.228 172.156C212.222 165.724 209.338 99.8356 202.395 84.5138C194.712 67.5612 172.121 50.2102 161.663 53.2339C161.099 53.397 158.322 54.0199 155.492 54.6215ZM272.754 55.7336C259.464 59.0809 248.221 70.363 241.434 87.1633L235.649 101.48L236.201 162.647C236.697 217.542 237.121 224.113 240.352 226.746C248.781 233.617 251.107 226.42 251.73 191.515C252.048 173.75 252.805 159.214 253.411 159.214C254.016 159.214 257.479 162.139 261.104 165.713C276.883 181.278 303.012 178.64 316.234 160.147C348.848 114.537 319.461 43.9703 272.754 55.7336ZM394.509 55.6561C378.685 59.6717 365.802 73.7985 359.504 94.0502C355.194 107.915 357.121 222.99 361.729 226.746C370.158 233.617 372.482 226.42 373.106 191.515C373.425 173.75 374.179 159.214 374.787 159.214C375.393 159.214 378.854 162.139 382.478 165.713C407.545 190.435 445.924 168.036 450.369 126.092C455.075 81.6986 427.736 47.2239 394.509 55.6561ZM656.424 55.2925C621.752 66.2084 623.001 106.319 658.43 119.63C687.005 130.37 691.576 135.083 685.344 147.378C679.287 159.337 659.203 159.618 645.555 147.94C634.06 138.101 622.794 145.694 629.772 158.578C638.092 173.937 669.76 181.035 687.282 171.469C712.695 157.594 708.811 117.852 681.11 108.319C656.639 99.8998 650.588 96.5766 648.942 90.6495C644.385 74.2396 668.356 67.8125 685.545 80.8404C700.977 92.5343 708.808 81.5596 695.674 66.6469C686.033 55.7042 669.925 51.0417 656.424 55.2925ZM481.454 58.859C480.9 60.7251 480.697 87.3611 481.003 118.05L481.561 173.843L486.302 174.715C496.396 176.565 496.991 173.274 496.991 115.526C496.991 77.3248 496.278 60.9309 494.52 58.6585C491.258 54.437 482.727 54.568 481.454 58.859ZM585.949 58.5435C584.08 60.9603 583.394 76.2928 583.394 115.526C583.394 173.274 583.987 176.565 594.081 174.715L598.822 173.843V115.321V56.795L593.665 56.017C590.829 55.5866 587.357 56.7255 585.949 58.5435ZM177.728 79.4716C190.914 89.8688 195.653 114.128 188.483 134.551C178.063 164.232 145.266 164.232 134.846 134.551C121.432 96.336 150.978 58.3831 177.728 79.4716ZM298.883 79.3005C312.506 90.0399 317.22 119.416 308.309 138.027C295.834 164.082 267.108 162.676 256.38 135.481C241.692 98.2556 272.045 58.1371 298.883 79.3005ZM419.156 78.7417C445.93 99.1191 434.803 156.554 404.078 156.554C373.749 156.554 362.145 102.242 387.748 80.1266C396.318 72.721 410.427 72.1008 419.156 78.7417Z"
            fill="#24252E"
          />
        </svg>
      </div>

      {/* start of main container */}
      <div className="project-body-container">
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
            Dopamine Detoxification
          </div>
          <div className="line-divider" />
          <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
            Unproductive and way too much screen time? Try HappiList's monthly
            28 tasks. Every task is structured to help you break your dopamine
            addiction. From reading to running, we want you{" "}
            <span style={{ color: "red" }}>
              to connect with yourself and others outside of your electronic
              devices.
            </span>
          </div>

          <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
            My role in this project was a fullstack developer. My main
            responsibilities were to build a NoSQL system with Firebase and
            design & build frontend components with React Native.
          </div>

          <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
            I build the{" "}
            <span style={{ color: "red" }}>
              chat feature, friends system, feed page, individual profile page,
              and more.
            </span>{" "}
            The most exciting part of this project was engineering the Firebase
            structure to ensure each feature is working as intended.
          </div>

          <div className="line-divider" />

          <div
            className="sub-title-project subtitle-bullseye"
            style={{ marginTop: "30px" }}
          >
            UI Components
          </div>

          <img
            src="https://cdn.discordapp.com/attachments/779278654714675232/1019138485216616468/Frame_2_2.png"
            style={{
              marginTop: "7vh",
              userSelect: "none",
            }}
            id="image1-happilist"
          />

          <img
            src="https://cdn.discordapp.com/attachments/779278654714675232/1019137435973718096/searc-removebg-preview.png"
            style={{
              userSelect: "none",
              marginTop: "20px",
            }}
            id="image2-happilist"
          />

          {/*Tech stack start */}
          <div className="sub-title-project" style={{ marginTop: "12vh" }}>
            Tech Stack
          </div>

          <div className="techstack-container">
            <Expo />

            <React2 />

            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Css />
            </a>

            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Firebase />
            </a>

            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma />
            </a>
          </div>
        </div>
      </div>
      <div className="next-project-2" onClick={() => history("/personal")}>
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
            <div className="color-change-next3">Next Project</div>
            <div className="color-change-next4">My Personal Website</div>
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

export default HappiList;
