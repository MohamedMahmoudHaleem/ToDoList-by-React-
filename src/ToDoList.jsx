import { useRef, useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const btnRef = useRef(null);
  const length = tasks.length;
  function handleInputChange() {
    const task = btnRef.current.value;
    if (!task) return;

    setTasks(() => [...tasks, task]);
    btnRef.current.value = "";
  }
  function deleteTask(index) {
    setTasks(() => tasks.filter((_, i) => i !== index));
  }
  function moveIndexUp(index) {
    if (!index) return;

    [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
    setTasks(() => [...tasks]);
  }
  function moveIndexDown(index) {
    if (index >= length - 1) return;

    [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
    setTasks(() => [...tasks]);
  }
  console.log(tasks);
  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <div className="data">
        <input ref={btnRef} type="text" />
        <button className="btnAdd" onClick={handleInputChange}>
          Add
        </button>
      </div>
      <ul className="task-container">
        {tasks.map((task, index) => (
          <li className="task" key={task}>
            {task}{" "}
            <div className="operation">
              <button className="btnDelete" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <span className="up" onClick={() => moveIndexUp(index)}>
                👆
              </span>
              <span className="down" onClick={() => moveIndexDown(index)}>
                👇
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
