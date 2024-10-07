const express = require("express");
const addNotes = require("../controllers/addNotes.controller");
const getAllNotes = require("../controllers/getAllnotes.controller");
const singleNote = require("../controllers/singelNote.controller");
const updateNote = require("../controllers/updateNotes.controller");
const deleteNote = require("../controllers/deleteNote.controller");

const noteRouter = express.Router();


noteRouter.post("/",addNotes);
noteRouter.get("/allNotes",getAllNotes);
noteRouter.get("/:id",singleNote);
noteRouter.put("/:id",updateNote);
noteRouter.delete("/:id",deleteNote);


module.exports = noteRouter;