import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const getRemark = (task) => {
    if (task.status !== "completed") return "onGoing";
    const due = new Date(task.dueDate);
    const completed = new Date(task.completedDate);
    return completed <= due ? "Completed_before_time" : "Completed_after_time";
  };

  const columns = [
    "no.",
    "Info",
    "due date",
    "completed date",
    "status",
    "remark",
    "update",
    "Delete",
  ];

  const close = () => {
    setShow(false);
    setSelectedTask(null);
    fetchData(); // refresh list after close
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleUpdate = (task) => {
    setSelectedTask(task);
    setShow(true);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold text-4xl p-4">Task Manager</h1>
      <div className="border p-2 m-2">
        <div className="flex items-center p-2 border-b gap-4 font-semibold">
          {columns.map((column) => (
            <div className="border-r p-2 w-full text-center" key={column}>
              {column}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {tasks.length > 0 &&
            tasks.map((task) => (
              <div
                className="flex items-center gap-4 w-full border-b p-4"
                key={task.id}
              >
                <div className="border-r p-2 w-full text-center">{task.id}</div>
                <div className="border-r p-2 w-full text-center">
                  {task.info}
                </div>
                <div className="border-r p-2 w-full text-center">
                  {task.dueDate}
                </div>
                <div className="border-r p-2 w-full text-center">
                  {task.completedDate}
                </div>
                <div className="border-r p-2 w-full text-center">
                  {task.status}
                </div>
                <div className="border-r p-2 w-full text-center">
                  {getRemark(task)}
                </div>

                <button
                  className="border-r p-2 w-full text-center"
                  onClick={() => handleUpdate(task)}
                >
                  Update
                </button>
                <button
                  className="border-r p-2 w-full text-center"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>

      <button
        onClick={() => setShow(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Add New Task
      </button>

      {show && <Modal close={close} task={selectedTask} />}
    </div>
  );
};

export default TaskManager;
