const url = "http://localhost:5000"


// getAllNotes
export const getAllNotes = async()=>{
    try{
     const response =  await fetch(`${url}/api/notes`);
     const data = await response.json();
      return data;
    }catch(error){
     throw error
    }
}


// createNotes
export const createNotes = async(data)=>{
    console.log("this is user data with api",data);
  try{
    const res =  await fetch (`${url}/api/createnote`,{
        method:"POST",
        headers:{
         "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
  }catch(error){
    throw error
  }
}


//deleteNotes
export const deleteNotes = async(id)=>{
    try{
        const res =  await fetch (`${url}/api/removenotes/${id}`,{
            method:"DELETE"
          })
        const data = await res.json();
        console.log(data);
    }catch(error){
        throw error
    }
}





