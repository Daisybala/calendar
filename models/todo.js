const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    user: {    
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    date: { type: Date, required: true },
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
},{
    timestamps: true
  });

  module.exports = mongoose.model('Todo', todoSchema);