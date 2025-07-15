import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrash } from "react-icons/fa";
function ToDO() {
  let [task, setTask] = useState([]);
  let [newTask, setNewTask] = useState("");
  let addTask = () => {
    if (!newTask.trim()) return;
    setTask([...task, { task: newTask, id: uuidv4() }]);
    setNewTask("");
  };
  let handleOnChange = (e) => {
    setNewTask(e.target.value);
  };
  let DelTodo = (id) => {
    // setTask(task.filter((task) => task.id != id));   --> it does the same work as follows statement but the next line is good practice
    setTask(task.filter((prevtask) => prevtask.id != id));
  };
  return (
    <>
      <input type="text" value={newTask} onChange={handleOnChange} />
      <button onClick={addTask}>Add</button>
      <h3>To Do Tasks</h3>
      <hr />
      <ul>
        {task.map((el) => (
          <li key={el.id}>
            <span> {el.task}</span> &nbsp;
            <FaTrash
              style={{ cursor: "pointer" }}
              onClick={() => DelTodo(el.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDO;
