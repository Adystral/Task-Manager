import { Router } from "express";
import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/get", getTask);

router.post("/create", createTask);

router.patch("/edit/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
