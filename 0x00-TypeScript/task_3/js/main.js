"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CURD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CURD.insertRow(row);
console.log(newRowID);
var updatedRow = __assign(__assign({}, row), { age: 23 });
CURD.updateRow(newRowID, updatedRow);
console.log(updatedRow);
CURD.deleteRow(newRowID);
