import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 30px 70px 0px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  
`;

export const Navbar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
`;

export const ChatContainer = styled.div`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  overflow-y: auto;

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
`;

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
`;

export const RightMessage = styled.div``;

export const LeftMessage = styled.div``;

export const ChatForm = styled.form`
  width: 100%;
  height: 120px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
`;

export const InputContainer = styled.div`
  background: #fff;
  display: flex;
  width: 95%;
  height: 100px;
  border-radius: 9999px;
`;

export const InputGroup = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  cursor: pointer;
  padding-right: 20px;

  img {
    width: 50px;
    height: 50px;
  }
`;
