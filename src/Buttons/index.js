import { ButtonWrapper, AdditionalButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <ButtonWrapper>
            <AdditionalButton onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </AdditionalButton>
            <AdditionalButton
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </AdditionalButton>
        </ButtonWrapper>
    )
);

export default Buttons;