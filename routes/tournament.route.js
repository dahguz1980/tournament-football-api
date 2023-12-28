const express = require('express')
const tournament = require("../controllers/tournament.controller");
const router = express.Router()

router.get("/list/:code", tournament.getAllTournaments);

module.exports = router