const knex = require("../../db/connection.js");

function list() {
    return knex("rooms").select("*");
}

function read(id) {
    return knex("rooms").where({"id" : id}).first();
}

module.exports = { list, read };