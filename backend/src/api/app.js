const express = require('express');
const app = express();
const catsRouter = require('./cats/cats.router.js');
const drinksRouter = require('./drinks/drinks.router.js')
const roomsRouter = require('./rooms/rooms.router.js')
const cors = require("cors");
const errorHandler = require("./errors/errorhandler.js")

app.use(cors());
app.use(express.json());

app.use("/cats", catsRouter);
app.use("/drinks", drinksRouter);
app.use("/rooms", roomsRouter);
app.get("/", (req, res) => res.send("meow"))
app.use(errorHandler);

module.exports = app;