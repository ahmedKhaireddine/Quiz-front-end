import { useState } from 'react'

import TextareaField from './TextareaField'
import Button from "../../quiz-interface/core/Button"
import {
    AnswerContainer,
} from "../../../styles/dashboard/questionEdit/QuestionEditStyled" 

const AnswerForm = (addAnswer) => {

    const [answer, setAnswer] = useState()

    const handleChange = (e) => {
        setAnswer(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        setAnswer({ answer: ""})
        addAnswer(answer)
    }

    return (
        <form onSubmit={handleSubmit} addAnswer>
            <AnswerContainer>
                <TextareaField 
                    name="answer"
                    width="400px"
                    onChange={(e) => handleChange(e)}
                    value={answer}
                />
                <Button
                    type="submit"
                    boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                    margin="20px auto 30px"
                >
                    Enregistrer
                </Button>
            </AnswerContainer>
        </form>
    )
}

export default AnswerForm