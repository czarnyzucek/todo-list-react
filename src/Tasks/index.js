import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="Tasks">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`Tasks__item${task.done && hideDone ? " Tasks__item--hidden" : ""}`}>
                <button
                    className="Tasks__button Tasks__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? " tasksList__spanTask--done" : ""} tasksList__spanTask`}>
                    {task.content}
                </span>
                <button
                    className="Tasks__button Tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;