import InputItem from "./components/InputItem";
import "./index.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  function addTask(inputText) {
    setTask([
      ...task,
      { id: crypto.randomUUID(), taskText: inputText, state: false },
    ]);
  }

  function deleteTask(taskId) {
    const updatedTask = task.filter((singleTask) => {
      return singleTask.id !== taskId;
    });

    setTask(updatedTask);
  }

  function toggleDone(taskId) {
    const updatedTask = task.map((singleTask) => {
      return (
        singleTask.id == taskId ? 
          {...singleTask, state: !singleTask.state} :
          singleTask
      )
    });

    setTask(updatedTask);
  }

  function updateTask(taskId, inputText) {
    const newTaskText = inputText;
    
    const updatedTask = task.map((singleTask) => {
      return (
        singleTask.id == taskId && newTaskText !== "" ?
          {...singleTask, taskText: newTaskText} : 
          singleTask
      ) 

    });

    setTask(updatedTask);
  }

  console.log(task);
  
  
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

      <div className="w-full max-w-2xl flex flex-col gap-3">
        {task.map((singleTask) => {
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
    </div>
  );
}

export default App;
