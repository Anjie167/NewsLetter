const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const { options } = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post('/',function(req, res){
    var firstName = req.body.first
    var lastName = req.body.last
    var email = req.body.email

    var details = firstName + lastName + email;
    console.log(details);
});


app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server is runnning on port 4000");
});

// 0c6fcd85190077ab36079f588f99d969-us13