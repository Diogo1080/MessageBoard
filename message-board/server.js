const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

// messages - in memory
const messages = ["Welcome", "Bye", "Call me maybe!"];

//routes
app.get("/api/message", (request, response) => {
  response.json(messages);
});

app.post("/api/message", (request, response) => {
  messages.push(request.body.message);
});

app.listen(8080);
