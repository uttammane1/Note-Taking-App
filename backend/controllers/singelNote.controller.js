const NotesModel = require("../models/notes.model");

const singleNote = async (req,res)=>{
    const id = req.params.id;
    try {
        if(id){
            const note = await NotesModel.findOne({_id:id});
            if(note){
                res.status(200).json({data:note})
            } 
            else{
                res.status(404).json({msg:`Note not found`});
            }

        }else{
            res.status(400).json({msg:`Please Provide id`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server error:${error}`})
    }
}

module.exports = singleNote;