const express = require('express');
const app = express();
const path = require('path');

console.log("hello express");

app.set('view engine', 'ejs');

app.get('/recipes/:recipe', (req, res) => {
    const { recipe } = req.params;
    res.render('recipe', recipe);
})





app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});