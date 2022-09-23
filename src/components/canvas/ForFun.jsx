import React from "react";
import { useEffect } from "react";

const skills = [
  { href: "#git_", title: "React.js" },
  { href: "#json_", title: "Express.js" },
  { href: "#solidity_", title: "Redux.js" },
  { href: "#html_", title: "HTML" },
  { href: "#react", title: "CSS" },
  { href: "#scss", title: "SCSS" },
  { href: "#SQL", title: "SQL" },
  { href: "#ReactNative", title: "React Native" },
  { href: "#Git", title: "Git" },
  { href: "#Github", title: "Github" },
  { href: "#PostgresSQL", title: "PostgreSQL" },
  { href: "#JSON", title: "JSON" },
  { href: "#GSAP", title: "GSAP" },
  { href: "#NoSQL", title: "NoSQL" },
  { href: "#npm", title: "npm" },
  { href: "#figma", title: "Figma" },
  { href: "#svg", title: "SVG" },
];

const ForFun = () => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    if (!TagCanvas) return;
    const tagCanvasOptions = {
      textColour: "#08FDD8",
      outlineThickness: 0.5,
      outlineColour: "#FE0853",
      maxSpeed: 0.06,
      shape: "sphere",
      zoom: 1.06,
      wheelZoom: false,
      noSelect: true,
      freezeDecel: false,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 0.8,
      paused: false,
      weight: true,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
    }
  }, [window.TagCanvas]);
  return (
    <div className='container-sphere' style={{ width: "100%" }}>
      <canvas
        id='tagcanvas'
        width='600'
        height='500'
        style={{
          maxWidth: "1000px",
          width: "100%",
          zIndex: "4",
          position: "relative",
          margin: "0 auto",
          // paddingTop: "10vh",
        }}
        className='to-fade-in fast-anim'
      ></canvas>
      <div id='taglist' style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForFun;
