const express = require("express");
const { getAllRoles, createRole } = require("../controllers/roleController");

const router = express.Router();

router.get("/", getAllRoles);
router.post("/", createRole);

module.exports = router;
