const NotesModel = require("../models/notes.model");

const deleteNote = async(req,res)=>{
    const id = req.params.id
    try {
        if(id){
            const deleteNote = await NotesModel.findByIdAndDelete(id);
            res.status(201).send("Notes Deleted successfully");
        }else{
            res.status(404).json({msg:`Id not found`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server error:${error}`})
    }
}

module.exports = deleteNote;