import React from "react";
import "../App.css";
function Note({ id, body, handleDeleteNote }) {
  return (
    <div className="card">
      <p>{body}</p>
      <div className="card-footer">
        <button
          className="deletebtn"
          onClick={() => {
            handleDeleteNote(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
