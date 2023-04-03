import React from "react";

import { Box } from "../../../../styles/dashboard/messagesPage/ConversationsListStyled";
import ConversationContainer from "./ConversationContainer";

const ConverstionsList = () => {
  return (
    <Box>
      <ConversationContainer />
      <ConversationContainer />
      <ConversationContainer />
      <ConversationContainer />
      <ConversationContainer />
    </Box>
  );
};

export default ConverstionsList;
