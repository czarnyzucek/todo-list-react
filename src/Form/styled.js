import styled from "styled-components";

export const FormField = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;
    padding: 15px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        grid-gap: 7px;
    }
`;

export const FormInput = styled.input`
    font-size: 16px;
    font-family: Montserrat, sans-serif;
    padding: 10px;
    border: 1px solid #dadada;
`;

export const FormButton = styled.button`
    font-size: 16px;
    padding: 10px;
    font-family: Montserrat, sans-serif;
    color: white;
    background-color: teal;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    letter-spacing: 0.5px;

    @media (max-width: 767px) {
        padding: 8px;
    }

        &:hover {
            transform: scale(1.1);
            background-color: hsl(180, 100%, 30%);

            @media (max-width: 767px) {
                transform: scale(1.03);
            }
        }

        &:active {
            outline: 1px solid black;
        }
`;
