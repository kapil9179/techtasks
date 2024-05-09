const express = require("express")
const {getAllNotes,deleteNotes,createPost} = require("../controller/notes")

// create router with  express
const routes = express.Router();

// handel request
routes.get("/notes",getAllNotes)
routes.post("/createnote",createPost)
routes.delete("/removenotes/:id",deleteNotes)

module.exports=routes;