import gsap from "gsap";
let previous = "moveDownRight";
let previousX = 50;
let previousY = 50;
const initRed = (vpHeight, vpWidth) => {
  if (vpHeight === 0 || vpWidth === 0) return;

  const moveDownRight = (posy, posx) => {
    const scrollPos = window.scrollY;
    if (!document.hidden) {
      const offsets = document
        .getElementById("blob-animated")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blob-animated", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveDownRight";
      previousX = posx;
      previousY = posy;

      if (offsetY > vpHeight - 500 - scrollPos) {
        return setTimeout(() => {
          moveUpRight(posy - 100, posx + 100);
        }, 3000);
      }

      if (offsetX >= vpWidth - 501) {
        return setTimeout(() => {
          moveDownLeft(posy + 100, posx - 100);
        }, 3000);
      }

      return setTimeout(() => {
        moveDownRight(posy + 100, posx + 100);
      }, 3000);
    } else {
      setTimeout(() => {
        init();
      }, 250);
    }
  };

  const moveUpRight = (posy, posx) => {
    const scrollPos = window.scrollY;
    if (!document.hidden) {
      const offsets = document
        .getElementById("blob-animated")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blob-animated", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveUpRight";
      previousX = posx;
      previousY = posy;

      if (offsetX >= vpWidth - 501) {
        return setTimeout(() => {
          moveUpLeft(posy - 100, posx - 100);
        }, 3000);
      }

      if (offsetY <= vpHeight - 1170 - scrollPos) {
        return setTimeout(() => {
          moveDownRight(posy + 100, posx + 100);
        }, 3000);
      }

      return setTimeout(() => {
        moveUpRight(posy - 100, posx + 100);
      }, 3000);
    } else {
      setTimeout(() => {
        init();
      }, 250);
    }
  };

  const moveUpLeft = (posy, posx) => {
    const scrollPos = window.scrollY;
    if (!document.hidden) {
      const offsets = document
        .getElementById("blob-animated")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blob-animated", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveUpLeft";
      previousX = posx;
      previousY = posy;

      if (offsetY <= vpHeight - 1170 - scrollPos) {
        return setTimeout(() => {
          moveDownLeft(posy + 100, posx - 100);
        }, 3000);
      }

      if (offsetX <= vpWidth - 1870) {
        return setTimeout(() => {
          moveUpRight(posy - 100, posx + 100);
        }, 3000);
      }

      return setTimeout(() => {
        moveUpLeft(posy - 100, posx - 100);
      }, 3000);
    } else {
      setTimeout(() => {
        init();
      }, 250);
    }
  };

  const moveDownLeft = (posy, posx) => {
    const scrollPos = window.scrollY;
    if (!document.hidden) {
      const offsets = document
        .getElementById("blob-animated")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blob-animated", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveDownLeft";
      previousX = posx;
      previousY = posy;

      if (offsetX <= vpWidth - 2000) {
        return setTimeout(() => {
          moveDownRight(posy + 100, posx + 100);
        }, 3000);
      }

      if (offsetY > vpHeight - 400 - scrollPos) {
        return setTimeout(() => {
          moveUpLeft(posy - 100, posx - 100);
        }, 3000);
      }

      return setTimeout(() => {
        moveDownLeft(posy + 100, posx - 100);
      }, 3000);
    } else {
      setTimeout(() => {
        init();
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

export { initRed };
