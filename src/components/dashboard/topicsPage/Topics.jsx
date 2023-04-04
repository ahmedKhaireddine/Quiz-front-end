import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Topics = (props) => {
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
          <title>Thèmes</title>
        </Helmet>
        Thèmes
      </div>
    </HelmetProvider>
  );
};

export default Topics;
