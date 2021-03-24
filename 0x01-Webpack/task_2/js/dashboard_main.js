import $ from "jquery";
const _ = require("lodash");

let count = 0;

function updateCounter() {
    count ++;
    return count;
}

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button> Click here to get started</button>');
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

let func_deb = _.debounce(() => {
    let count = updateCounter();
    $('#count').text(`${count} clicks on the button`);
});
$('button').on('click', func_deb);
