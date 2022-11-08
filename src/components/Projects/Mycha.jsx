import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

import "./Projects.scss";
import "../Main.scss";
import AllProjectsOverlay from "./AllProjectsOverlay";

import $ from "jquery";

import { gsap } from "gsap";

import Sass from "../longsvgs/Sass";
import Logo from "../longsvgs/Logo";
import React2 from "../longsvgs/React2";
import Nodejs from "../longsvgs/Nodejs";
import Html from "../longsvgs/Html";
import MychaSvg from "./longstuff/MychaSvg";
import LeafSvg from "./longstuff/LeafSvg";
import Gsap from "../longsvgs/Gsap";
import Jquery from "../longsvgs/Jquery";

const Mycha = () => {
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
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflow = "auto";
  }, []);
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <AllProjectsOverlay show={show} setShow={setShow} />
      {/* start of main*/}
      <div className="mycha-maincontainer">
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
        <div style={{ display: "flex", flexDirection: "column", zIndex: 2 }}>
          <div
            style={{ fontWeight: "600", color: "white" }}
            className="animation-fade-bot namefor-projects"
            id="name--bullseye"
          >
            Mycha Chicago
          </div>

          <div
            style={{ fontStyle: "italic", color: "white" }}
            className="animation-fade-bot desctop-forprojects"
            id="desc--bullseye"
          >
            Business Website for the Milk Tea ATM
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
            className="font-projects animation-fade-bot"
            id="role-bullseye"
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
            id="context-bullseye"
          >
            Context: <span style={{ color: "white" }}>Freelance</span>
          </div>

          <div
            style={{ color: "#00BFFF" }}
            className="font-projects animation-fade-bot"
            id="period-bullseye"
          >
            Period:{" "}
            <span style={{ color: "white" }}> October - November 2022</span>
          </div>
        </div>

        <MychaSvg />
      </div>

      <div className="mycha-introduction">
        <LeafSvg />

        <div
          style={{
            fontWeight: "600",
            color: "white",
            userSelect: "none",
          }}
          className="intro-secondsection-title"
          id="introduction-bullseye"
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
          Mycha Chicago provides popular asian drinks at many locations across
          Chicagoland. No more waiting, grab and go at their machines in less
          than a minute.
        </div>

        <a
          href="https://mychamachine.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="visit-website-project visitweb-but"
        >
          <div>View Website</div>
        </a>
      </div>

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
            Design and Develop
          </div>
          <div className="line-divider" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            id="paragraph-container-bullseye"
          >
            <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
              As the solo developer for this project, my goal was to use familar
              technologies to create a business website with animations and a
              theme that fits the business.
            </div>

            <div className="p-desc-projects top2" style={{ marginTop: "30px" }}>
              Alongside, my client wanted to display stock inventory outside of
              plain text. My solution was a small hover animation with each
              drink. By utilizing jQuery's each method, I was able to easily
              align the text with each drink. Check it out{" "}
              <span>
                <a
                  style={{ color: "black", textDecoration: "underline" }}
                  href="https://mychamachine.herokuapp.com/locations/check"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </span>
            </div>
            <div className="line-divider" />

            <div
              className="sub-title-project subtitle-bullseye"
              style={{ marginTop: "30px" }}
            >
              UI Components
            </div>

            <div>Awaiting work completion</div>
            <h1 style={{ marginTop: "10vh" }} className="sub-title-project">
              Tech Stack
            </h1>

            {/* tech stack start*/}
            <div className="techstack-container">
              <Nodejs />
              <React2 />
              <Html />
              <Sass />
              <Gsap />
              <Jquery />
            </div>
            {/* tech stack end*/}
          </div>
        </div>
      </div>
      <div className="next-project4" onClick={() => history("/bullseye")}>
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
            <div className="color-change-next2">Bullseye</div>
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

export default Mycha;
