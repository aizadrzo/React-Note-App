import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  function handleChange(event) {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className="card new-card">
      <textarea
        value={noteText}
        onChange={handleChange}
        placeholder="Add new note here..."
      ></textarea>
      <div className="card-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="savebtn" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
