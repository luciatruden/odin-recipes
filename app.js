const express = require('express');
const app = express();
const path = require('path');
const recipes = require('./recipes.json');

console.log("hello express");

app.set('view engine', 'ejs');

app.get('/recipes/:recipe', (req, res) => {
    const { recipe } = req.params;
    const data = recipes[recipe];

    if (data){
        res.render('recipe', {...data})
    } else {
        res.send(`The recipe for ${recipe} cannot be found`)
    }

})





app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});