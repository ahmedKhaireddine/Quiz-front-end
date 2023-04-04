import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Accounts = (props) => {
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
          <title>Compte</title>
        </Helmet>
        Compte
      </div>
    </HelmetProvider>
  );
};

export default Accounts;
