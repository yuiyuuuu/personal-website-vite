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
          I originally went to Illinois Institute of Technology, but decided to
          pursue Fulstack Academy. I have a passion for computer science and
          software engineering, but not general education classes tht doesn't
          relate to my major.
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
