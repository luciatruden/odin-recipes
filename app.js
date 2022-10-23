const express = require('express');
const app = express();
const path = require('path');


console.log("hello express");


app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
});