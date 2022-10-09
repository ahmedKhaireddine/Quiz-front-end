import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import YupPassword from "yup-password"

import Button from "../components/quiz-interface/core/Button"
import TextField from "../components/TextField"

YupPassword(Yup)

const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        // remember: false
      }}
      validationSchema={Yup.object({
        email: Yup
          .string()
          .email("Entrer un email valide")
          .required("*Email requis"),
        password: Yup
          .string()
          .min(8, "8 caractères minimum")
          .password("Entrer un mot de passe valide")
          .minUppercase(1, "*1 majuscule minimum")
          .minNumbers(1, "1 chiffre minimum")
          .minSymbols(1, "1 caractère spécial minimum")
          .required("*Mot de passe requis")
      })}
      onSubmit={(values, actions) => {
        // setInfos(values)
        actions.resetForm()
        console.log(values)
      }}
    >
      {(formik) => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="45vw"
        >
          <VStack
            as="form"
            mx="auto"
            onSubmit={formik.handleSubmit}
            spacing="30px"
            textAlign="center"
            w={{ base: "80%" }}
          >
            <Heading
              as="h1"
              mb="30px"
              tabIndex="-1"
            >
              Tu y es presque...
            </Heading>
            <TextField
              autoFocus
              label="Email"
              name="email"
              placeholder="Email..."
              type="email"
            />
            <TextField
              label="Mot de passe"
              name="password"
              placeholder="Mot de passe..."
              type="password"
            />
            <Button type="submit">Entrer</Button>
            </VStack>
        </Box>
      )}
  </Formik>
  )
}

export default SignIn