import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import YupPassword from "yup-password"

import Button from "../components/quiz-interface/core/Button"
import TextField from "../components/TextField"


YupPassword(Yup) // On étend la méthode Yup à YupPassword

const SignIn = () => {
<<<<<<< HEAD

  const initialValues={
    email: "",
    password: "",
    // remember: false
  }

  const validationSchema = Yup.object({
    email: Yup
      .string()
      .email("Format d'email valide")
      .required("*Email requis"),
    password: Yup.string()
      .required("*Mote de passe requis")
      .min(8, "8 caractères minimum")
      .test("Mot de passe valide", "Mot de passe invalide", (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value)
        const hasLowerCase = /[a-z]/.test(value)
        const hasNumber = /[0-9]/.test(value)
        const hasSymbole = /[!@#%&]/.test(value)
        let validConditions = 0
        const numberOfMustBeValidConditions = 3
        const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole]
        console.log("conditions =>", conditions)
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        )
        if (validConditions >= numberOfMustBeValidConditions) {
          return true
        }
        return false
      })
  })

  const onSubmit = (values, actions) => {
    // actions.resetForm()
    console.log("values =>", values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit()}
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
              Connexion
            </Heading>
            <TextField
              autoFocus
              label="Email"
              name="email"
              placeholder="Email..."
              type="email"
              // validate={validateLogin}

            />
            <TextField
              label="Mot de passe"
              name="password"
              placeholder="Mot de passe..."
              type="password"
              // validate={validateLogin}
            />
            <Button type="submit">Entrer</Button>
            </VStack>
        </Box>
      )}
  </Formik>
=======
  return (
    <div>
      SignIn
    </div>
>>>>>>> 29b385d07e64fa21b3b25030ad103f9f721c6940
  )
}

export default SignIn