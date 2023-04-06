import styled from "styled-components";

export const Btn = styled.button`
  display: block;
  font-size: 20px;
  border-radius: 5px;
  position: relative;
  color: ${props => props.color};
  padding: 7px 30px;
  margin: ${(props) => props.margin};
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${props => props.bg};

    ::before, ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.2s ease-in-out;
        border-radius: 5px;
    }

    ::before {
        border: 2px solid #1f939b;
    }

    ::after {
        background-color: #1f939b;
        z-index: -1;
    }

    :hover::before {
        transform: scaleY(1.1) scaleX(1.05);
    }

    :hover::after {
        transform: scaleY(0.9) scaleX(1);
    }
`;
