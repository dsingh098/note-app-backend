import { Router } from "express";
import auth from "../middleware/auth.js";
import {
  createNote,
  getAllNote,
  getNote,
  updateNote,
  deleteNote,
  deleteAll
} from "../controllers/notesControllers.js";

const noteRouter = Router();


noteRouter.post("/", auth, createNote);          
noteRouter.get("/", auth, getAllNote);           
noteRouter.get("/:id", auth,  getNote);        
noteRouter.patch("/:id", auth, updateNote);   
noteRouter.delete("/:id", auth,  deleteNote);  
noteRouter.delete("/", auth, deleteAll);          

export default noteRouter;
