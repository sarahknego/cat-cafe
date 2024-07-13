const knex = require("../../db/connection.js");

function list() {
    return knex("reservations").select("*")
}

function read(id) {
    return knex("reservations").where({"id" : id}).first()
}

function put(id, body){
    console.log(body)
    return knex("reservations").where({"id" : id}).update(body)
}

function post(body) {
    return knex("reservations").insert(body).then(res => res)
}

function destroy(id) {
    return knex("reservations").where({"id" : id}).del()
}
module.exports = { list, read, destroy, put, post };