import React, { useEffect, useState } from "react";
import { getAllNotes } from "../services/api";
import { deleteNotes } from "../services/api";
import "../style/card.css";
function Notes({ uiUpdate, setUiupdate }) {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    const notesExtracter = async () => {
      const data = await getAllNotes();
      console.log("this is a data for components", data);
      data && setnotes(data);
    };
    notesExtracter();
  }, [uiUpdate]);

  // handeldelete
  const handeldelete = async (note_id) => {
    await deleteNotes(note_id);
    setUiupdate(!uiUpdate);
  };

  return (
    <>
      {notes.length > 0 ? (
        notes.map((currentElement, index) => (
          <div className="card" key={index}>
            <div className="content">
              <h3>{currentElement.author}</h3>
              <p>{currentElement.note}</p>
            </div>
            <div className="actions">
              <p>{currentElement.created_at}</p>
              <button onClick={() => handeldelete(currentElement.note_id)}>
                delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>please wait !</p>
      )}
    </>
  );
}

export default Notes;
