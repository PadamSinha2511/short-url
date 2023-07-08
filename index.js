const experss = require('express');
const path = require("path")
const {connectToDb} = require('./connection');
const urlRouter = require("./routes/user")
const staticRoute = require("./routes/staticRouters")
const app = experss();
const PORT = 8001;



connectToDb("mongodb://127.0.0.1:27017/urlshortner")
.then(()=>console.log("Db Connected"))
.catch((err)=>console.log("Error" ,err))

//Template engine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


//middlewares
app.use(experss.json())
app.use(experss.urlencoded({extended:false}))

//routes
app.use("/url",urlRouter)
app.use("/",staticRoute)



app.listen(PORT,()=>console.log("Server started"))