import Button from "./Button";
import { useState } from "react";

export default function InputItem({
  placeholder = "",
  type = "",
  btnChildren = "",
  btnClassName = "",
  inputClassName = "",
  addTask = () => {},
}) {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleAddTask() {
    if (inputText.trim() === "") return;
    addTask(inputText);
    setInputText("");
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
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <Button className={`${btnClassName} ${inputText.trim() === "" ? "opacity-50 cursor-not-allowed" : ""}`} onClick={handleAddTask}>
        {btnChildren}
      </Button>
    </div>
  );
}
