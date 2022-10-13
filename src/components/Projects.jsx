import React, { useEffect } from "react";
import "./Main.scss";
import $ from "jquery";

const Projects = () => {
  const test = document.querySelector("#overlay-intersector1");
  const test2 = document.querySelector("#overlay-intersector2");
  const test3 = document.querySelector("#overlay-intersector3");

  useEffect(() => {
    if (!test) return;
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $("#bullseye-overlay").addClass("overlay-transform-left");
        }
      });
    });

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $("#happilist-overlay").addClass("overlay-transform-right");
        }
      });
    });

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $("#personal-overlay").addClass("overlay-transform-left");
        }
      });
    });

    observer.observe(test);
    observer2.observe(test2);
    observer3.observe(test3);
  }, [test]);
  return (
    <div>
      <div
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "10vh",
          position: "relative",
          overflow: "hidden",
        }}
        id='test'
      >
        <div style={{ marginBottom: "7vh" }} className='title-forprojects '>
          My Latest Projects
        </div>
        <a href='/bullseye'>
          <div
            className='container-projects-img'
            id='first-project'
            style={{
              marginRight: "10vh",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div className='overlay-projects' id='bullseye-overlay' />
            <div
              style={{
                height: "1px",
                width: "1px",
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
              }}
              id='overlay-intersector1'
            />
            <img
              src='https://cdn.discordapp.com/attachments/779278654714675232/1016802611824955472/edited_2.png'
              style={{ width: "100%", height: "100%", userSelect: "none" }}
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
                color: "white",
                zIndex: 3,
                userSelect: "none",
              }}
              id='name-bullseye'
              className='title-projects'
            >
              Bullseye Store
            </div>
            <div
              style={{
                color: "white",
                zIndex: 3,
                userSelect: "none",
                fontStyle: "italic",
              }}
              id='desc-bullseye'
              className='description-projects'
            >
              Fullstack E-commerce store built from scratch
            </div>

            <div
              className='view-project-button'
              style={{
                userSelect: "none",
                zIndex: 3,
              }}
              id='bullseye-view-but'
            >
              View Project
            </div>

            <div
              id='number-1'
              style={{ position: "absolute", top: -40, left: -10 }}
              data-text='01'
            >
              01
            </div>
          </div>
        </a>
        <a href='/happilist'>
          <div
            className='container-projects-img boxshadow-projects '
            style={{
              marginLeft: "10vh",
              position: "relative",
              zIndex: 3,
            }}
            id='second-project'
          >
            <div className='overlay-projects' id='happilist-overlay' />
            <div
              style={{
                height: "1px",
                width: "1px",
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
              }}
              id='overlay-intersector2'
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

            <img
              src='https://cdn.discordapp.com/attachments/779278654714675232/1016934260101353512/cat.png'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                userSelect: "none",
              }}
            />
            <div id='name-happy' className='title-projects'>
              HappiList
            </div>
            <div
              id='desc-happy'
              style={{
                color: "white",
                zIndex: 3,
                userSelect: "none",
                fontStyle: "italic",
                left: 50,
              }}
              className='description-projects'
            >
              Social media app that promotes producivity
            </div>

            <div
              className='view-project-button2'
              style={{
                userSelect: "none",
              }}
              id='bullseye-view-but2'
            >
              View Project
            </div>

            <div
              id='number-2'
              style={{ position: "absolute", top: -40, right: -10 }}
              data-text='02'
            >
              02
            </div>
          </div>
        </a>
        <a href='/personal'>
          <div
            className='container-projects-img boxshadow-projects'
            style={{ marginRight: "10vh", position: "relative", zIndex: 3 }}
            id='third-project'
          >
            <div className='overlay-projects' id='personal-overlay' />
            <div
              style={{
                height: "1px",
                width: "1px",
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0,
              }}
              id='overlay-intersector3'
            />

            <img
              src='https://media.discordapp.net/attachments/779278654714675232/1017291390998290462/edit3.png'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                userSelect: "none",
              }}
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
                color: "white",
                zIndex: 3,
                userSelect: "none",
              }}
              id='name-personal'
              className='title-projects'
            >
              My Personal Website
            </div>

            <div
              style={{
                color: "white",
                zIndex: 3,
                userSelect: "none",
                fontStyle: "italic",
              }}
              id='desc-personal'
              className='description-projects'
            >
              The website you're looking at right now
            </div>

            <div
              className='view-project-button3'
              style={{
                userSelect: "none",
              }}
              id='personal-view-but'
            >
              View Project
            </div>

            <div
              id='number-3'
              style={{ position: "absolute", top: -40, left: -10 }}
              data-text='03'
            >
              03
            </div>
          </div>
        </a>

        <div id='experimental-works' className='title-forprojects '>
          Experimental Works
        </div>

        <a
          className='container-experimental'
          href='https://minecraft-experimental.herokuapp.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='li-experimental' id='mc-container'>
            <div className='circle-experimental' id='mc'></div>
            <div className='experimental-title minecraftia oneem'>
              Minecraft with Three.js
            </div>
            <div className='experimental-desc minecraftia'>
              React and Three.js
            </div>
          </div>
          <a
            className='li-experimental'
            href='https://codepen.io/scrubbydubby123/pen/GRdwzaG'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='circle-experimental' id='discord'></div>
            <div className='experimental-title discorduni'>
              Discord Sidebar Clone
            </div>
            <div className='experimental-desc discorduni'>
              React, SCSS, jQuery
            </div>
          </a>
          <a
            className='li-experimental'
            href='https://codepen.io/scrubbydubby123/pen/ZEorRVP'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='circle-experimental' id='space-'></div>
            <div className='experimental-title'>Space with Three.js</div>
            <div className='experimental-desc'>
              Javascript classes and Three.js
            </div>
          </a>
          <a
            className='li-experimental'
            href='https://codepen.io/scrubbydubby123/pen/wvjEEzr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='circle-experimental' id='eyes'></div>
            <div className='experimental-title'>Rotating Eyes</div>
            <div className='experimental-desc'>
              Eyes that follow your cursor
            </div>
          </a>
        </a>
      </div>
    </div>
  );
};

export default Projects;
