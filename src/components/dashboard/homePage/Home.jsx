import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { UserContext } from "../../../contexts";

import { Title } from "../../../styles/ReusableTagsStyled";
import HomeContainer from "./components/HomeContainer";

const Home = (props) => {
  const { user } = useContext(UserContext);

  return (
    <HelmetProvider>
      <div
        style={{
          backgroundColor: "#f8f8fa",
          width: "100%",
          height: "100%",
        }}
      >
        <Helmet>
          <title>Accueil</title>
        </Helmet>
        <Title
          color="#1f939b"  
          fontSize="34px"
          fontWeight="bold"
          margin="0 0 5px  0"
          padding="10px 53px"
        >
          Bienvenue {user.full_name}!
        </Title>
        <HomeContainer />
      </div>
    </HelmetProvider>
  );
};

export default Home;
