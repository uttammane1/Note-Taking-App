const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
},{versionKey:false,timestamps:true});


const NotesModel = mongoose.model("note",notesSchema);

module.exports = NotesModel;