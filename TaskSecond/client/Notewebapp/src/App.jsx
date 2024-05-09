import Navbar from "./components/Navbar"
import Notes from "./components/notes"
import CreateNotes from "./components/createNotes"
import { useState } from "react";
function App() {
   const [uiUpdate,setUiupdate] = useState(false);
  return (
    <div>
      <Navbar/>
      <CreateNotes setUiupdate={setUiupdate}uiUpdate={uiUpdate}/>
      <Notes uiUpdate={uiUpdate} setUiupdate={setUiupdate}/>
    </div>
  )
}

export default App
