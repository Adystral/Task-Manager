import { useState } from "react";
import InputItem from "./components/InputItem";
import TodoItem from "./components/TodoItem";
import "./index.css";

function App() {
  const [task, setTask] = useState([]);

  function addTask(inputText) {
    setTask([
      ...task,
      { id: crypto.randomUUID(), taskText: inputText, state: false },
    ]);
  }

  function toggleDone(taskId) {
    const updatedTask = task.map((singleTask) => {
      return singleTask.id == taskId
        ? { ...singleTask, state: !singleTask.state }
        : singleTask;
    });

    setTask(updatedTask);
  }

  function updateTask(taskId, inputText) {
    const updatedTask = task.map((singleTask) => {
      return singleTask.id === taskId && inputText !== ""
        ? { ...singleTask, taskText: inputText }
        : singleTask;
    });

    setTask(updatedTask);
  }

  function deleteTask(taskId) {
    const updatedTask = task.filter((singleTask) => {
      return singleTask.id !== taskId;
    });

    setTask(updatedTask);
  }

  console.log(task);

  const pendingTasks = task.filter((singleTask) => !singleTask.state);
  const completedTasks = task.filter((singleTask) => singleTask.state);

  return (
    <div className="font-mono text-slate-300 flex flex-col justify-start items-center bg-slate-900 min-h-screen text-slate-30">
      <h1 className="text-4xl font-semibold my-5">Task Manager</h1>
      <InputItem
        placeholder="Don't procrastinate, just do it :>"
        btnChildren="Add Task"
        addTask={addTask}
        updateTask={updateTask}
        btnClassName="px-3 py-1.5"
        inputClassName="w-96"
      />

      <div className="main-task-container w-full max-w-2xl flex flex-col gap-3">
        {/* {task.map((singleTask) => {
          return (
            <TodoItem
              key={singleTask.id}
              taskId={singleTask.id}
              taskText={singleTask.taskText}
              state={singleTask.state}
              deleteTask={deleteTask}
              toggleDone={toggleDone}
              updateTask={updateTask}
            />
          );
        })} */}

        {/* Pending tasks */}
        {pendingTasks.length > 0 && (
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold mb-2 px-5">Pending Tasks</h2>

            {task
              .filter((singleTask) => !singleTask.state)
              .map((singleTask) => {
                return (
                  <TodoItem
                    key={singleTask.id}
                    taskId={singleTask.id}
                    taskText={singleTask.taskText}
                    state={singleTask.state}
                    deleteTask={deleteTask}
                    toggleDone={toggleDone}
                    updateTask={updateTask}
                  />
                );
              })}
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <div className="flex flex-col gap-3 opacity-60">
            <h2 className="text-2xl font-semibold mb-2 px-5">Completed</h2>
            {task
              .filter((singleTask) => singleTask.state)
              .map((singleTask) => {
                return (
                  <TodoItem
                    key={singleTask.id}
                    taskId={singleTask.id}
                    taskText={singleTask.taskText}
                    state={singleTask.state}
                    deleteTask={deleteTask}
                    toggleDone={toggleDone}
                    updateTask={updateTask}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
