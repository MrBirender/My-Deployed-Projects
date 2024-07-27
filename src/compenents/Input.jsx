import React, { useState } from "react";

export default function Input({ handleAddTodo, value, setValue }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleAdd = () => {
    handleAddTodo(value);
    setValue("");
  };

  return (
    <header>
      <div className=" flex justify-center gap-4 m-5 ">
        <input
          onChange={handleChange}
          name="todo"
          value={value}
          className="bg-slate-400 placeholder:text-slate-600 p-2 text-2xl border w-96 rounded-md"
          placeholder="enter todo..."
        />
        <button
          onClick={handleAdd}
          className="text-xl p-2 border-solid bg-slate-400 rounded-md"
        >
          Add
        </button>
      </div>
    </header>
  );
}
