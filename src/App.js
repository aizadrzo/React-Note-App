import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Search from "./components/Search";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      body: "Hello World 🌏",
    },
  ]);

  function addNote(text) {
    const newNote = {
      id: nanoid(),
      body: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-note-app-data"));

    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.body.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
