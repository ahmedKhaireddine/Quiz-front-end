import React from "react";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";

import { MessagesContainer } from "../../../styles/dashboard/messagesPage/messagesPageStyled";
import { SubTitle } from "../../../styles/ReusableTagsStyled";

const Messages = () => {

  return (
    <MainContainer>
      <Header
        title="Messages"
        description="Consultez vos messages et dialoguez avec l'administrateur"
      />

      <MessagesContainer />

      <Aside>
        <SubTitle
          txtCenter="center"
          fontSize="30px"
          fontWeight="bold"
          color="#1f939b"
          margin="0 0 20px 0"
        >
        </SubTitle>
      </Aside>
    </MainContainer>
  );
};

export default Messages;
