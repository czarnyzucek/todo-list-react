import { useState } from "react";
import { FormField, FormInput, FormButton } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <FormField onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>Dodaj zadanie</FormButton>
        </FormField>
    )
};

export default Form;