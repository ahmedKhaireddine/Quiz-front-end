import styled from "styled-components";

export const Card = styled.div`
    width: 100%:
    background-color: #f1f1f1;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 20px;

    @media screen and (max-width: 1280px) {
      padding: 10px 20px;
    }
`;

export const UserInfos = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;

  div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
  }
  
  p {
    font-size: 40px;
  }
`;

export const Name = styled.h4`
    width: 50%:
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #666;
`;

export const NameContainer = styled.h4`
  display: flex;
  flex-direction: column;
`;

export const Post = styled.p`
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
`;
