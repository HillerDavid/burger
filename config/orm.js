let connection = require('../config/connection.js')

let orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", (err, result) => {
            if (err) throw err
            cb(result)
        })
    },

    insertOne: function (cols, vals, cb) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [cols, vals], (err, result) =>{
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function (object, id) {
        connection.query("UPDATE burger SET ? WHERE id = ?", [object, id], (err, result) =>{
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm