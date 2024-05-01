"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskText = e.target.task.value;
    if (taskText === null || taskText === "") {
      return alert("Task can be empty");
    }
    const newTasks = [...tasks, { id: Date.now(), text: taskText }];
    setTasks(newTasks);
    e.target.task.value = "";
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className="w-96 mx-auto mt-10 border p-4 shadow-lg">
      <p className="text-center font-bold text-3xl">DOTO LISTS</p>
      <hr />

      <form onSubmit={handleAddTask} className="flex flex-col mt-2">
        <input
          className="w-full border px-3 py-2 text-lg rounded-lg "
          type="text"
          name="task"
          placeholder=" Add Task"
          autoComplete="off"
        />
        <button className="bg-black text-white w-fit px-3 py-2 font-bold  rounded-md my-1 ">
          ADD
        </button>
      </form>

      <div className="my-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between w-full bg-slate-300 p-3 border border-gray-400"
          >
            <p>{task.text}</p>
            <div className="flex gap-3">
              <button
                className="bg-white rounded-sm px-2 py-1"
                onClick={() => {
                  const newText = prompt("Enter New Task Text:", task.text);
                  if (newText !== null && newText !== "") {
                    handleEditTask(task.id, newText);
                  }
                }}
              >
                Edit
              </button>
              <button
                className="bg-white rounded-sm px-2 py-1"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
