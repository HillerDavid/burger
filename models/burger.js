let orm = require('../config/orm.js')

let burger = {
    selectAll: function (cb) {
        orm.selectAll((res) => {
            cb(res)
        })
    },

    insertOne: function (cols, vals, cb) {
        orm.insertOne(cols, vals, (res) => {
            cb(res)
        }
    },

    updateOne: function (obj, id, cb) {
        orm.updateOne(obj, id, (res) => {
            cb(res)
        })
    }
}

module.exports = burger