import React from "react";

const HappiList = () => {
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
            HappiList
          </div>

          <div
            style={{ fontStyle: "italic", fontSize: "22px", color: "white" }}
          >
            Social media app that promotes producivity and positivity
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
            Context: <span style={{ color: "white" }}>Group Project</span>
          </div>

          <div style={{ color: "#00BFFF" }} className='font-projects'>
            Period: <span style={{ color: "white" }}> July - August 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappiList;
