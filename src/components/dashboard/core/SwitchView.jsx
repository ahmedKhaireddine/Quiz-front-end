import { useContext } from "react"

import Accounts from "../accountsPage/Accounts"
import Home from "../homePage/Home"
import Messages from "../../dashboard/messagesPage/Messages"
import Questions from "../questionsPage/Questions"
import Questionnaires from "../quizPage/Questionnaires"
import Topics from "../topicsPage/Topics"
import QuestionEdit from "../questionEditPage/QuestionEdit"
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