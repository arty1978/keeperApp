import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleUpdate() {
    props.onUpdate(props.note);
    console.log(props.title, props.content);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <DeleteIcon onClick={handleClick} />
      </button>
      <button>
        <SyncAltIcon onClick={handleUpdate} />
      </button>
    </div>
  );
}
export default Note;
