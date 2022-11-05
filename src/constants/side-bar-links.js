
import { AiFillMessage, AiFillSnippets, AiFillAppstore } from "react-icons/ai"
import { FaUsers } from "react-icons/fa"
import { HiHome } from "react-icons/hi"
import { MdTopic } from "react-icons/md"

const SIDE_BAR_LINKS = [
  {
    icon: <HiHome color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Acceuil",
    whoCanAccess: "both",
    viewToDisplay: "Home"
  },
  {
    icon: <FaUsers color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Comptes",
    whoCanAccess: "admin",
    viewToDisplay: "Accounts"
  },
  {
    icon: <AiFillAppstore color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Questions",
    whoCanAccess: "both",
    viewToDisplay: "Questions"
  },
  {
    icon: <AiFillSnippets color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Questionnaires",
    whoCanAccess: "both",
    viewToDisplay: "Questionnaires"
  },
  {
    icon: <AiFillMessage color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Messages",
    whoCanAccess: "both",
    viewToDisplay: "Messages"
  },
  {
    icon: <MdTopic color="rgba(31,147,155,.8)" fontSize="1.3em"/>,
    name: "Thèmes",
    whoCanAccess: "admin",
    viewToDisplay: "Topics"
  },
]

export default SIDE_BAR_LINKS