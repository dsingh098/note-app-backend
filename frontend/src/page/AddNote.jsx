import React, { useState } from "react";
import { addNote } from "../../service/note.service.js";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post({
        title,
        description,
      });

      console.log(res.data);

      alert("Note added successfully");

      
      setTitle("");
      setDescription("");

    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to add note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Add Note
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              placeholder="Enter a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter description..."
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          >
            {loading ? "Adding..." : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;