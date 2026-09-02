import { useState } from "react";
import Button from "./Button";
import { CheckCheck, PenLine, Trash2 } from "lucide-react";

export default function TodoItem({
  taskId,
  taskText,
  state,
  deleteTask,
  toggleDone,
  updateTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(taskText);

  return (
    <div
      id={taskId}
      className="task-container flex flex-row bg-slate-800 p-4 rounded-lg justify-between items-center mx-5 hover:scale-105 transition-transform duration-150"
    >
      <div>
        {/* Task and edit input */}
        
        <div
          className={`task-text flex text-xl transition-colors duration-200 line-through ${
            state
              ? "text-slate-500 decoration-slate-500"
              : "decoration-transparent"
          }`}
        >
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-[#1e293b]/50 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-1.5 mx-2 focus:outline-none focus:border-slate-400 font-mono text-base transition-colors duration-200"
              />
              <Button
                className="save-btn text-base px-3 py-1.5"
                children="Save"
                onClick={() => {
                  updateTask(taskId, editText);
                  setIsEditing(false);
                }}
              />
            </div>
          ) : (
            taskText
          )}
        </div>

        <div className="state flex text-slate-600">
          {state ? "Done" : "Pending"}
        </div>
      </div>

      {/* Action btns */}
      <div className="action-btns flex gap-2 ml-10">
        <Button
          onClick={() => toggleDone(taskId)}
          className="completed-btn px-3 py-3"
        >
          <CheckCheck size={20}/>
        </Button>

        <Button
          onClick={() => setIsEditing(true)}
          className="edit-btn px-3 py-3"
        >
          <PenLine size={20}/>
        </Button>

        <Button
          onClick={() => deleteTask(taskId)}
          className="delete-btn px-3 py-3"
        >
          <Trash2 size={20}/>
        </Button>
      </div>
    </div>
  );
}
