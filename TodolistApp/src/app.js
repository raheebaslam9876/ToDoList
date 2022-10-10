const express = require("express")
require("./db/conn")
const todolist = require("./models/todolist")
const todolistRouter = require("./router/Todolist")
const app = express();
const port = process.env.PORT || 3000;
//We need to Register a router
app.use(todolistRouter)



app.listen(port, () => {
    console.log(`connection setup at ${port}`)
})