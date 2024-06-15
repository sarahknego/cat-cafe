const router = require("express").Router();
const controller = require("./reservations.controller");

router.route("/:id")
.get(controller.read);

router.route("/")
.get(controller.list)
.delete(controller.delete);

module.exports = router;