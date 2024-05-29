const knex = require("../../db/connection.js");

function list() {
    return knex("cats").select("*")
}

function read(id) {
    return knex("cats").where({"id" : id}).first()
}

module.exports = { list, read };