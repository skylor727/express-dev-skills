// routes/todos.js

var express = require("express");
const skills = require("../controllers/skills");
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require("../controllers/skills");

// All actual paths begin with "/skills"

// GET skills
router.get("/", skillsCtrl.index);

//GET skills/new
router.get("/new", skillsCtrl.new);

//GET skills/id
router.get("/:id", skillsCtrl.show);

router.post("/", skillsCtrl.create);

router.delete("/:id", skillsCtrl.delete);

module.exports = router;
