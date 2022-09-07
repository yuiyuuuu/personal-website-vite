import React, { useEffect } from "react";
import "./Main.scss";

const Projects = () => {
  const test = document.querySelector("#test");

  useEffect(() => {
    if (!test) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("intersecting!");
        }
      });
    });

    observer.observe(test);
  }, [test]);
  return (
    <div>
      <div
        style={{
          height: "150vh",
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "10vh",
        }}
        id='test'
      >
        <div
          style={{ fontSize: "37px", fontWeight: "600", marginBottom: "7vh" }}
        >
          My Latest Projects
        </div>
        <a href='/bullseye'>
          <div
            className='container-projects-img'
            id='first-project'
            style={{
              marginRight: "10vh",
              position: "relative",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/779278654714675232/1016802611824955472/edited_2.png'
              style={{ width: "100%", height: "100%" }}
            />

            <div
              style={{
                width: "100%",
                height: "100%",
                zIndex: 2,
                opacity: 0.5,
                position: "absolute",
                backgroundColor: "black",
                top: 0,
              }}
            />

            <div
              style={{
                position: "absolute",
                right: 50,
                bottom: 140,
                color: "white",
                zIndex: 3,
                userSelect: "none",
              }}
              id='name-bullseye'
            >
              Bullseye Store
            </div>
            <div
              style={{
                position: "absolute",
                right: 50,
                bottom: 115,
                color: "white",
                zIndex: 3,
                userSelect: "none",
                fontStyle: "italic",
              }}
              id='desc-bullseye'
            >
              Fullstack E-commerce store built from scratch
            </div>

            <div
              className='view-project-button'
              style={{
                position: "absolute",
                right: 50,
                bottom: 60,
                userSelect: "none",
              }}
              id='bullseye-view-but'
            >
              View Project
            </div>
          </div>
        </a>
        <a href='/happilist'>
          <div
            className='container-projects-img boxshadow-projects '
            style={{ marginLeft: "10vh", position: "relative" }}
            id='second-project'
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                zIndex: 2,
                opacity: 0.5,
                position: "absolute",
                backgroundColor: "black",
                top: 0,
              }}
            />
            <img
              src='https://cdn.discordapp.com/attachments/779278654714675232/1016934260101353512/cat.png'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              id='name-happy'
              style={{ left: 50, bottom: 140, position: "absolute" }}
            >
              HappiList
            </div>
            <div
              id='desc-happy'
              style={{
                position: "absolute",
                left: 50,
                bottom: 115,
                color: "white",
                zIndex: 3,
                userSelect: "none",
                fontStyle: "italic",
              }}
            >
              Social media app that promotes producivity and positivity
            </div>

            <div
              className='view-project-button2'
              style={{
                position: "absolute",
                left: 50,
                bottom: 60,
                userSelect: "none",
              }}
              id='bullseye-view-but2'
            >
              View Project
            </div>
          </div>
        </a>
        <div
          className='container-projects-img boxshadow-projects'
          style={{ marginRight: "10vh" }}
        >
          .
        </div>
      </div>
    </div>
  );
};

export default Projects;
