import React from "react";
import { Subtitle } from "../../../../styles/dashboard/layouts/AsideStyled";

const AsideSubtitle = ({ subtitle, padding }) => {
  return <Subtitle padding={padding}>{subtitle}</Subtitle>;
};

export default AsideSubtitle;
