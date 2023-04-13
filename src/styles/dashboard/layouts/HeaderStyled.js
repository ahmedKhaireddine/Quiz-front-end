import styled from "styled-components";

export const Box = styled.div`
  padding: 10px 53px;
  border-bottom: 1px solid #a19d9d;
  background-color: #f8f8fa;
  position: ${props => props.position || "relative"};

  p {
    font-size: 17px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  color: #666;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #1f939b;
  margin-bottom: 5px;
`;

export const OptionsBar = styled.div`
  height: ${props => props.height || "40px"};
  width: ${props => props.width};
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${props => props.display || "none"};
`
