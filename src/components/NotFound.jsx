import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "30px" }}>404 Not Found</div>
      <a
        href="/"
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "black",
          fontSize: "22px",
        }}
      >
        Return Home
      </a>
    </div>
  );
};

export default NotFound;
