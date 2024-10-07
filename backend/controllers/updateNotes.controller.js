const NotesModel = require("../models/notes.model");

const updateNote = async(req,res)=>{
    const id = req.params.id
    try {
        if(id){
            const updateNote = await NotesModel.findByIdAndUpdate(id,req.body);
            res.status(201).send("Notes Updated successfully");
        }else{
            res.status(404).json({msg:`Id not found`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server error:${error}`})
    }
}

module.exports = updateNote;