const express = require("express");
const { generateShortUrl, redirectUrl, getAnalytics } = require("../controllers/user");
const router = express.Router();

router.post("/",generateShortUrl)
router.get("/:shortid",redirectUrl)
router.get("/analytics/:shortid",getAnalytics)

module.exports = router;