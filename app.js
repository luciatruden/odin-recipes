const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');


console.log("hello express");


app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});