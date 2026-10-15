import { useState, useEffect } from "react";
import InputItem from "./components/InputItem";
import TodoItem from "./components/TodoItem";
import { ClipboardList, ClipboardCheck } from "lucide-react";
import "./index.css";

function App() {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  function addTask(inputText) {
    setTask([
      { id: crypto.randomUUID(), taskText: inputText, state: false },
      ...task,
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
      <div className="flex items-center gap-4 my-6">
        <ClipboardCheck size={40} className="text-slate-300" />
        <h1 className="text-4xl font-semibold">Task Manager</h1>
      </div>

      <InputItem
        placeholder="Don't procrastinate, just do it!"
        btnChildren="Add Task"
        addTask={addTask}
        updateTask={updateTask}
        btnClassName="px-3 py-1.5"
        inputClassName="w-full max-w-xs sm:w-96"
      />

      <div className="main-task-container w-full max-w-2xl flex flex-col gap-3">
        {/* EMPTY STATE */}
        {task.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-slate-500 border-2 border-dashed border-slate-700 rounded-xl bg-slate-800/20 w-full mt-4 ">
            <ClipboardList size={48} className="mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No tasks yet
            </h3>
            <p className="text-center max-w-sm">
              Your task list is completely empty. <br /> Add a task above to
              start crushing your goals!
            </p>
          </div>
        )}

        {/* PENDING TASKS */}
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

        {/* COMPLETED TASKS */}
        {completedTasks.length > 0 && (
          <div className="flex flex-col gap-3 opacity-65">
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
