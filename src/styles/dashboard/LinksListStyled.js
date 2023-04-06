import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  margin: 10px auto;
  width: 80%;
  padding: 3px 10px;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `
      border-left: 2px solid #4fa9af;
    `
      : `&:hover {
      border-left: 2px solid #4fa9af;
    }`}
`;

export const ItemWithoutPseudoClass = styled.li`
  display: flex;
  margin: 10px auto;
  width: 80%;
  padding: 3px 10px;
  align-items: center;
`;
export const ListItems = styled.ul`
  margin: 80px 20px 50px;

  @media screen and (max-height: 600px) {
    margin: 50px 0;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  margin: 10px auto;
  width: 80%;
  padding: 3px 10px;
  align-items: center;
`;

export const Title = styled.h4`
  color: black;
  font-size: 0.8em;
  font-weight: 600;
  padding: 0 0 0 20px;
`;
