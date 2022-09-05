let previous = "moveDownRight";
let previousX = 50;
let previousY = 50;
const init = () => {
  if (vpHeight === 0 || vpWidth === 0) return;

  const moveDownRight = (posy, posx) => {
    if (!document.hidden) {
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveDownRight";
      previousX = posx;
      previousY = posy;

      if (offsetY > vpHeight - 500) {
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
      }, 500);
    }
  };

  const moveUpRight = (posy, posx) => {
    if (!document.hidden) {
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
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

      if (offsetY <= vpHeight - 1170) {
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
      }, 500);
    }
  };

  const moveUpLeft = (posy, posx) => {
    if (!document.hidden) {
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveUpLeft";
      previousX = posx;
      previousY = posy;

      if (offsetY <= vpHeight - 1170) {
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
      }, 500);
    }
  };

  const moveDownLeft = (posy, posx) => {
    if (!document.hidden) {
      const offsets = document
        .getElementById("blue-blob-svg")
        .getBoundingClientRect();
      const offsetX = offsets.x;
      const offsetY = offsets.y;

      gsap.to("#blue-blob-svg", {
        x: posx,
        y: posy,
        duration: 3,
        ease: "none",
      });

      previous = "moveDownLeft";
      previousX = posx;
      previousY = posy;

      if (offsetX <= vpWidth - 1700) {
        return setTimeout(() => {
          moveDownRight(posy + 100, posx + 100);
        }, 3000);
      }

      if (offsetY > vpHeight - 400) {
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
      }, 500);
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
init();
