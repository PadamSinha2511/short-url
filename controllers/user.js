const mongoose = require("mongoose")
const shortid = require("shortid")
const Url  = require("../models/url")
async function generateShortUrl(req,res)
{
    const body = req.body;
    if(!body.url) return res.status(400).json({msg:"Url required"})

    const shId = shortid(8);
    await Url.create({
        shortId:shId,
        redirectUrl:body.url,
        visitHistory:[]
    })
    return res.status(201).json({id:shId});
}


async function redirectUrl(req,res){
    const entry = await Url.findOneAndUpdate({shortId:req.params.shortid},{$push:{
        visitHistory:{
            timestamp: Date.now().toLocaleString()
        }
    
    }})
    res.redirect(entry.redirectUrl)
}


async function getAnalytics(req,res){
    const shortId = req.params.shortid;
    const result = await Url.findOne({shortId});

    return res.status(200).json({totalClick:result.visitHistory.length,analytics:result.visitHistory})
    
}


module.exports={
    generateShortUrl,
    redirectUrl,
    getAnalytics
}