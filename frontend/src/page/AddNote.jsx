import React, { useState } from "react";
import { addNote } from "../../service/note.service.js";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      await addNote({ title, content });

      alert("Note added successfully");

      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to add note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Add Note
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              placeholder="Enter content..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
          >
            {loading ? "Adding..." : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
