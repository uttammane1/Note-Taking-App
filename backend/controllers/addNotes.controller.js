const NotesModel = require("../models/notes.model")

const addNotes = async(req,res)=>{
    const {title,content} = req.body
    try {
        if(title && content){
            const newNotes = new NotesModel({title,content});
            await newNotes.save()
            res.status(201).json({msg:`Notes Added success`})
        }else{
            res.status(400).json({msg:`Please Provide title and content`})
        }
    } catch (error) {
        res.status(500).json({msg:`Internal server error: ${error}`});
    }
}

module.exports = addNotes;