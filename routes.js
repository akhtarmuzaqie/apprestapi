'use strict';

module.exports = function (app) {
    var myjson = require('./controller');

    app.res('/')
        .get(myjson.index)
}