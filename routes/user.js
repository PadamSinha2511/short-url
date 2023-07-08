const express = require("express");
const { generateShortUrl, redirectUrl, getAnalytics } = require("../controllers/user");
const URL = require("../models/url");
const router = express.Router();



router.post("/",generateShortUrl)
router.get("/url/:shortid",redirectUrl)
router.get("/analytics/:shortid",getAnalytics)

module.exports = router;