import React, { useEffect, useState } from "react";
import { getNotes, deleteNoteById } from "../../service/note.service.js";
import { useNavigate } from "react-router-dom";


const GetNote = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const data = await getNotes();

      console.log("NOTES DATA:", data);

      if (Array.isArray(data)) {
        setNotes(data);
      } else if (Array.isArray(data.notes)) {
        setNotes(data.notes);
      } else if (Array.isArray(data.data)) {
        setNotes(data.data);
      } else {
        setNotes([]);
      }

    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);


  const handleDelete = async (id) => {
    try {
      await deleteNoteById(id);
      fetchNotes(); 
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-gray-100 min-h-screen max-w-6xl mx-auto w-full">
  {notes.length === 0 ? (
    <p className="text-gray-500 text-center col-span-full">No Notes Found</p>
  ) : (
    notes.map((note) => (
      <div
        key={note._id}
        className="bg-gray-50 border border-gray-200 shadow-sm p-5 rounded-md hover:shadow-md transition-shadow"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 break-words">{note.title}</h2>
        <p className="text-gray-600 mt-2">{note.description}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {/* EDIT */}
          <button
            onClick={() => navigate(`/edit/${note._id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:py-1.5 rounded-md text-sm transition-colors w-full sm:w-auto text-center"
          >
            Edit
          </button>

          {/* DELETE */}
          <button
            onClick={() => handleDelete(note._id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:py-1.5 rounded-md text-sm transition-colors w-full sm:w-auto text-center"
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</div>

  );
};

export default GetNote;
