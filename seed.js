require('dotenv').config();
require('./config/database');

const Category = require('./models/category');

(async function() {
    let results = await Category.deleteMany({});
    // results will be whatever the promise
    // returned by the deleteMany method resolves to
    console.log(results);
    const categories = await Category.create([
        {name: "Work"},
        {name: "Family"},
        {name: "Pets"},
        {name: "Kids"},
        {name: "Health"},
        {name: "Entertainment"},
        {name: "Home"},
        {name: "Shopping"},
        {name: "Education"},
        {name: "Special Occasion"},
        {name: "Hobby"}         
    ]); 
    console.log(categories);
    
  
  
    // Lastly, use process.exit() to "cleanly" shut down the Node program
    process.exit();
  })();