"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PORT = process.env.PORT || 3000;
var app = express_1["default"]();
app.get('/', function (req, res) { return res.send('Hello World!'); });
app.listen(PORT, function () { return console.log("Example app listening on port " + PORT + "!"); });
