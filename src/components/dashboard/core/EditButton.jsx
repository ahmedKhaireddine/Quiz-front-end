import React from "react";
import { MdModeEdit } from "react-icons/md";

import { ButtonIcon } from "../../../styles/dashboard/core/ButtonStyled";

const EditButton = ({ children, margin, onClick }) => {
  return (
    <ButtonIcon margin={margin}>
      <MdModeEdit fontSize="1.3em" color="#4fa9af" onClick={onClick}>
        {children}
      </MdModeEdit>
    </ButtonIcon>
  );
};

EditButton.defaultProps = { onClick: () => {} };

export default EditButton;
