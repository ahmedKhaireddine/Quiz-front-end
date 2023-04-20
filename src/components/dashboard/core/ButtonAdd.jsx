import React from 'react'

import { CgAddR } from "react-icons/cg";
import { BiAddToQueue } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { RiAddFill } from "react-icons/ri";
import { RiAddCircleLine } from "react-icons/ri";

import { BtnAdd, BtnAdd2, BtnAdd3, Icon, Icon2, Text2, Text } from '../../../styles/dashboard/questionsPage/QuestionsPageStyled';

const ButtonAdd = () => {
  return (
  //   <BtnAdd>
  //   <Text>Ajouter &nbsp;</Text>
  //   <Icon>
  //   {/* <CgAddR /> */}
  //   {/* <BiAddToQueue /> */}
  //   <VscAdd />
  //   {/* <RiAddFill /> */}
  //   {/* <RiAddCircleLine /> */}
  //   </Icon>
  // </BtnAdd>
      
      <BtnAdd2>
      <Icon2>
      {/* <CgAddR /> */}
      {/* <BiAddToQueue /> */}
      <VscAdd />
      {/* <RiAddFill /> */}
      {/* <RiAddCircleLine /> */}
      </Icon2>
      <Text2>Ajouter &nbsp;</Text2>
    </BtnAdd2>

  //   <BtnAdd3>
  //   <Icon2>
  //   {/* <CgAddR /> */}
  //   {/* <BiAddToQueue /> */}
  //   <VscAdd />
  //   {/* <RiAddFill /> */}
  //   {/* <RiAddCircleLine /> */}
  //   </Icon2>
  //   <Text2>Ajouter &nbsp;</Text2>
  // </BtnAdd3>
  )
}

export default ButtonAdd