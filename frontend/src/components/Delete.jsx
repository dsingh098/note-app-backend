import React, { useState } from "react";
import { deleteNoteById } from "../../service/note.service";

const Delete = ({ id, onDelete }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async () => {
    try {
      setError("");
      setSuccess("");

      await deleteNoteById(id); 

      setSuccess("Note deleted successfully");

      onDelete(id);

    } catch (error) {
      console.log("Delete Note error", error);
      setError("Delete failed");
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Delete;