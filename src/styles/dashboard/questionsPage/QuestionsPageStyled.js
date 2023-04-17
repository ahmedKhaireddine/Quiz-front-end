import styled from "styled-components";


// -------- Eléments de la barre d'option -------- //

export const Button = styled.div`
  cursor: pointer;
  
  :hover {
    transform: scale(1.15);
  }
`;

export const BtnAdd = styled.div`
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid #1f939b;
  border-right: 1px solid #1f939b;
  cursor: pointer;
  background-color: rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

  :hover {
    background-color: rgba(0,0,0,0.155);
  }
  
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    height: 100%;
    width: 5%;
    background-color: #1f939b;
    transform: translateX(100%);
    transition: all .2s .2s ease-in-out;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    height: 2%;
    width: 100%;
    background-color: #1f939b;
    transform: translateX(100%);
    transition: all .3s ease-in-out;
  }

  :hover::before,
  :hover::after {
    transform: translateX(0%);
    transform: opacity;
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.div`
  width: 70%;
  height: 100%;
  text-align: end;
  line-height: 31px;
`;

// -------- Deuxième version du bouton Add -------- //

export const BtnAdd2 = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  // seconde version
  padding-left: 5px;
  // 

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

  :hover {
    font-weight: 500;
  }

  :hover::before,
  :hover::after {
    transform: translateY(0%);
    transform: opacity;
    opacity: 1;
  }
`;

export const Icon2 = styled.div`
  width: 15px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  :hover {
    font-weight: 500;
  }
`;

export const Text2 = styled.div`
  width: 75%;
  height: 100%;
  text-align: center;
  line-height: 31px;

  // seconde version
  padding-left: 5px;
  // 
`;

// -------- Troisième version du bouton Add -------- //

export const BtnAdd3 = styled.div`
  width: 120px;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 1px;
    width: 100%;
    background-color: #1f939b;
    transform: translateX(-100%);
    transition: all .2s ease-in-out;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    height: 100%;
    width: 2px;
    background-color: #1f939b;
    transform: translateY(-101%);
    transition: all .1s .2s ease-in-out;
  }

  :hover::before{
    transform: translateX(0%);
  }

  :hover::after {
    transform: translateY(0%);
  }

  :hover::before, 
  :hover::after {
    opacity: 1;
  }
`;

// -------- Search Container -------- //

export const SearchContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

// -------- 2e version -------- //

export const SearchContainer2 = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 65% 1fr;
  grid-gap: 15px;
  padding: 10px 0 20px 0;
  margin: 0 auto;
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
