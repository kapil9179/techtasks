const pool = require("../services/db")

const getAllNotes = async(req,res)=>{
  const [allnotes] = await pool.query("SELECT * FROM notes"
  );
  console.log(allnotes);
  res.status(200).json(allnotes);
}

const createPost = async(req,res)=>{
  const {author,note} = req.body;
    const [result] = await pool.query("INSERT INTO notes(author,note) VALUES(?, ?)",[author,note]);
      console.log(result);
    res.status(201).end()
}



const deleteNotes = async(req,res)=>{
    const {id} = req.params;
    try{
      if(id){
        const [result] = await pool.query("DELETE FROM notes WHERE note_id = ? ",[id]);
        res.json(result);
      }else{
        res.status(404).send({message:"bad req"})
      }
    }catch(error){
      res.status(500).send({message:"internal server error"})
    }
}
module.exports={getAllNotes,deleteNotes,createPost};