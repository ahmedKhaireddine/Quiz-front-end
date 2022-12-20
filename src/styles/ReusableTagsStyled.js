import styled from "styled-components"

export const Box = styled.div`
  ${props => props.height && `height: ${props.height};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.padding && `padding: ${props.padding}`}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  ${props => props.url && `
    background-image: url(${props.url});
    background-size: cover;
  `}
`

export const Form = styled.form`
  width: ${props => props.width};
`

export const Item = styled.li`
  ${props => props.display && `display: ${props.display};`}
  ${props => props.display && `display: ${props.display};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.alignItems && `align-items: ${props.alignItems};`}
`

export const ListItems = styled.ul`
  ${props => props.margin && `margin: ${props.margin};`}
`

export const Link = styled.a`
  color: rgba(31, 147, 155, 1);

  &:hover {
    text-decoration: underline;
  }
`

export const Picture = styled.img`
  ${props => props.width && `width: ${props.width};`}
  ${props => props.margin && `margin: ${props.margin};`}
  ${props => props.borderRadius && `border-radius: ${props.borderRadius};`}
`

export const SubTitle = styled.h2`
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.fontSize || "2em"};
  font-weight: ${props => props.fontWeight || "normal"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  text-align: ${props => props.textAlign || "left"};
`

export const Text = styled.p`
  font-size: ${props => props.fontSize || ".8em"};
  margin: ${props => props.margin};
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.whiteSpace && `white-space: ${props.whiteSpace};`}
  ${props => props.overflow && `overflow: ${props.overflow};`}
  ${props => props.textOverflow && `text-overflow: ${props.textOverflow};`}
`

export const Title = styled.h1`
  color: ${props => props.color || "inherit"};
  font-size: ${props => props.fontSize || "2em"};
  font-weight: ${props => props.fontWeight || "normal"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  text-align: ${props => props.textAlign || "left"};
`

export const TitleH3 = styled.h3`
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props => props.padding && `padding: ${props.padding};`}
  color: ${props => props.color || "inherit"};
`

export const TitleH4 = styled.h4`
  ${props => props.fontSize && `font-size: ${props.fontSize};`}
  ${props => props.fontWeight && `font-weight: ${props.fontWeight};`}
  ${props => props.padding && `padding: ${props.padding};`}
  color: ${props => props.color || "inherit"};
`