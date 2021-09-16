import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
        <div className="section__button">
            <button className="section__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;