import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = (props) => {
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
        Home
      </div>
    </HelmetProvider>
  );
};

export default Home;
