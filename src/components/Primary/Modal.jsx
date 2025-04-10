import React, { useState } from "react";

const Modal = ({ task, close }) => {
  const isEditMode = !!task;

  const [formData, setFormData] = useState({
    id: task?.id || String(Math.floor(Math.random() * 1000)),
    info: task?.info || "",
    dueDate: task?.dueDate || "",
    completedDate: task?.completedDate || "",
    status: task?.status || "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.id)

    const url = isEditMode
      ? `http://localhost:5000/tasks/${formData.id}`
      : "http://localhost:5000/tasks";

    const method = isEditMode ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(await response.json())

    close(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditMode ? "Update Task" : "Add New Task"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Info:</label>
            <input
              name="info"
              value={formData.info}
              onChange={handleChange}
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter task info"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Due Date:</label>
            <input
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              type="date"
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          {isEditMode && (
            <>
              <div>
                <label className="block mb-1 font-medium">
                  Completed Date:
                </label>
                <input
                  name="completedDate"
                  value={formData.completedDate}
                  onChange={handleChange}
                  type="date"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Status:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="Pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {isEditMode ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
