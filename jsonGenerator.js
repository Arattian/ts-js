"use strict";
exports.__esModule = true;
var path_1 = require("path");
var TJS = require("typescript-json-schema");
var fs = require('fs');
var settings = {
    required: true
};
var compilerOptions = {
    strictNullChecks: true
};
var basePath = "./";
var program = TJS.getProgramFromFiles([path_1.resolve("test.ts")], compilerOptions, basePath);
var schema = TJS.generateSchema(program, "Person", settings, ["Person"]);
var json = JSON.stringify(schema);
fs.writeFile('schema.json', json, function (err) {
    if (err)
        throw err;
    console.log('JSON saved!');
});
 