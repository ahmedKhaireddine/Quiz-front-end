import styled from "styled-components";


// -------- Eléments de la barre d'option -------- //

export const Button = styled.div`
  cursor: pointer;
  
  :hover {
    transform: scale(1.15);
  }
`;

export const BtnAdd = styled.button`
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 0 7px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 2%;
    width: 100%;
    background-color: #1f939b;
    transform: translateY(100%);
    transition: all .15s ease-in-out;
  }

  :hover::before,
  :hover::after {
    transform: translateY(0%);
    transform: opacity;
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 15px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 7px;
`;

export const Text = styled.div`
  height: 100%;
  text-align: center;
  line-height: 31px;
`;

export const SearchContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 65% 1fr;
  grid-gap: 15px;
  padding: 10px 0 20px 0;
  margin: 0 auto;
`

export const SelectContainer = styled.div`
  width: ${props => props.width || "100%"};
  margin: ${props => props.margin};
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  background: "#f8f8fa";
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #1f939b;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #1f939b;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #02818a;
  }
`;

export const ItemPreviewCardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const AnswerValueContainer = styled.p`
  white-space: nowrap;
` 

export const ButtonContainer = styled.div`
  display: flex;
`

export const ItemsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    margin-right: ${props => props.marginRight || "10px"};
  }
`

export const Line = styled.div`
  align-self: flex-end;
  height: 1px;
  width: 100%;
  background-color: rgba(0,0,0,0.2);
`


export const ListContainer = styled.ul`
  display: flex;
  flex-direction column;

  li {
    list-style-type: none;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: ${props => props.padding || "0 0 15px 0"};

  p {
    line-height: 40px;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 15px;
    line-height: 40px;
  }
`;
