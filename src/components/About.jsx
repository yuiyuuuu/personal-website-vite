import React, { useEffect, useRef } from "react";
import ForFun from "./canvas/ForFun";

const About = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "black",
        paddingTop: "50px",
      }}
    >
      <div style={{ color: "white", fontSize: "40px", fontWeight: "600" }}>
        About Me
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
            color: "white",
          }}
        >
          I'm a fullstack developer with one year of experience. I decided to
          pursue a bootcamp route due to my passion for computer science and
          software engineering rather than spending my time on Gened classes in
          college
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
