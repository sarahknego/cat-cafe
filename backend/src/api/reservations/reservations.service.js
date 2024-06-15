const knex = require("../../db/connection.js");

function list() {
    return knex("reservations").select("*")
}

function read(id) {
    return knex("reservations").where({"id" : id}).first()
}

function destroy(id) {
    return knex("reservations").where({"id" : id}).del()
}
module.exports = { list, read, destroy };