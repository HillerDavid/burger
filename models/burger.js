let orm = require('../config/orm.js')

let burger = {
    selectAll: function () {
        orm.selectAll()
    },

    insertOne: function () {
        orm.insertOne()
    },

    updateOne: function () {
        orm.updateOne()
    }
}

module.exports = burger