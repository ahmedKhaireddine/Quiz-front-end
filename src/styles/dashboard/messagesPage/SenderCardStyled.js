import styled from "styled-components";

export const Card = styled.div`
    width: 100%:
    height: 200px;
    background-color: #f1f1f1;
    border-top: 1px solid #444;
    border-bottom: 1px solid #444;
    padding: 20px;
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
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
  }
  p {
    font-size: 50px;
  }
`;

export const Name = styled.h4`
    width: 50%:
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #666;
`;

export const Post = styled.p`
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
`;
