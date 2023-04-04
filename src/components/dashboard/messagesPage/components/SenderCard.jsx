import React from "react";

import {
  Avatar,
  Card,
  Name,
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
        <Name>
          Chuck Norris
          {/* {sender.username} */}
        </Name>
      </UserInfos>

      <Post>
        7 messages
        {/* {sender.messages.lenght} messages  */}
      </Post>
    </Card>
  );
};

export default SenderCard;
