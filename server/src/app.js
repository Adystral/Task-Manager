import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

// Routes Import
import taskRouter from "./routes/task.route.js";
import userRouter from "./routes/user.route.js";

// Routes Declaration
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/user", userRouter);

export { app };
