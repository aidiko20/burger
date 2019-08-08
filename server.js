var express = require("express");
var PORT = process.envPORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(expreess.json());
var exphbs = require ("express-hundlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");
app.use(routes);
app.linsten(PORT, function(){
    console.log("Server listening on: hhtp://localhost:" + PORT);
});