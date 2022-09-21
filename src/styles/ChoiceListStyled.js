import styled from "styled-components"

export const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  width: 800px;
  margin-top: 40px;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 48%;
  margin-bottom: 20px;
  height: 50px;
  background: ${ props => props.selected ? (
    "linear-gradient(100deg, #45DDE7 75%, #d5f9fc 90%)"
  ) : (
    "linear-gradient(100deg, #45DDE7 0%, #45DDE7 15%, #2d3359 20%)"
  )};
  border-radius: 5px;
  // box-shadow: 4px 4px 20px #202020, -4px -4px 5px #464646;

  &:nth-child(2n+0) {
    margin-left: 15px;
  }

  &:nth-child(2n+1) {
    margin-right: 15px;
  }
`

export const Polygon = styled.span`
  display: flex;
  flex-direction: column;
  // width: 40px;
  // height: 50px;
  // clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  // background-color: linear-gradient(100deg, #45DDE7 75%, #d5f9fc 90%);
  // border-top-left-radius: 5px;
  // border-bottom-left-radius: 5px;
`

export const Text = styled.p`
  margin-left: 20px;
`

// p {
//   animation-duration: 1s;
//   animation-name: slidein;
// }

// @keyframes slidein {
//   from {
//     left: 0;
//   }

//   to {
//     right: 0;
//   }
// }