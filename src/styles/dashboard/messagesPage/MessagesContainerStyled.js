import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 30px 70px 0px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
`;

export const ChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 30px;
  // background: green;
  overflow-y: auto;
  // position: relative;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px #1f939b;
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

// ----------- Bubbles ----------- //

export const BubbleLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 25px;
  background: lightgray;
  color: black;
  font-size: 18px;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const BubbleRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-self: end;
  margin: 10px 0px 10px auto;
  border-radius: 25px;
  background: #0078ff;
  color: #f1f1f1;
  font-size: 18px;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 15px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const RightMessage = styled.div``;

export const LeftMessage = styled.div``;

// ----------- Form ----------- //

export const Button = styled.button`
  width: 80px;
  height: 70px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  background-color: #e6e6e6;
  cursor: pointer;
  padding-right: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  // @media screen and (max-width: 1280px) {
  //   height: 60px;
  // }

  @media screen and (max-width: 992px) {
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    height: 30px;
  }
`;

export const ChatForm = styled.form`
  width: 100%;
  height: 120px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e6e6e6;
  // background: red;

  @media screen and (max-width: 1024px) {
    height: 80px;
  }
`;

export const InputContainer = styled.div`
  width: 95%;
  display: flex;
`;

export const InputGroup = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 80px;
  }
`;
