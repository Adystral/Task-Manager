import Button from "./Button";
import { useState } from "react";

export default function InputItem({
  placeholder = "",
  type = "",
  // className = "",
  btnChildren = "",
  btnClassName = "",
  inputClassName = "",
  addTask = () => {},
  updateTask,
  isEditing,
}) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleAddTask() {
    addTask(inputText);
    setInputText("");
  }

  function handleEdit(taskText) {
    setInputText(taskText);
    updateTask(inputText);
  }

  function handleSubmit() {
    {
      isEditing === true ? handleEdit() : handleAddTask();
    }
  }

  return (
    <div className="my-5 flex justify-center items-center">
      <label>Your Task : </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`bg-[#1e293b]/50 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-1.5 mx-2 focus:outline-none focus:border-slate-400 font-mono text-base transition-colors duration-200 ${inputClassName}`}

        onChange={handleChange}
        value={inputText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <Button className={btnClassName} onClick={handleSubmit}>
        {btnChildren}
      </Button>
    </div>
  );
}
