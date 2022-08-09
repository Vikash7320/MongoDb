const express = require("express")
const app = express();
//ejs
app.set('view engine', 'ejs')
//mongoose
var mongoose = require('mongoose')
//connect to server and address is given from mongoDB compass
mongoose.connect('mongodb://localhost:27017/test')
//Model And Schema
const Course = mongoose.model('check', {
    name: String,
    course: String,
    age: Number,
    email: String,
})
var bodyParser = require('body-parser')
const { urlencoded } = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('profileMaj')
})

app.post('/', (req, res) => {
    var fn = req.body.fname
    var fc = req.body.fcourse
    var fa = req.body.fage
    var fe = req.body.femail
    //Data
    const topic = new Course({
        name: fn,
        course: fc,
        age: fa,
        email: fe,
    })
    topic.save();
    res.send("Document is created in mongoDB database successfully")
})
app.listen(3000, () => console.log("Server Started.."))
