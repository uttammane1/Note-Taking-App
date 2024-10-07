const NotesModel = require("../models/notes.model")

const getAllNotes = async(req,res)=>{
    try {
        const allNotes = await NotesModel.find();
        if(allNotes){
            res.status(200).json({data:allNotes})
        }else{
            res.status(404).json({msg:`Notes not found`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server issue: ${error}`})
    }
}

module.exports = getAllNotes;