import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ButtonIcon } from "../../../styles/dashboard/core/ButtonStyled";

const DeleteButton = () => {
  return (
    <ButtonIcon>
      <RiDeleteBin6Line fontSize="1.3em" color="#4fa9af" />
    </ButtonIcon>
  );
};

export default DeleteButton;
