import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ButtonIcon } from "../../../styles/dashboard/core/ButtonStyled";

const DeleteButton = ({ children, margin, onClick }) => {
  return (
    <ButtonIcon margin={margin}>
      <RiDeleteBin6Line fontSize="1.3em" color="#4fa9af" onClick={onClick}>
        {children}
      </RiDeleteBin6Line>
    </ButtonIcon>
  );
};

DeleteButton.defaultProps = { onClick: () => {} };

export default DeleteButton;
