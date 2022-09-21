import Body from "../components/Body"
import Logo from '../components/Logo'
import QuizLayout from "../components/layouts/QuizLayout"
import Home from "../components/quiz-interface/Home"
import PlayerInfos from "../components/quiz-interface/PlayerInfos"
import Over from "../components/quiz-interface/Over"
import Quiz from "../components/quiz-interface/Quiz"
import ChoiceList from "../components/quiz-interface/core/ChoiceList"
import LogoAnim from "../others/LogoAnim"

const Test = (props) => {
    return (
        <div>
            {/* <PlayerInfos/> */}
            {/* <Quiz /> */}
            {/* <Over /> */}
            {/* <ChoiceList /> */}
            <QuizLayout>
                <LogoAnim />
            </QuizLayout>
        </div>
    )
}

export default Test