const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

module.exports = {
    calendar
};

function calendar(req, res) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = parseInt(req.query.year);
    let month = parseInt(req.query.month);
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
    res.render('calendar', { year, month, numDaysInMO, monthNames, dow });
}