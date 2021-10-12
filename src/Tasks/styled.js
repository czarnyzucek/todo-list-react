import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    padding: 20px;
    margin: 0;
    list-style-type: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 15px;
    padding: 10px;
    border-bottom: 1px solid hsl(0, 0%, 80%);

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    transition: background 0.3s;
    cursor: pointer;

    ${({ done }) => done && css`
        background-color: green;
        color: white;
        font-size: 20px;
        line-height: 20px;

        &:hover {
            background-color: hsl(120, 100%, 30%);
        }

        &:active {
            outline: 1px solid black;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: red;
        color: white;
        font-size: 20px;
        line-height: 20px;

        &:hover {
            background-color: hsl(0, 100%, 60%);
        }

        &:active {
            outline: 1px solid black;
        }
    `}
`;