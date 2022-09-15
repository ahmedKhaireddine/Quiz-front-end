import { Formik } from "formik"
import * as Yup from "yup"
import {
    VStack,
    Heading,
    useToast
} from "@chakra-ui/react"
import styled from "styled-components"

import TextField from "../TextField"
import Logo from "../Logo"
import ButtonComponent from "./core/ButtonComponent"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {
    const toast = useToast()


    return (
        <Formik
            initialValues={{code: ""}}
            validationSchema={Yup.object({
                code: Yup
                    .string()
                    .required("Vous devez entrer un code")
                    .max(15, "Le code ne peut contenir plus de 15 caractères")
            })}
            onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2))
                actions.resetForm()
            }}
        >
            {(formik) => ( 
                <Box width={[1, 1 / 2, 1 / 4]} >
                    <Logo />
                    <Heading
                        as='h1'
                        w={{ base: "80%", md:"100%"}}
                        my="60px"    
                    >
                        Bienvenue! Veuillez entrer votre code pour commencer le Quiz!
                    </Heading>
                    <VStack
                        as="form"
                        w={{ base: "80%", md: 400 }}
                        mx="auto"
                        spacing="30px"
                        justifyContent="center"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            name="code"
                            placeholder="Entrer votre code..."
                        />
                        <ButtonComponent 
                            px={ 10 }
                            onClick={() => toast({
                                isClosable: true,
                                title: "Code Valide",
                                description:"Vous pouvez accéder au Quiz",
                                duration:3000,
                                position:"bottom-right",
                                status:"success",
                                })
                            }
                        >
                            Entrer
                        </ButtonComponent>
                    </VStack>
                </Box>   
            )}
        </Formik>
    )
}

export default Home