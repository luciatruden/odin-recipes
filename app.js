const express = require('express');
const app = express();
const path = require('path');
const recipes = require('./recipes.json');

console.log("hello express");

app.set('view engine', 'ejs');

// Get a recipe and render its page
app.get('/recipes/:recipe', (req, res) => {
    const { recipe } = req.params;
    const data = recipes[recipe];

    if (data){
        res.render('recipe', {...data})
    } else {
        res.send(`The recipe for ${recipe} cannot be found`)
    }

});

//Home page with list of recipes
app.get('/', (req, res) => {
    const data = [];

    
    // console.log(`Object keys: ${Object.keys(recipes)}`);
    

    for (let key of Object.keys(recipes)){
        // console.log(`Key: ${key}`);
        // console.log(`recipe: ${recipes[key].name}`);
        data.push({"key" : key, "name" : recipes[key].name});
    }

    // console.log(`Data is : ${data}`);

    res.render('home', {data});
});





app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});