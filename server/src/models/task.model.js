import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

export const Task = mongoose.model("Task", taskSchema);