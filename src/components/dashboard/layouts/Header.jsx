import React from "react";

import {
  Box,
  Subtitle,
  Title,
  OptionsBar
} from "../../../styles/dashboard/layouts/HeaderStyled";

const Header = ({ title, subtitle, children }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Box>
  );
};

export default Header;
