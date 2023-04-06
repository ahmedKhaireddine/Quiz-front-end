import React from "react";
import { useColorModeValue } from "@chakra-ui/react";

import { Btn } from "../../../styles/dashboard/core/ButtonStyled";

const Button = ({ handleClick, children, margin, width, type }) => {
    const bg = useColorModeValue("transparent", "#45DDE7");
    const color = useColorModeValue("#f1f1f1", "#F1F1F1");
    const hoverBg = useColorModeValue("#02818a", "#9ceff5");
    const hoverColor = useColorModeValue("#fafafa", "rgba(0, 0, 0, 0.8)");

    return (
    <Btn
      bg={bg}
      color={color}
      hoverBg={hoverBg}
      hoverColor={hoverColor}
      onClick={handleClick}
      type={type}
      width={width}
      margin={margin}
    >
      {children}
    </Btn>
  );
};

Button.defaultProps = {
    handleClick: () => {},
    type: "button",
    width: "200px",
    margin:"0px auto"
}

export default Button;
