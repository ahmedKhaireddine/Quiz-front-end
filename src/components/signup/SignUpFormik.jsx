import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { Formik } from "formik"
import { IoPersonSharp } from "react-icons/io5"
import { RiLockFill } from "react-icons/ri"

import Button from "../quiz-interface/core/Button"
import { Form, Link, Text } from "../../styles/ReusableTagsStyled"
import TextFieldWithIcon from "../TextFieldWithIcon"

const SignUpFormik = (props) => {
  const signUp = (values, actions) => {
    console.log("values =>", values)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        confirmPassword: "",
        email: "",
        fullName: "",
        password: ""
      }}
      onSubmit={signUp}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
        >
          <TextFieldWithIcon
            autoFocus
            icon={<IoPersonSharp />}
            name="fullName"
            placeholder="Nom complet..."
            type="text"
          />
          <TextFieldWithIcon
            icon={<FaEnvelope />}
            name="email"
            placeholder="Email..."
            type="email"
          />
          <TextFieldWithIcon
            icon={<RiLockFill />}
            name="password"
            placeholder="Mot de passe..."
            type="password"
          />
          <TextFieldWithIcon
            icon={<RiLockFill />}
            name="confirmPassword"
            placeholder="Confirmation du mot de passe..."
            type="password"
          />
          <Button
            boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            margin="20px auto 30px"
            type="submit"
          >
            Créer un compte
          </Button>
          <Text margin="10px auto">
            Vous avez déjà un compte ? &nbsp;
            <Link href="/signin">Connectez vous</Link>
          </Text>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpFormik