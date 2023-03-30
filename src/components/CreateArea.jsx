import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function setNewNote(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  const [isExtend, setExtend] = useState(false);
  function extendArea() {
    setExtend(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <form className="create-note">
      <input
        name="title"
        onChange={setNewNote}
        value={note.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={setNewNote}
        value={note.content}
        placeholder="Take a Note"
        rows={isExtend ? 3 : 1}
        onClick={extendArea}
      />
      <Zoom in={isExtend}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
}
export default CreateArea;
