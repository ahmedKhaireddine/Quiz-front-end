import styled from "styled-components"

export const Box = styled.div`
  ${props => props.height && `height: ${props.height};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.url && `
    background-image: url(${props.url});
    background-size: cover;
  `}
`

export const Form = styled.form`
  width: ${props => props.width};
`

export const Link = styled.a`
  color: rgba(31, 147, 155, 1);

  &:hover {
    text-decoration: underline;
  }
`

export const Text = styled.p`
  font-size: .8em;
  margin: ${props => props.margin || "0 auto"};
  text-align: center;
`

export const SubTitle = styled.h2`
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.fontSize || "2em"};
  font-weight: ${props => props.fontWeight || "normal"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  text-align: ${props => props.textAlign || "left"};
`

export const Title = styled.h1`
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.fontSize || "2em"};
  font-weight: ${props => props.fontWeight || "normal"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  text-align: ${props => props.textAlign || "left"};
`