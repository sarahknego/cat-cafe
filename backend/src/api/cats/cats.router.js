const router = require("express").Router();
const controller = require("./cats.controller");

router.route("/:id")
.get(controller.read);

router.route("/")
.get(controller.list);

module.exports = router;