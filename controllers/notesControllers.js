import Note from "../models/notesModel.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "title and content are required " });
    }
    const newNote = await Note.create({
      title,
      content,
      user: req.user
    });

    return res.status(201).json({
      message: "note created",
      note: newNote,
    });
  } catch (err) {
    return res.status(500).json({ meassage: err.message });
  }
};

export const getAllNote = async (req, res) => {
  try {
    let notes = await Note.find({user: req.user});
    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

import mongoose from "mongoose";

export const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "id required" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "invalid id" });
    }

   const note = await Note.findOne({
  _id: id,
  user: req.user
});


    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }

    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateNote = async (req, res) => {
  try {
    let { id } = req.params;
  

    if (!id) {
      return res.status(400).json({ message: "enter id" });
    }

   Note.findOneAndUpdate(
  { _id: id, user: req.user },
  req.body,
  { new: true }
)


    if (!updateNote) {
      return res.status(404).json({ message: "note not found" });
    }

    return res.status(200).json({
      message: "note updated successfully",
      note: updateNote,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    let { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "id required" });

    }

    let deleteNote = await Note.findOneAndDelete({_id: id, user: req.user});

    if (!deleteNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({
      message: "note delete succufully",
      note: deleteNote,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteAll = async (req, res) => {
  try {
    await Note.deleteMany({ user: req.user });


    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "No notes found to delete",
      });
    }

    return res.status(200).json({
      message: "All notes deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
