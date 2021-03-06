import styled from "styled-components";

export const ButtonWrapper = styled.div`
    margin: 0 10px;
`;

export const AdditionalButton = styled.button`
    font-family: Montserrat, sans-serif;
    border: none;
    margin: 0 10px;
    color: hsl(180, 100%, 25%);
    background-color: transparent;
    font-size: 16px;
    transition: color 0.3s;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 100%;
        margin: 10px 0;
    }

        &:hover {
            color: hsl(180, 100%, 35%);
        }

        &:disabled {
            color: #ccc;
        }
`;