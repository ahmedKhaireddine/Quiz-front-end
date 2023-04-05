import { useContext } from "react";

import {
  Box,
  Picture,
  Text,
  TitleH3,
} from "../../../styles/ReusableTagsStyled";
import Flex from "../../layouts/Flex";
import PictureProfil from "../../../assets/svg/user-icon.svg";
import { UserContext } from "../../../contexts";

const UserCard = (props) => {
  const { user } = useContext(UserContext);

  return (
    <Flex
      background="#f8f8fa"
      borderRadius="5px"
      height=""
      margin="20px auto"
      padding="10px"
      width="80%"
    >
      <Picture
        alt="Photo de profil"
        borderRadius="5px"
        margin="0 0 0 10px"
        src={user.picture === "null" ? PictureProfil : user.picture}
        width="40px"
      />
      <Box padding="0 0 0 10px">
        <TitleH3 color="black" fontSize=".6em" fontWeight="bold" padding="3px">
          {user ? user.full_name : "Inconnu"}
        </TitleH3>
        <Text color="rgba(0,0,0,.5)" fontSize=".5em" padding="0 3px">
          {user.role === "admin" ? "Administrateur" : "Utilisateur"}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserCard;
