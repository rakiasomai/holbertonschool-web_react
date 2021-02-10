"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
var printTeacher = function (firstName, lastName) {
    var intial = firstName.charAt(0);
    return intial + ". " + lastName;
};
exports.printTeacher = printTeacher;
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
