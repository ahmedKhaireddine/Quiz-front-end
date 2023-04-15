import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Aside from "../layouts/aside/Aside";
import Header from "../layouts/Header";
import MessagesContainer from "./components/MessagesContainer";
import SenderCard from "./components/SenderCard";
import ConverstionsList from "./components/ConverstionsList";

import { MainContainer } from "../../../styles/dashboard/layouts/MainStyled";

const Messages = () => {
  return (
    <HelmetProvider>
      <MainContainer>
        <Header
          title="Messages"
          subtitle="Consultez vos messages et échangez avec d'autres utilisateurs"
        />
        <Helmet>
          <title>Messages</title>
        </Helmet>

        <MessagesContainer />

        <Aside padding="0" subtitle="Vos messages">
          <SenderCard />
          <ConverstionsList />
        </Aside>
      </MainContainer>
    </HelmetProvider>
  );
};

export default Messages;
