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
      const updated = await updateNote(note._id, { title, description });

      alert("Note updated successfully");
      onUpdate(updated);
    } catch (error) {
      console.log("Update note error", error);
      alert("Failed to update note");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Update Note
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
