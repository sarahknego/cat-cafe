const service = require("./drinks.service.js")
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

module.exports = {list : asyncErrorBoundary(list), read : asyncErrorBoundary(read)}