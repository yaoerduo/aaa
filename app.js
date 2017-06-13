var express = require("express"),
    mysql = require("mysql"),
    bodyparser = require("body-parser")
app = express()
app.use(express.static(__dirname + "/publish"))
app.use(bodyparser.urlencoded({ extended: false }))
var client = mysql.createConnection({
    "host": "127.0.0.1",
    "user": "root",
    "password": "1075388282",
    "database": "shixun"
})
client.connect()
app.get("/sel", function(req, res) {
    client.query("select * from num", function(err, data) {
        res.send({data: data })
        console.log(data)
    })
})
app.listen(90, function() {
    console.log("listen 90")
})