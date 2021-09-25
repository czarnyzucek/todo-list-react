import "./style.css";

const TaskList = ({ tasks, hideDone }) => (
    <ul className="taskList">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}>
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