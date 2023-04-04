import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/Aside";
import Header from "../layouts/Header";
import MessagesContainer from "./components/MessagesContainer";
import SenderCard from "./components/SenderCard";
import ConverstionsList from "./components/ConverstionsList";

import { SubTitle } from "../../../styles/ReusableTagsStyled";
import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Messages = () => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Messages"
          description="Consultez vos messages et échangez avec d'autres utilisateurs"
        />
        <Helmet>
          <title>Messages</title>
        </Helmet>

        <MessagesContainer />

        <Aside padding="0">
          <SubTitle
            txtCenter="center"
            fontSize="30px"
            fontWeight="bold"
            color="#1f939b"
            margin="30px 0 20px 30px"
          >
            Vos Messages
          </SubTitle>
          <SenderCard />
          <ConverstionsList />
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Messages;
