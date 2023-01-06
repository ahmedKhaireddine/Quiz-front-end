import { useContext } from "react"

import Accounts from "../Accounts"
import Home from "../Home"
import Messages from "../Messages"
import Questions from "../Questions"
import Questionnaires from "../Questionnaires"
import Topics from "../Topics"
import QuestionEdit from "../questionEdit/QuestionEdit"
import { UserContext } from "../../../contexts"

const SwitchView = (props) => {
  const { view } = useContext(UserContext)

  switch (view) {
    case "Accounts":
      return <Accounts />
    case "Home":
      return <Home />
    case "Messages":
      return <Messages />
    case "Questions":
      return <Questions />
    case "Questionnaires":
      return <Questionnaires />
    case "Topics":
      return <Topics />
    case "QuestionEdit":
      return <QuestionEdit />
    default:
      break
  }
}

export default SwitchView