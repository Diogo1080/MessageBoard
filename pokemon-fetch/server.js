const express = require("express");

const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
})
app.use(express.static('public'));


app.listen(8080);