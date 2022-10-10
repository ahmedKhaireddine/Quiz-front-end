import styled from "styled-components"

export const Box = styled.div`
  width: ${props => props.width || "200px"};
  height: ${props => props.height || "200px"};
  position: ${props => props.position};
  background-image: url(${props => props.url});
  left: ${props => props.left};
  top:${props => props.top};
  right: ${props => props.right};
  bottom:${props => props.bottom};
  background-size: cover;

  @media screen and (max-width: 1100px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 640px) {
    width: 150px;
    height: 150px;
  }
`

export const Link = styled.a`
  background-color: #1f939b;
  color: white;
  font-size: .9em;
  padding: 10px 20px;
  margin: 60px auto;
  border-radius: 5px;
  box-shadow:
    0 1px 0 rgb(31, 147, 155),
    0 2px 0 rgb(26, 142, 150),
    0 3px 0 rgb(21, 137, 145),
    0 4px 0 rgb(19, 134, 143),
    0 5px 0 rgb(21, 137, 145),
    0 6px 0 rgb(26, 142, 150),
    6px 7px  5px  rgba(0, 0, 0, .40),
    6px 12px 10px rgba(0, 0, 0, .30),
    6px 17px 20px rgba(0, 0, 0, .20),
    6px 22px 30px rgba(0, 0, 0, .10);

  @media screen and (max-width: 900px) {
    font-size: .8em;
  }

  @media screen and (max-width: 640px) {
    font-size: .7em;
  }
`

export const Text = styled.p`
  font-weight: bold;
  font-size: ${props => props.size.lg}!important;
  letter-spacing: 2px;
  margin: 10px auto;
  text-align: center;
  color: ${props => props.color};
  font-size: 15em;

  @media screen and (max-width: 900px) {
    font-size: ${props => props.size.md}!important;
  }

  @media screen and (max-width: 640px) {
    font-size: ${props => props.size.sm}!important;
  }
`

export const Title = styled.h1`
  font-size: 15em;
  font-weight: bold;
  color: rgba(31, 147, 155, 1);
  text-shadow:
    0 1px 0 rgb(31, 147, 155),
    0 2px 0 rgb(26, 142, 150),
    0 3px 0 rgb(21, 137, 145),
    0 4px 0 rgb(19, 134, 143),
    0 5px 0 rgb(21, 137, 145),
    0 6px 0 rgb(26, 142, 150),
    6px 7px  5px  rgba(0, 0, 0, .40),
    6px 12px 10px rgba(0, 0, 0, .30),
    6px 17px 20px rgba(0, 0, 0, .20),
    6px 22px 30px rgba(0, 0, 0, .10);

  @media screen and (max-width: 900px) {
    font-size: 13em;
  }

  @media screen and (max-width: 640px) {
    font-size: 10em;
  }
`