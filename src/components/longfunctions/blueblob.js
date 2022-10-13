import gsap from "gsap";

let previous = "moveUpRight";
let previousX = 50;
let previousY = -50;
const initBlue = (vpHeight, vpWidth) => {
  if (vpHeight === 0 || vpWidth === 0) return;

  const moveDownRight = (posy, posx) => {
    console.log("downright");
    if (!document.hidden) {
      const scrollPos = window.scrollY;
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 2,
        ease: "none",
      });

      previous = "moveDownRight";
      previousX = posx;
      previousY = posy;

      if (offsetY > vpHeight - 500 - scrollPos) {
        return setTimeout(() => {
          moveUpRight(posy - 100, posx + 100);
        }, 2000);
      }

      if (offsetX >= vpWidth - 501) {
        return setTimeout(() => {
          moveDownLeft(posy + 100, posx - 100);
        }, 2000);
      }

      return setTimeout(() => {
        moveDownRight(posy + 100, posx + 100);
      }, 2000);
    } else {
      setTimeout(() => {
        initBlue();
      }, 300);
    }
  };

  const moveUpRight = (posy, posx) => {
    console.log("upright");
    if (!document.hidden) {
      const scrollPos = window.scrollY;
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 2,
        ease: "none",
      });

      previous = "moveUpRight";
      previousX = posx;
      previousY = posy;

      if (offsetX >= vpWidth - 501) {
        return setTimeout(() => {
          moveUpLeft(posy - 100, posx - 100);
        }, 2000);
      }

      if (offsetY <= vpHeight - 1170 - scrollPos) {
        return setTimeout(() => {
          moveDownRight(posy + 100, posx + 100);
        }, 2000);
      }

      return setTimeout(() => {
        moveUpRight(posy - 100, posx + 100);
      }, 2000);
    } else {
      setTimeout(() => {
        initBlue();
      }, 300);
    }
  };

  const moveUpLeft = (posy, posx) => {
    console.log("upleft");
    if (!document.hidden) {
      const scrollPos = window.scrollY;
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 2,
        ease: "none",
      });

      previous = "moveUpLeft";
      previousX = posx;
      previousY = posy;

      if (offsetY <= vpHeight - 1170 - scrollPos) {
        return setTimeout(() => {
          moveDownLeft(posy + 100, posx - 100);
        }, 2000);
      }

      if (offsetX <= vpWidth - 1870) {
        return setTimeout(() => {
          moveUpRight(posy - 100, posx + 100);
        }, 2000);
      }

      return setTimeout(() => {
        moveUpLeft(posy - 100, posx - 100);
      }, 2000);
    } else {
      setTimeout(() => {
        initBlue();
      }, 250);
    }
  };

  const moveDownLeft = (posy, posx) => {
    console.log("downleft");
    console.log(previousX, +" " + previousY);
    if (!document.hidden) {
      const scrollPos = window.scrollY;
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 2,
        ease: "none",
      });

      previous = "moveDownLeft";
      previousX = posx;
      previousY = posy;

      if (offsetX <= vpWidth - 2000) {
        return setTimeout(() => {
          moveDownRight(posy + 100, posx + 100);
        }, 2000);
      }

      if (offsetY > vpHeight - 400 - scrollPos) {
        return setTimeout(() => {
          moveUpLeft(posy - 100, posx - 100);
        }, 2000);
      }

      return setTimeout(() => {
        moveDownLeft(posy + 100, posx - 100);
      }, 2000);
    } else {
      setTimeout(() => {
        initBlue();
      }, 250);
    }
  };
  switch (previous) {
    case "moveDownRight":
      return moveDownRight(previousY, previousX);
    case "moveDownLeft":
      return moveDownLeft(previousY, previousX);
    case "moveUpLeft":
      return moveUpLeft(previousY, previousX);
    case "moveUpRight":
      return moveUpRight(previousY, previousX);
  }
};

export { initBlue };
