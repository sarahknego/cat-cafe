const service = require("./reservations.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary.js");

async function list(req, res) {
    const data = await service.list();
    res.json({ data });
}

async function read(req, res) {
    let {id} = req.params;
    const data = await service.read(id);
    res.json({ data });
}

async function destroy(req, res, next) {
    if (!req.body.reservation_id) {
        return next({status: 400, message: "reservation_id not found"});
    }
    let id = req.body.reservation_id;
    if (typeof id !== "number") {
        return next({status: 400, message: "id must be a number"});
    }
    const data = await service.destroy(id);
    if (data === 0) {
        return next({status: 400, message: `${id} is not a valid id`});
    } 
    res.send("reservation deleted successfully").status(200);
}

async function put(req, res, next){
    if(req.body){
        let id = req.body.id;
        req.body = {...req.body, "length_hours": Number(req.body.length_hours)};
        const data = await service.put(id, req.body);
        res.sendStatus(200);
    } else {
        return next({status: 400, message: "Something isn't right"});
    }
}

async function post(req, res, next){
    if(req.body){
        req.body = {...req.body, "length_hours": Number(req.body.length_hours)};
        const data = await service.post(req.body);
        res.sendStatus(200);
    } else {
        return next({status: 400, message: "Something isn't right"});
    }
}

module.exports = {list : asyncErrorBoundary(list), read : asyncErrorBoundary(read), delete : asyncErrorBoundary(destroy), put: asyncErrorBoundary(put), post: asyncErrorBoundary(post)};