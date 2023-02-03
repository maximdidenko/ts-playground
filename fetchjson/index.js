"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.complted;
    console.log("\n    ID: ".concat(ID, "\n    Title: ").concat(title, "\n    Completed: ").concat(completed, "\n  "));
});
