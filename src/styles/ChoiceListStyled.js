import styled from "styled-components"

// export const ListItems = styled.ul`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   list-style: none;
//   width: 800px;
//   margin-top: 40px;
// `

// export const Item = styled.li`
//   display: flex;
//   align-items: center;
//   width: 48%;
//   margin-bottom: 20px;
//   height: 50px;
//   background: ${ props => props.selected ? "#45DDE7" : "#2d3359"};
//   border-radius: 5px;
//   // box-shadow: 4px 4px 20px #202020, -4px -4px 5px #464646;

//   &:nth-child(2n+0) {
//     margin-left: 15px;
//   }

//   &:nth-child(2n+1) {
//     margin-right: 15px;
//   }
// `

// export const Polygon = styled.span`
//   display: flex;
//   flex-direction: column;
//   width: 40px;
//   height: 50px;
//   clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
//   background: #45DDE7;
//   border-top: 1px solid white;
//   border-bottom: 1px solid white;
//   border-left: 1px solid white;
//   border-top-left-radius: 5px;
//   border-bottom-left-radius: 5px;
// `

// export const Text = styled.p`
//   margin-left: 20px;
// `

// ________________________________________________________


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
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${ props => props.selected ? "#45DDE7" : "#2d3359"};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.6s all ease;

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
  width: 40px;
  height: 50px;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
  background: #45DDE7;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const Text = styled.p`
  margin-left: 20px;
`
