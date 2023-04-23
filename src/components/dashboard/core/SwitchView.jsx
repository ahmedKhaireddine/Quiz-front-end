import { useContext } from "react";

import Accounts from "../accountsPage/Accounts";
import Home from "../homePage/Home";
import Messages from "../../dashboard/messagesPage/Messages";
import Questions from "../questionsPage/Questions";
import Quiz from "../quizPage/Quiz";
import Topics from "../topicsPage/Topics";
import { UserContext } from "../../../contexts";

const SwitchView = (props) => {
  const { view } = useContext(UserContext);

  switch (view) {
    case "Accounts":
      return <Accounts />;
    case "Home":
      return <Home />;
    case "Messages":
      return <Messages />;
    case "Questions":
      return <Questions />;
    case "Quiz":
      return <Quiz />;
    case "Topics":
      return <Topics />;
    default:
      break;
  }
};

export default SwitchView;
