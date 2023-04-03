import React from "react";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";
import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import MessagesContainer from "../messagesPage/components/MessagesContainer"

import { SubTitle } from "../../../styles/ReusableTagsStyled";
import ConverstionsList from "./components/ConverstionsList";

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
          Vos Messages
        </SubTitle>
        <ConverstionsList />
      </Aside>
    </MainContainer>
  );
};

export default Messages;
