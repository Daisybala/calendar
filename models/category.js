const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true },
},{
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);