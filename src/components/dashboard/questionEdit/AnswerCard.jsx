import React from 'react'

import TextareaField from './TextareaField'
import Button from "../../quiz-interface/core/Button"
import {
    AnswerContainer,
} from "../../../styles/dashboard/questionEdit/QuestionEditStyled" 

const AnswerCard = () => {
    return (
        <form>
            <AnswerContainer>
                <TextareaField 
                    name="answer"
                    width="400px"
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

export default AnswerCard