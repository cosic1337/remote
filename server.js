const express = require("express");
const robot = require("robotjs");
const cors = require("cors");

const commandsRoute = require("./routes/commands");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use("/commands", commandsRoute);

robot.setMouseDelay(2);

app.route("/").get((req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
