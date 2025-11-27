const express = require("express");
const router = express.Router();

const { GetAllTutors, AddTutor, UpdateTutor, DeleteTutor } = require("../controllers/tutorsController");

router.get("/",  GetAllTutors);

router.post("/", AddTutor);

router.patch("/:id", UpdateTutor);

router.delete("/:id", DeleteTutor);

module.exports = { tutorRouter: router };
