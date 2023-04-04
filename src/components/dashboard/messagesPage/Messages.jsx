import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import MessagesContainer from "./components/MessagesContainer";
import ConverstionsList from "./components/ConverstionsList";

import { SubTitle } from "../../../styles/ReusableTagsStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Messages = () => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Messages"
          description="Consultez vos messages et dialoguez avec l'administrateur"
        />
        <Helmet>
          <title>Messages</title>
        </Helmet>

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
    </HelmetProvider>
  );
};

export default Messages;
