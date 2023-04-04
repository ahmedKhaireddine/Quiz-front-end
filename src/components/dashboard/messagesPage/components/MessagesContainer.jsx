import React from "react";
import CentralContainer from "../../layouts/CentralContainer";
import {
  Box,
  BubbleLeft,
  ChatContainer,
  ChatForm,
  Navbar,
  InputContainer,
  Button,
  RightMessage,
  LeftMessage,
  BubbleRight,
} from "../../../../styles/dashboard/messagesPage/MessagesContainerStyled";
import { Textarea } from "@chakra-ui/react";

import Send from "../../../../assets/svg/send.svg";

const MessagesContainer = () => {
  return (
    <CentralContainer>
      <Box>
        {/* <Navbar></Navbar> */}

        <ChatContainer>
          <RightMessage>
            <BubbleRight>Hello 🖐</BubbleRight>
          </RightMessage>
          <LeftMessage>
            <BubbleLeft>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries 😝
            </BubbleLeft>
          </LeftMessage>
          <LeftMessage>
            <BubbleLeft>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </BubbleLeft>
          </LeftMessage>
          <RightMessage>
            <BubbleRight>Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s 🙏</BubbleRight>
          </RightMessage>
          <RightMessage>
            <BubbleRight>Lorem</BubbleRight>
          </RightMessage>
          <LeftMessage>
            <BubbleLeft>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </BubbleLeft>
          </LeftMessage>
          <RightMessage>
            <BubbleRight>Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s 🙏</BubbleRight>
          </RightMessage>
          <RightMessage>
            <BubbleRight>Lorem</BubbleRight>
          </RightMessage>
          
        </ChatContainer>

        <ChatForm>
          <InputContainer>
            <Textarea
              outline="none"
              border="none"
              borderTopLeftRadius="9999px"
              borderBottomLeftRadius="9999px"
              backgroundColor="#E6E6E6"
              resize="none"
              height="80px"
              padding="15px 50px"
              fontSize="18px"
            />
            <Button>
              <img src={Send} alt="envoyer" />
            </Button>
          </InputContainer>
        </ChatForm>

      </Box>
    </CentralContainer>
  );
};

export default MessagesContainer;
