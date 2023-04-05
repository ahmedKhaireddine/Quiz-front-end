import React from "react";

import {
  Avatar,
  Card,
  Name,
  NameContainer,
  Post,
  UserInfos,
} from "../../../../styles/dashboard/messagesPage/SenderCardStyled";

const SenderCard = () => {
  return (
    <Card>
      <UserInfos>
        <Avatar>
          <div>
            <p>👤</p>
            {/* {sender.avatar} */}
          </div>
        </Avatar>
        <NameContainer>
          <Name>
            Chuck Norris
            {/* {sender.username} */}
          </Name>
          <Post>
            7 messages
            {/* {sender.messages.lenght} messages  */}
          </Post>
        </NameContainer>
      </UserInfos>
    </Card>
  );
};

export default SenderCard;
