import React from "react";

const Logo = () => {
  return (
    <svg
      viewBox="0 0 68 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginTop: "20px",
        cursor: "pointer",
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="animation-fade-top"
      id="logo-bullseye"
    >
      <path d="M0.873977 0.788862L30.7285 26.1886" className="logo-color" />
      <path d="M30.3653 26.2092L44.1335 10.08" className="logo-color" />
      <path d="M4.22946 25.8616L22.2975 37.8756" className="logo-color" />
      <path d="M22.0394 37.8756L22.0394 70" className="logo-color" />
      <path d="M39.8493 39.965L40.2709 58.8" className="logo-color" />
      <path d="M39.8493 40.1175L67.2165 4.46313" className="logo-color" />
      <path d="M0.873993 0.788879L4.22949 26.1228" className="logo-color" />
      <path d="M22.0394 70L40.568 58.8" className="logo-color" />
      <path d="M43.9792 10.1911L67.4745 4.22819" className="logo-color" />
      <path d="M30.8159 34.2365L30.8159 25.8616" className="logo-color2" />
      <path d="M30.8153 34.2191L21.8748 38.119" className="logo-color" />
      <path d="M30.8153 34.2191L39.9895 39.7457" className="logo-color" />
      <path d="M21.5446 37.4574L14.5541 21.4216" className="logo-color" />
      <path d="M30.4659 26.04L14.296 21.4216" className="logo-color" />
      <path d="M4.12933 25.6209L14.5541 21.4216" className="logo-color" />
      <path d="M1.34773 1.16767L14.5541 21.4216" className="logo-color" />
      <line
        y1="-0.5"
        x2="16.0817"
        y2="-0.5"
        transform="matrix(-0.224703 0.974427 -0.973242 -0.229781 43.9792 10.1912)"
        className="logo-color"
      />
      <path d="M40.3655 26.3839L67.2165 4.46308" className="logo-color" />
      <path d="M40.6624 25.8727L39.9738 39.48" className="logo-color" />
      <path d="M40.5 26.4865L30.4991 26.0135" className="logo-color" />
      <line
        y1="-0.5"
        x2="12.4977"
        y2="-0.5"
        transform="matrix(-0.743507 0.668728 -0.659983 -0.751281 40.3655 25.8616)"
        className="logo-color"
      />
      <path d="M14.2959 21.4216L30.7192 34.0158" className="logo-color" />
      <path d="M30.8152 34.2124L30.8152 53.76" className="logo-color" />
      <path d="M31.0734 54.3296L22.0696 37.9981" className="logo-color" />
      <path d="M31.0734 54.3295L39.6287 39.8294" className="logo-color" />
      <path d="M31.0734 54.0684L22.0006 69.8766" className="logo-color" />
      <line
        y1="-0.5"
        x2="10.1885"
        y2="-0.5"
        transform="matrix(0.91202 0.410146 -0.402154 0.915572 31.0734 54.5907)"
        className="logo-color"
      />
    </svg>
  );
};

export default Logo;
