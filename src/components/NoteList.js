import React from "react";
import Masonry from "react-masonry-css";
import AddNote from "./AddNote";
import Note from "./Note";

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
  const breakpoints = {
    default: 4,
    1100: 3,
    800: 2,
    600: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          id={note.id}
          body={note.body}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </Masonry>
  );
}

export default NoteList;
