import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #ffffff;
    margin-bottom: 10px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid #dadada;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const HeaderName = styled.h2`
    padding: 15px;
    margin: 0;
    font-size: 20px;
`;