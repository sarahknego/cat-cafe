const knex = require("../../db/connection.js");

function list() {
    return knex("drinks").select("*")
}

function read(id) {
    return knex("drinks").where({"id" : id}).first()
}

module.exports = { list, read };