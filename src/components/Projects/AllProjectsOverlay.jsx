import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import gsap from "gsap";

import "./Projects.scss";
import BullseyeLogo3 from "./longstuff/BullseyeLogo3";
import HappiListOverlaySvg from "./longstuff/HappiListOverlaySvg";

const AllProjectsOverlay = ({ show, setShow }) => {
  const history = useNavigate();
  const loc = useLocation();

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

    gsap.to("#div4-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "-100%",
      delay: 0.9,
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

    gsap.to("#image4-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "100%",
      delay: 0.7,
    });

    gsap.to("#image4-allpj", {
      opacity: 0,
      duration: 0.4,
      ease: "power1",
      x: "100%",
      delay: 0.9,
    });
  }

  return (
    <div
      className="all-projects-div"
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
        className="containerfor-overlay"
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
          className="visit-website-project-1"
          id="close-button-allpj"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "10px" }}
          >
            <g clipPath="url(#clip0_37_28)">
              <line
                x1="-0.646447"
                y1="-0.353553"
                x2="31.3536"
                y2="31.6464"
                stroke="white"
                strokeWidth={1.5}
              />
              <line
                x1="-3.35355"
                y1="28.6464"
                x2="28.6464"
                y2="-3.35355"
                stroke="white"
                strokeWidth={1.5}
              />
            </g>
            <defs>
              <clipPath id="clip0_37_28">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Close
        </div>
        <div
          className="all-projects-content shadow-pj"
          id="div1-content"
          style={{ marginTop: "9vh" }}
        >
          <div
            style={{
              height: "100%",
              width: "38%",
              position: "relative",
              zIndex: 20,
            }}
            id="image1-allpj"
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
              className="shadow-img"
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
            id="div1-allpj"
            className="div-allpj-text"
          >
            <div
              style={{
                fontWeight: "600",
                fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                marginTop: "12%",
              }}
              className="title-overlayall"
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
              className="three-overlay"
            >
              Fullstack Developer{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
              </svg>
              Project Redesign{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
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
              className="desc-overlay-1"
            >
              Bullseye is an E-commerce store inspired by the famous Gopuff's
              website and business model. Originally a project built by a team
              of 4 including me, I decided to rebuild the frontend...
            </div>

            <div
              className="visit-website-project-1 visitweb-but"
              onClick={
                loc.pathname === "/bullseye"
                  ? () => {
                      document.body.style.overflow = "auto";
                      fadeOutAllProjects();
                      setTimeout(() => {
                        setShow(false);
                      }, 1000);
                    }
                  : () => history("/bullseye")
              }
            >
              View Project
            </div>

            <BullseyeLogo3 />
          </div>
        </div>

        <div
          className="all-projects-content shadow-pj"
          style={{ marginTop: "7vh" }}
          id="div2-content"
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
            id="div2-allpj"
            className="div-allpj-text"
          >
            <div
              style={{
                fontWeight: "600",
                fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                marginTop: "12%",
              }}
              className="title-overlayall"
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
              className="three-overlay"
            >
              Fullstack Developer{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
              </svg>
              Group Project{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
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
              className="desc-overlay-1"
            >
              Positivity and producivity was our goal with HappiList. Jealousy
              and envy is the objective of every social media app to keep you on
              your screen for the longest time possible...
            </div>

            <div
              className="visit-website-project-2 visitweb-but"
              onClick={
                loc.pathname === "/happilist"
                  ? () => {
                      document.body.style.overflow = "auto";
                      fadeOutAllProjects();
                      setTimeout(() => {
                        setShow(false);
                      }, 1000);
                    }
                  : () => history("/happilist")
              }
            >
              View Project
            </div>

            <HappiListOverlaySvg />
          </div>
          <div
            style={{ height: "100%", width: "38%", position: "relative" }}
            id="image2-allpj"
          ></div>
        </div>

        <div
          className="all-projects-content shadow-pj"
          style={{ marginTop: "7vh" }}
          id="div3-content"
        >
          <div
            style={{
              height: "100%",
              width: "38%",
              position: "relative",
              zIndex: 20,
            }}
            id="image3-allpj"
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
              className="shadow-img"
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
            id="div3-allpj"
            className="div-allpj-text"
          >
            <div
              style={{
                fontWeight: "600",
                fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                marginTop: "12%",
              }}
              className="title-overlayall"
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
              className="three-overlay"
            >
              Fullstack Developer{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
              </svg>
              Personal Project{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
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
              className="desc-overlay-1"
            >
              My personal website was a solo project. I wanted to display myself
              and my skills outside of a black and white resume.
            </div>

            <div
              className="visit-website-project-3 visitweb-but"
              onClick={
                loc.pathname === "/personal"
                  ? () => {
                      document.body.style.overflow = "auto";
                      fadeOutAllProjects();
                      setTimeout(() => {
                        setShow(false);
                      }, 1000);
                    }
                  : () => history("/personal")
              }
            >
              View Project
            </div>
          </div>
        </div>

        <div
          className="all-projects-content shadow-pj"
          style={{ marginTop: "7vh" }}
          id="div3-content"
        >
          <div
            style={{
              width: "62%",
              backgroundColor: "gainsboro",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              position: "relative",
            }}
            id="div4-allpj"
            className="div-allpj-text"
          >
            <div
              style={{
                fontWeight: "600",
                fontFamily: "League Spartan,Helvetica,Arial,sans-serif",
                marginTop: "12%",
              }}
              className="title-overlayall"
            >
              Mycha Chicago
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
              className="three-overlay"
            >
              Fullstack Developer{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
              </svg>
              Freelance{" "}
              <svg
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dot-allpj"
              >
                <circle cx="14" cy="14" r="4" fill="#949494" />
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
              className="desc-overlay-1"
            >
              Mycha Chicago provides popular asian drinks at many locations
              across Chicagoland. No more waiting, grab and go at their machines
              in less than a minute.
            </div>

            <div
              className="visit-website-project-4 visitweb-but"
              onClick={
                loc.pathname === "/mycha"
                  ? () => {
                      document.body.style.overflow = "auto";
                      fadeOutAllProjects();
                      setTimeout(() => {
                        setShow(false);
                      }, 1000);
                    }
                  : () => history("/mycha")
              }
            >
              View Project
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "38%",
              position: "relative",
              zIndex: 20,
            }}
            id="image4-allpj"
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
              className="shadow-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsOverlay;
