// import React from 'react'

import Task from "./Task";

const Tasks = ({ tasks, deleteTask, toggleDone, fetchTask }) => {
  // console.log("tasks", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
          fetchTask={fetchTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
