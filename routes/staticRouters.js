const express = require("express");
const URL = require("../models/url");
const router = express.Router();


router.get("/",async(req,res)=>{
    const urls=await URL.find({})
    console.log(urls)
    return res.render("home",{
        allurls:urls
    })
})


module.exports = router