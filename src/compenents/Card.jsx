import React from "react";

export default function Card({ task, index, handleDelete, handleEdit }) {
  const deleteTask = () => {
    handleDelete(index);
  };

  const editTask = () => {
        handleEdit(index)
  }

  return (
    <li
      className="bg-slate-300 flex justify-between
     gap-2 text-2xl p-3 w-3/4 rounded-md text-slate-900"
    >
      {task}
      <div className="flex gap-4 items-center">
        <button onClick={editTask}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={deleteTask}>
          <i className="fa-solid fa-trash-can-arrow-up"></i>
        </button>
      </div>
    </li>
  );
}

{
  /* <div className='bg-slate-200 h-10 w-3/5  rounded-md'>
      <h1 className='p-4'>Task</h1>
      
      <i class="fa-solid fa-pen-to-square"></i>
      </div> */
}
