const robot = require("robotjs");

let commands = {
  LEFT_KEY: true,
  RIGHT_KEY: true,
  DOWN_KEY: true,
  UP_KEY: true,
  RIGHT_CLICK: true,
  LEFT_CLICK: true,
};

const moveX = (req, res) => {
  const mouse = robot.getMousePos();
  const command = req.body.key;
  let { x } = req.body.speed;
  if (!command) return res.status(404).json({ msg: "Missing arguments" });
  x = Number(x);

  if (commands[command]) {
    if (command == "LEFT_KEY") {
      x = ~x + 1;
    }
    robot.moveMouse(mouse.x + x, mouse.y);
    return res.status(200).send("gg");
  }
  res.status(404).send("bg");
};

const moveY = (req, res) => {
  const mouse = robot.getMousePos();
  const command = req.body.key;
  let { y } = req.body.speed;
  if (!command) return res.status(404).json({ msg: "Missing arguments" });
  y = Number(y);

  if (commands[command]) {
    if (command == "UP_KEY") {
      y = ~y + 1;
    }
    robot.moveMouse(mouse.x, mouse.y + y);
    return res.status(200).send("gg");
  }
  res.status(404).send("bg");
};

const leftClick = (req, res) => {
  robot.mouseClick();
  return res.status(200).send("gg!");
};

const rightClick = (req, res) => {
  robot.mouseClick("right");
  return res.status(200).send("gg!");
};

module.exports = {
  moveX,
  moveY,
  leftClick,
  rightClick,
};
