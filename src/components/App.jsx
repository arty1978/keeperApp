import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  function updateNote(id) {
    setNotes((...prevNotes) => {
      // console.log(notes);
      return prevNotes.filter((noteItem) => {
        console.log("noteItem", noteItem, Note);
        noteItem = <Note />;
        return notes;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteNote}
          onUpdate={updateNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
