const express = require("express");
const { GetAllTutors, AddTutor, UpdateTutor, DeleteTutor } = require("../controllers/tutorsController");


const tutorRouter = express.Router();

tutorRouter.get("/", GetAllTutors);
tutorRouter.post("/", AddTutor);
tutorRouter.patch("/:id", UpdateTutor);
tutorRouter.delete("/:id", DeleteTutor);

module.exports = { tutorRouter };
