import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Questionnaires = (props) => {
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
          <title>Questionnaires</title>
        </Helmet>
        Questionnaires
      </div>
    </HelmetProvider>
  );
};

export default Questionnaires;
