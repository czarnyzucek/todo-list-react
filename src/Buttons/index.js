import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="section__buttonWrapper">
            <button onClick={toggleHideDone} className="section__button">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
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