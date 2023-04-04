import styled from "styled-components";

export const  Box = styled.div`
    width: 100%;
    height: 150px;
    padding: 10px 15px;
    position: relative;
    cursor: pointer;

    :hover {
      background-color: #DFDFDF;
    }

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

export const Sender = styled.h3`
  font-size: 18px;
  font-weight: 700;
  padding: 5px 0;
  color: #444;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 20px;
  max-height: 60px;
  padding-right: 14px;
  position: relative;
  overflow: hidden;
  text-align: justify;

  ::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const Time = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0,0,0,0.7);
`;
