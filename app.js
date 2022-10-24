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

//search query
app.get('/search', (req,res) => {
    const { q } = req.query;
    
    if (q) {
        const regEx = new RegExp(q);
        const results = [];

        //Get all recipes that match the search query
        for (let key of Object.keys(recipes)){
        
            if( regEx.test(key)) {
                console.log(`Search result: ${key}`);
                results.push({"key" : key, "name" : recipes[key].name});
            }
        }

        console.log(`Results is: ${results}`);

        //Render page with results
        if (results.length !== 0) {
            
            const data = {
                "q" : q,
                "results" : results
            }
            res.render('search_results', {...data})
        }
        res.send(`No search results for ${q}`);

    } else {
        res.send("Error: No search term.");
    }
})

//Home page with list of recipes
app.get('/', (req, res) => {
    const data = [];

    for (let key of Object.keys(recipes)){
        data.push({"key" : key, "name" : recipes[key].name});
    }

    res.render('home', {data});
});

app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});