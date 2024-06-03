const express = require('express');
const app = express();
require("./Connection/Connection")
const cors = require("cors")


const auth = require('./Router/auth');
const list = require('./Router/list');



app.use(cors('dev'))


app.get('/', (req, res) => {
    res.send("hello world")
})


app.use(express.json())

app.use("/api/v1", auth);
app.use("/api/v2", list);


app.listen(1000, (err) => {
    if (err) {
        console.log("app is not started")
    } else {
        console.log("app is started")
    }
})

