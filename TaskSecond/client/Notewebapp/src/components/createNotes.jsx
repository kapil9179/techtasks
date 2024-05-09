import React, { useEffect, useState } from 'react'
import '../style/createpost.css'
import { createNotes } from '../services/api'
function CreateNotes({setUiupdate,uiUpdate}) {
     const [userInputs,setInputs] = useState({
        author:"",
        note:""
     })

     

      const changesHandler = (e)=>{
         setInputs({
            ...userInputs,
            [e.target.name]:e.target.value,
         })
      }

     const handelPost = async(userInputs)=>{
        await createNotes(userInputs)
            setUiupdate(!uiUpdate)
     }

  return (
    <div className='createcard'>
        <input type="text" 
          value={userInputs.author}
          name='author'
          placeholder='enter author name'
          onChange={(e)=>changesHandler(e)}
          className='input-field'
        />
        <input type="text" 
          value={userInputs.note}
          name='note'
          placeholder='take notes'
          onChange={(e)=>changesHandler(e)}
          className='input-field'
        />
        <button className='submit-button' onClick={()=>handelPost(userInputs)}>add note</button>
    </div>
  )
}

export default CreateNotes