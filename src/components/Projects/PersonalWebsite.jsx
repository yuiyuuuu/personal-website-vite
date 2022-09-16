import React, { useEffect } from "react";
import "./Projects.scss";

const PersonalWebsite = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#1b1f2d",
        }}
      >
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "65px", fontWeight: "600", color: "white" }}>
            My Personal Website
          </div>

          <div
            style={{ fontStyle: "italic", fontSize: "22px", color: "white" }}
          >
            Website with 4 moving blobs
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
        >
          <div style={{ color: "#00BFFF" }} className='font-projects'>
            Role: <span style={{ color: "white" }}>Fullstack Developer</span>
          </div>

          <div
            style={{
              marginRight: "10vw",
              marginLeft: "10vw",
              color: "#00BFFF",
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

          <div style={{ color: "#00BFFF" }} className='font-projects'>
            Period:{" "}
            <span style={{ color: "white" }}> September 2022 - Current</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;
