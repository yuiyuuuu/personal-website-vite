import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className='parent'>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <svg
          width='180'
          height='154'
          viewBox='0 0 180 154'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ marginTop: "-10px" }}
        >
          <rect width='180' height='154' fill='white' />
          <rect width='180' height='154' fill='#000000' />
          <path d='M58.874 42.7889L88.7285 68.1886' className='logo-color' />
          <path d='M88.3653 68.2092L102.133 52.08' className='logo-color' />
          <path d='M62.2295 67.8616L80.2975 79.8756' className='logo-color' />
          <path d='M80.0394 79.8756L80.0394 112' className='logo-color' />
          <path d='M97.8493 81.965L98.2709 100.8' className='logo-color' />
          <path d='M97.8493 82.1175L125.216 46.4631' className='logo-color' />
          <path d='M58.874 42.7889L62.2295 68.1228' className='logo-color' />
          <path d='M80.0394 112L98.568 100.8' className='logo-color' />
          <path d='M101.979 52.1911L125.474 46.2282' className='logo-color' />
          <path d='M88.8159 76.2365L88.8159 67.8616' className='logo-color' />
          <path d='M88.8153 76.2191L79.8748 80.119' className='logo-color' />
          <path d='M88.8153 76.2191L97.9895 81.7457' className='logo-color' />
          <path d='M79.5446 79.4574L72.5541 63.4216' className='logo-color' />
          <path d='M88.4659 68.04L72.296 63.4216' className='logo-color' />
          <path d='M62.1293 67.6209L72.5541 63.4216' className='logo-color' />
          <path d='M59.3477 43.1677L72.5541 63.4216' className='logo-color' />
          <line
            y1='-0.5'
            x2='16.0817'
            y2='-0.5'
            transform='matrix(-0.224703 0.974427 -0.973242 -0.229781 101.979 52.1912)'
            className='logo-color'
          />
          <path d='M98.3655 68.3839L125.216 46.4631' className='logo-color' />
          <path d='M98.6624 67.8727L97.9738 81.48' className='logo-color' />
          <path d='M98.5 68.4865L88.4991 68.0135' className='logo-color' />
          <line
            y1='-0.5'
            x2='12.4977'
            y2='-0.5'
            transform='matrix(-0.743507 0.668728 -0.659983 -0.751281 98.3655 67.8616)'
            className='logo-color'
          />
          <path d='M72.2959 63.4216L88.7192 76.0158' className='logo-color' />
          <path d='M88.8152 76.2124L88.8152 95.76' className='logo-color' />
          <path d='M89.0734 96.3296L80.0696 79.9981' className='logo-color' />
          <path d='M89.0734 96.3295L97.6287 81.8294' className='logo-color' />
          <path d='M89.0734 96.0684L80.0006 111.877' className='logo-color' />
          <line
            y1='-0.5'
            x2='10.1885'
            y2='-0.5'
            transform='matrix(0.91202 0.410146 -0.402154 0.915572 89.0734 96.5907)'
            className='logo-color'
          />
        </svg>
        <div style={{ flexGrow: 1 }} />
        <div className='burger-color-div'>
          <svg
            width='60'
            height='49'
            viewBox='0 0 60 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{
              cursor: "pointer",
            }}
          >
            <rect width='60' height='49' fill='black' />
            <path
              d='M0.417444 25.3556L59.6772 25.083M0.49583 0.895681L59.7556 0.623108M0.345033 48.0036L59.6048 47.7311'
              stroke='white'
              className='burger-color'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Main;
