import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width; 100vw;
    position: relative;
    background: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 1440px) {
        padding: 10vw;
    }
`