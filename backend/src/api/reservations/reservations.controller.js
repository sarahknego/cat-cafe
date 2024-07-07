const service = require("./reservations.service.js")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary.js");

async function list(req, res) {
    const data = await service.list()
    res.json({ data })
}

async function read(req, res) {
    let {id} = req.params
    const data = await service.read(id)
    res.json({ data })
}

async function destroy(req, res, next) {
    console.log(`Received request: ${req.method} ${req.path}`);
    if (!req.body.reservation_id) {
        return next({status: 400, message: "reservation_id not found"})
    }
    let id = req.body.reservation_id
    if (typeof id !== "number") {
        return next({status: 400, message: "id must be a number"})
    }
    const data = await service.destroy(id)
    if (data === 0) {
        return next({status: 400, message: `${id} is not a valid id`})
    } 
    res.send("reservation deleted successfully").status(200)
}

module.exports = {list : asyncErrorBoundary(list), read : asyncErrorBoundary(read), delete : asyncErrorBoundary(destroy) };