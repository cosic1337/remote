const LEFT_KEY = document.getElementById("LEFT_KEY");
const RIGHT_KEY = document.getElementById("RIGHT_KEY");
const DOWN_KEY = document.getElementById("DOWN_KEY");
const UP_KEY = document.getElementById("UP_KEY");

const LEFT_CLICK = document.getElementById("LEFT_CLICK");
const RIGHT_CLICK = document.getElementById("RIGHT_CLICK");

const xSpeedEl = document.getElementById("speedX");
const ySpeedEl = document.getElementById("speedY");

let xSpeedVal = 0;
let ySpeedVal = 0;

xSpeedEl.addEventListener("click", () => {
  xSpeedVal = (xSpeedVal + 5) % 51;
  xSpeedEl.value = xSpeedVal;
});

ySpeedEl.addEventListener("click", () => {
  ySpeedVal = (ySpeedVal + 5) % 51;
  ySpeedEl.value = ySpeedVal;
});

const sendReq = (keyType, speed, link) => {
  fetch(link, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: keyType, speed: speed }),
  }).catch((err) => console.log(err));
};

const sendClick = (link) => {
  fetch(link, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).catch((err) => console.log(err));
};

LEFT_KEY.addEventListener("click", () => {
  sendReq("LEFT_KEY", { x: xSpeedVal }, "http://localhost:5000/commands/moveX");
});

RIGHT_KEY.addEventListener("click", () => {
  sendReq(
    "RIGHT_KEY",
    { x: xSpeedVal },
    "http://localhost:5000/commands/moveX"
  );
});

DOWN_KEY.addEventListener("click", () => {
  sendReq("DOWN_KEY", { y: ySpeedVal }, "http://localhost:5000/commands/moveY");
});

UP_KEY.addEventListener("click", () => {
  sendReq("UP_KEY", { y: ySpeedVal }, "http://localhost:5000/commands/moveY");
});

RIGHT_CLICK.addEventListener("click", () =>
  sendClick("http://localhost:5000/commands/rightClick")
);
LEFT_CLICK.addEventListener("click", () =>
  sendClick("http://localhost:5000/commands/leftClick")
);
