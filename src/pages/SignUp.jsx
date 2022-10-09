import * as Yup from "yup"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { Formik } from "formik"
import YupPassword from "yup-password"

import Button from "../components/quiz-interface/core/Button"
import TextField from "../components/TextField"

YupPassword(Yup)

const SignUp = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={Yup.object({
        email: Yup
          .string()
          .email("Entrer un email valide")
          .required("*Email requis"),
        password: Yup
          .string()
          .password("Entrer un mot de passe valide")
          .min(8, "*8 caractères minimum")
          .minUppercase(1, "*1 majuscule minimum")
          .minNumbers(1, "*1 chiffre minimum")
          .minSymbols(1, "*1 caractère spécial minimum")
          .required("*Mot de passe requis")
          .min(8, "8 caractères minimum")
          .test("Mot de passe valide", "Mot de passe invalide", (value, context) => {
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSymbole = /[!@#%&]/.test(value);
            let validConditions = 0;
            const numberOfMustBeValidConditions = 3;
            const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
            conditions.forEach((condition) =>
              condition ? validConditions++ : null
            );
            if (validConditions >= numberOfMustBeValidConditions) {
              return true
            }
            return false
          }),
        confirmPassword: Yup
          .string()
          .password("Confirmer votre mot de passe")
          .min(8, "*8 caractères minimum")
          .required("*Mot de passe requis")
          .min(8, "8 caractères minimum")
          .test("Mot de passe valide", "Mot de passe invalide", (value, context) => {
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSymbole = /[!@#%&]/.test(value);
            let validConditions = 0;
            const numberOfMustBeValidConditions = 3;
            const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
            conditions.forEach((condition) =>
              condition ? validConditions++ : null
            );
            if (validConditions >= numberOfMustBeValidConditions) {
              return true
            }
            return false
          })
      })}
      onSubmit={(values, actions) => {
        actions.resetForm()
        console.log(actions)
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
              Inscription
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
            <TextField
              label="Confirmation du mot de passe"
              name="confirmPassword"
              placeholder="Confirmation du mot de passe..."
              type="password"
            />
            <Button type="submit">Entrer</Button>
            </VStack>
        </Box>
      )}
  </Formik>
  )
}

export default SignUp