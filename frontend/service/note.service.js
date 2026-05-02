import api from "./api.js";

// ADD NOTE
export const addNote = async (data) => {
  try {
    const res = await api.post("/notes", data);
    return res.data.data || res.data;
  } catch (error) {
    console.error("add note error", error);
    throw error;
  }
};

// GET ALL NOTES
export const getNotes = async () => {
  try {
    const res = await api.get("/notes");
    return res.data.data || res.data;
  } catch (error) {
    console.error("get notes error", error);
    throw error;
  }
};

// GET NOTE BY ID
export const getNoteById = async (id) => {
  try {
    const res = await api.get(`/notes/${id}`);
    return res.data.data || res.data;
  } catch (error) {
    console.error("get note by ID error", error);
    throw error;
  }
};

// UPDATE NOTE
export const updateNote = async (id, data) => {
  try {
    const res = await api.put(`/notes/${id}`, data);
    return res.data.data || res.data;
  } catch (error) {
    console.error("update note error", error);
    throw error;
  }
};

// DELETE NOTE
export const deleteNoteById = async (id) => {
  try {
    const res = await api.delete(`/notes/${id}`);
    return res.data.data || res.data;
  } catch (error) {
    console.error("delete note error", error);
    throw error;
  }
};

// DELETE ALL NOTES
export const deleteAllNotes = async () => {
  try {
    const res = await api.delete("/notes/delete-all");
    return res.data.data || res.data;
  } catch (error) {
    console.error("delete all notes error", error);
    throw error;
  }
};