import { AiFillMessage, AiFillSnippets, AiFillAppstore } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdTopic } from "react-icons/md";
import { useContext } from "react";

import {
  Item,
  ListItems,
  Title,
} from "../../../styles/dashboard/LinksListStyled";
import { UserContext } from "../../../contexts";

const LinksList = (props) => {
  const { setView, user, view } = useContext(UserContext);

  return (
    <ListItems>
      <Item selected={view === "Home"} onClick={() => setView("Home")}>
        <HiHome color="rgba(31,147,155,.8)" fontSize="1.4em" />
        <Title>Accueil</Title>
      </Item>
      <Item
        selected={view === "Questions"}
        onClick={() => setView("Questions")}
      >
        <AiFillAppstore color="rgba(31,147,155,.8)" fontSize="1.4em" />
        <Title>Questions</Title>
      </Item>
      <Item
        selected={view === "Questionnaires"}
        onClick={() => setView("Questionnaires")}
      >
        <AiFillSnippets color="rgba(31,147,155,.8)" fontSize="1.4em" />
        <Title>Questionnaires</Title>
      </Item>
      {user && user.role === "admin" && (
        <>
          <Item selected={view === "Topics"} onClick={() => setView("Topics")}>
            <MdTopic color="rgba(31,147,155,.8)" fontSize="1.4em" />
            <Title>Thèmes</Title>
          </Item>
          <Item
            selected={view === "Accounts"}
            onClick={() => setView("Accounts")}
          >
            <FaUsers color="rgba(31,147,155,.8)" fontSize="1.4em" />
            <Title>Comptes</Title>
          </Item>
        </>
      )}
      <Item selected={view === "Messages"} onClick={() => setView("Messages")}>
        <AiFillMessage color="rgba(31,147,155,.8)" fontSize="1.4em" />
        <Title>Messages</Title>
      </Item>
    </ListItems>
  );
};

export default LinksList;
