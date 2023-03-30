import React from "react";

import { Title } from "../../../../styles/dashboard/questionEdit/QuestionEditStyled";
import { Box } from "../../../../styles/dashboard/questionEdit/AsideStyled";

const Aside = ({ answers }) => {
  console.log("aside answers", answers);
  return (
    <>
      <Box>
        {answers.map(answer => <h3>{answer.time}</h3>)}
      </Box>
    </>
  );
};

export default Aside;
