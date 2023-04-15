import React from "react";

import CentralContainer from "../../layouts/CentralContainer";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const HomeContainer = () => {
  return (
    <CentralContainer
      flexDirection="column"
      background="#f8f8fa"
      width="100%"
      height="100%"
    >
      <SubTitle
        fontSize="30px"
        fontWeight="bold"
        color="#1f939b"
        margin="0 0 15px 0"
      >
        Historique
      </SubTitle>
    </CentralContainer>
  );
};

export default HomeContainer;
