const router = require("express").Router();
const { moveX, moveY, rightClick, leftClick } = require("../controls/commands");

router.route("/moveX").post(moveX);
router.route("/moveY").post(moveY);
router.route("/rightClick").post(rightClick);
router.route("/leftClick").post(leftClick);

module.exports = router;
