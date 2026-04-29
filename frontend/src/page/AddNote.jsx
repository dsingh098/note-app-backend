import React, { useState } from 'react'
import axios from "axios"

const AddNote = () => {

  const [title,setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = { title, description }

    try {
      const res = await axios.post("http://localhost:8000/api/notes/", data)

      console.log(res.data)
      alert("Note added successfully")

      setTitle("")
      setDescription("")

    } catch (error) {
      alert("Note add error: " + error.message)
    }
  }

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
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Add Note
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddNote