import React, { useState, useEffect } from "react";
import { updateNote } from "../../service/note.service.js";

const Update = ({ note, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated = await updateNote(note._id, {
        title,
        description,
      });

      alert("Note updated successfully");

      onUpdate(updated); 

    } catch (error) {
      console.log("Update note error", error);
      alert("Failed to update note");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default Update;