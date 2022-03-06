// import React from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const Task = ({ task, deleteTask, toggleDone, fetchTask }) => {
  return (
    <div
      className={`task ${task.isDone ? "done" : ""}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}
        <div
          style={{
            display: "flex",
            width: "50px",
            justifyContent: "space-between",
          }}
        >
          <AiFillEdit
            style={{ color: "green" }}
            onClick={() => fetchTask(task.id)}
          />
          <FaTimesCircle
            style={{ color: "red" }}
            onClick={() => deleteTask(task.id)}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
