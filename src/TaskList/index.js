import "./style.css";

const TaskList = ({ tasks, hideDoneTasks }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                className={`taskList__item${task.done && hideDoneTasks ? " taskList__item--hidden" : ""}`}>
                <button className="taskList__button taskList__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? " tasksList__spanTask--done" : ""} tasksList__spanTask`}>
                    {task.content}
                </span>
                <button className="taskList__button taskList__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default TaskList;