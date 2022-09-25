import React, { useEffect, useRef } from "react";
import ForFun from "./canvas/ForFun";

const About = () => {
  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        paddingTop: "10vh",
      }}
    >
      <div style={{ color: "#08FDD8", fontSize: "40px", fontWeight: "600" }}>
        Who I am
      </div>
      <div
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10vh",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#f89757",
              fontStyle: "italic",
            }}
            className='text-aboutme'
          >
            I'm a fullstack developer with one year of experience. I decided to
            pursue a bootcamp route rather than a four year college degree.
          </div>

          <div
            style={{
              color: "#08FDD8",
            }}
            className='text-aboutme'
          >
            I coded most of my project's frontend so far in React along with
            HTML5, CSS/SASS, and Javascript. For backend, I have used Express.js
            along with SQL (PostgreSQL) and NoSQL (Google Firebase).
          </div>

          <div
            style={{
              color: "#08FDD8",
            }}
            className='text-aboutme'
          >
            This website is my first attempt at a project with SVG and CSS
            animations with pseudo elements, GSAP, and other animation
            libraries.
          </div>

          <div
            style={{
              color: "#08FDD8",
            }}
            className='text-aboutme'
          >
            One of my favorite coding hobbies is trying new frontend javascript
            libraries and build random scraps with them.
          </div>

          <div
            style={{
              color: "#f89757",
            }}
            className='text-aboutme'
          >
            In a pursuit of becoming more knowledgable in every aspect of my
            life, I read non-fiction books. One of my favorite is{" "}
            <span>
              {" "}
              <a
                href='https://danariely.com/books/predictably-irrational/'
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  color: "#f89757",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
              >
                Predictably Irrational
              </a>{" "}
            </span>
            by Dan Ariely.
          </div>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ForFun />
        </div>
      </div>
    </div>
  );
};

export default About;
