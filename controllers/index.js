const Category = require("../models/category");
const Todo = require("../models/todo");

module.exports = {
    calendar,
    day
};

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

async function day(req, res) {
    const date = new Date(req.params.year, req.params.month, req.params.day);
    const todos = await Todo.find({user: req.user._id, date: date}).populate("category");
    const categories = await Category.find({})
    res.render('calendar/day',{ date, todos, categories });
}

function calendar(req, res) {
    let year = parseInt(req.query.year);
    let month = parseInt(req.query.month);
    let day = parseInt(req.query.day);
    if (month === -1) {
        year--;
        month = 11;
    }else if (month === 12) {
        year++;
        month = 0;
    }

    if (!year) {
        const today = new Date();
        year = today.getFullYear();
        month = today.getMonth();
    }
    const dow = new Date(year, month, 1).getDay() + 1;
    const numDaysInMO = new Date(year,month + 1, 0).getDate();
    res.render('calendar/calendar', { year, month, day, numDaysInMO, monthNames, dow });
}