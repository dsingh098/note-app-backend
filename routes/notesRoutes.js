  import { Router } from "express";
import auth from "../middleware/auth.js";

import {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
  deleteAllNotes,
} from "../controllers/notesControllers.js";

const noteRouter = Router();

// Create
noteRouter.post("/", auth, createNote);

// Get all
noteRouter.get("/", auth, getAllNotes);

// Get one
noteRouter.get("/:id", auth, getNote);

// Update
noteRouter.put("/:id", auth, updateNote);

// Delete one
noteRouter.delete("/:id", auth, deleteNote);

// Delete all
noteRouter.delete("/delete-all", auth, deleteAllNotes);

export default noteRouter;
