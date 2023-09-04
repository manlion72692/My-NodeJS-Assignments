const express = require("express");
const faker = require("faker");
var bodyParser = require("body-parser")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views');
app.set('viewengine', 'ejs');


app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.get("/form", (req, res)=> {
    res.render("form.ejs");
})

app.post("/add", (req, res) => {
    console.log(req.body);
    res.status(200).send({
        status: "success",
        message: "the sum of given two numbers",
        sum: Number(req.body.num1) + Number(req.body.num2)
    })
})

app.post("/sub", (req, res) => {
    console.log(req.body);
    res.status(200).send({
        status: "success",
        message: "the difference of given two numbers",
        sub: Number(req.body.num1) - Number(req.body.num2)
    })
})

app.post("/multiply", (req, res) => {
    console.log(req.body);
    res.status(200).send({
        status: "success",
        message: "the product of given two numbers",
        multiply: Number(req.body.num1) * Number(req.body.num2)
    })
})

app.post("/divide", (req, res) => {
    console.log(req.body);
    res.status(200).send({
        status: "success",
        message: "the division of given two numbers",
        divide: Number(req.body.num1) / Number(req.body.num2)
    })
})

app.listen(5000, () => console.log("Express server is up"));