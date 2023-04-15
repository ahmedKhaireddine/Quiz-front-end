import React from "react";
import { MdModeEdit } from "react-icons/md";

import { ButtonIcon } from "../../../styles/dashboard/core/ButtonStyled";

const EditButton = ({ handleClick, children }) => {
  return (
    <ButtonIcon>
      <MdModeEdit fontSize="1.3em" color="#4fa9af" onClick={handleClick}>
        {children}
      </MdModeEdit>
    </ButtonIcon>
  );
};

EditButton.defaultProps = { handleClick: () => {} };

export default EditButton;
