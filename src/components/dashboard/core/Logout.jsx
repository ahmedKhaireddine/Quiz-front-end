import { IoMdLogOut } from "react-icons/io";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  ItemWithoutPseudoClass,
  ListItems,
  Title,
} from "../../../styles/dashboard/LinksListStyled";

const Logout = (props) => {
  const navigate = useNavigate();

  const logout = useCallback(
    (name) => {
      localStorage.removeItem(name);
      navigate("/");
    },
    [navigate]
  );

  return (
    <ListItems margin="30px auto">
      <ItemWithoutPseudoClass onClick={() => logout("user")}>
        <IoMdLogOut color="rgba(31,147,155,.8)" fontSize="1.4em" />
        <Title>Se déconnecter</Title>
      </ItemWithoutPseudoClass>
    </ListItems>
  );
};

export default Logout;
