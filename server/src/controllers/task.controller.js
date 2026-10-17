import { Task } from "../models/task.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import mongoose from "mongoose";

const createTask = async (req, res) => {
  // get details from frontend
  // check if the fields are empty
  // create the task object
  // return yes

  const { todo, isCompleted } = req.body || {};

  if (!todo) {
    throw new ApiError(400, "The task field is required");
  }

  const task = await Task.create({
    todo,
    isCompleted,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, task, "Task created successfully"));
};

const getTask = async (req, res) => {
  const task = await Task.find();

  if (task.length === 0) {
    return res
      .status(200)
      .json(new ApiResponse(200, task, "No tasks available to fetch"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Task fetched successfully"));
};

const updateTask = async (req, res) => {
  const { todo, isCompleted } = req.body;

  const taskId = req.params.id;

  if (!mongoose.isObjectIdOrHexString(taskId)) {
    throw new ApiError(400, "Invalid Task ID format");
  }
  
  if (!todo.trim() && isCompleted === undefined) {
    throw new ApiError(400, "Atleast one field is required");
  }

  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }

  const task = await Task.findByIdAndUpdate(
    taskId,
    {
      $set: {
        todo,
        isCompleted,
      },
    },
    { new: true, runValidators: true },
  );

  if (task === null) {
    throw new ApiError(404, "Task does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Updated Task Successfully"));
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  if (!taskId) {
    throw new ApiError(400, "Task ID is required");
  }

  if (!mongoose.isObjectIdOrHexString(taskId)) {
    throw new ApiError(400, "Invalid task ID format");
  }

  const task = await Task.findByIdAndDelete(taskId);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, task, "Task deleted successfully"));
};

export { createTask, getTask, updateTask, deleteTask };
