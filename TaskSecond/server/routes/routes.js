const express = require("express")
const {getAllNotes,deleteNotes,createPost} = require("../controller/notes")

// create 
const routes = express.Router();

routes.get("/notes",getAllNotes)
routes.post("/createnote",createPost)
routes.delete("/removenotes/:id",deleteNotes)

module.exports=routes;