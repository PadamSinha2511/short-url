const experss = require('express');
const {connectToDb} = require('./connection');
const urlRouter = require("./routes/user")

const app = experss();
const PORT = 8001;



connectToDb("mongodb://127.0.0.1:27017/urlshortner")
.then(()=>console.log("Db Connected"))
.catch((err)=>console.log("Error" ,err))

//middlewares

app.use(experss.json())

//routes
app.use("/url",urlRouter)




app.listen(PORT,()=>console.log("Server started"))