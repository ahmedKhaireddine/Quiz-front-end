import React from "react";

import {
  Box,
  Subtitle,
  Title
} from "../../../styles/dashboard/layouts/HeaderStyled";

const Header = ({ children, fontSizeSubtitle, fontSizeTitle, subtitle, title }) => {
  return (
    <Box>
      <Title fontSizeTitle={fontSizeTitle}>{title}</Title>
      <Subtitle fontSizeSubtitle={fontSizeSubtitle}>{subtitle}</Subtitle>
      {children}
    </Box>
  );
};

export default Header;
