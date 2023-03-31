import React from "react";

import { ItemPreviewCardContainer } from "../../../../styles/dashboard/questionsPage/QuestionsPageStyled";
import { SubTitle } from "../../../../styles/ReusableTagsStyled";

const ItemPreviewCard = ({ questions }) => {
  return (
    <ItemPreviewCardContainer>
      <SubTitle
        txtCenter="center"
        fontSize="30px"
        fontWeight="bold"
        color="#1f939b"
        margin="0 0 20px 0"
      >
        Question
      </SubTitle>
      <p>{questions.description}</p>
    </ItemPreviewCardContainer>
  );
};

export default ItemPreviewCard;
