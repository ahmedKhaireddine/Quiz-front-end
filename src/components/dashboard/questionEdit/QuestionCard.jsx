import React, { useState } from 'react'
import { Formik } from "formik"
import * as Yup from "yup"

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } 
from '@chakra-ui/react'
import TextField from './TextField'
import TextareaField from './TextareaField'
import Button from "../../quiz-interface/core/Button"
import {
    AnswerContainer,
    Card,
    Input,
    TimeContainer,
    Title 
} from "../../../styles/dashboard/questionEdit/QuestionEditStyled" 
import AnswerCard from './AnswerCard'

const QuestionCard = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onSubmit = (values, actions) => {    
        // navigate("/dashboard")
        // actions.resetForm()
    }
    
    const showAnswer = () => {
        setIsVisible(true)
        console.log("yop")
    }

    return (
        <Card>
            <Title>Question</Title>
            <Formik
                initialValues={{
                    question: "Une question",
                    time: "",
                    answer: "",
                    answerValue: ""
                }}
                onSubmit={onSubmit}
                validationSchema={Yup.object({
                    question: Yup
                        .string()
                        .required("Aucune question décrite")
                        .max(255, "255 caractères maximum"),
                    time: Yup
                        .number(),
                    answer: Yup
                        .string()
                        .max(255, "255 caractères maximum")
                })}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <TextareaField 
                            name="question"
                        />

                        <TimeContainer>
                            <h3>Temps pour répondre</h3>
                            <NumberInput defaultValue={15} min={10} max={20} color="black">
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper color="black"/>
                                    <NumberDecrementStepper color="black"/>
                                </NumberInputStepper>
                            </NumberInput>
                            <span>sec</span>
                        </TimeContainer>

                        <Title>Réponse</Title>
                        <AnswerCard />

                        { isVisible &&
                            <AnswerCard />
                        }

                        <Button
                            boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
                            margin="20px auto 30px"
                            width="220px"
                            onClick={showAnswer()}
                        >
                            Ajouter une réponse
                        </Button>
                    </form>
                )}
            </Formik>
        </Card>
    )
}

export default QuestionCard