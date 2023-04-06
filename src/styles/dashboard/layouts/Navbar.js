import styled from "styled-components";

export const Navbar = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #ffffff;
    transfrom: translateX(0);
    transition: transform 0.2s ease-out;
    grid-template-columns: 1 / 2;
    grid-template-rows: 1 / 3;
    transform: translateX(0);

    @media screen and (max-width: 1024px) {
        transform: translateX(-100%);
    }
`