import { useState, useEffect } from "react";

const AddTask = ({ addTask, editedTask, editable }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [editText, setEditText] = useState(false);
  const [editDay, setEditDay] = useState(false);

  useEffect(() => {
    if (editable) {
      setEditText(true);
      setEditDay(true);
    }
  }, [editable]);

  const onSubmit = (e) => {
    console.log(editedTask);
    e.preventDefault();
    if (editText && editDay) {
      addTask({ text: editedTask.text, day: editedTask.day, isDone: false });
    } else if (editText && !editDay) {
      addTask({ text: editedTask.text, day, isDone: false });
    } else if (!editText && editDay) {
      addTask({ text, day: editedTask.day, isDone: false });
    } else {
      addTask({ text, day, isDone: false });
    }
    setEditDay(false);
    setEditText(false);
    setText("");
    setDay("");
    // console.log(text);
    // console.log(day);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          name="text"
          type="text"
          placeholder="AddTask"
          required
          value={editText ? editedTask.text : text}
          onChange={(e) => {
            setEditText(false);
            setText(e.target.value);
          }}
          //   onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day & Time</label>
        <input
          id="day"
          name="day"
          type="text"
          placeholder="Add Day & Time"
          required
          value={editDay ? editedTask.day : day}
          onChange={(e) => {
            setEditDay(false);
            setDay(e.target.value);
          }}
          //   onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
