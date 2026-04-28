import Note from "../models/notesModel.js";
import mongoose from "mongoose";

// ================== CREATE NOTE ==================
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const note = await Note.create({
      title,
      content,
      user: req.user,
    });

    return res.status(201).json({
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// ================== GET ALL NOTES ==================
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user });

    return res.status(200).json(notes);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// ================== GET SINGLE NOTE ==================
export const getNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid note id",
      });
    }

    const note = await Note.findOne({
      _id: id,
      user: req.user,
    });

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json(note);
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// ================== UPDATE NOTE ==================
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid note id",
      });
    }

    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, user: req.user },
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// ================== DELETE NOTE ==================
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid note id",
      });
    }

    const deletedNote = await Note.findOneAndDelete({
      _id: id,
      user: req.user,
    });

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note deleted successfully",
      note: deletedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

// ================== DELETE ALL NOTES ==================
export const deleteAllNotes = async (req, res) => {
  try {
    const result = await Note.deleteMany({ user: req.user });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "No notes found",
      });
    }

    return res.status(200).json({
      message: "All notes deleted",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
