const express = require('express');
const app = express();


console.log("hello express");


app.listen(3000, ()=> {
    console.log("Listening on port 3000.")
})