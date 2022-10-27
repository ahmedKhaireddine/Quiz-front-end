import { Formik } from "formik"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../quiz-interface/core/Button"
import FieldsList from "../FieldsList"
import { Form, Link, Text } from "../../styles/ReusableTagsStyled"
import { LOGIN_FIELD_ATTRIBUTES } from "../../constants"
import { SignInSchema } from "../../validations/auth"
import { UserContext } from "../../contexts"

const SignInFormik = (props) => {
  const { setUser } = useContext(UserContext)
  let navigate = useNavigate()

  const onSubmit = (values, actions) => {
    setUser({
      active: "true",
      email: values.email,
      role:"user",
      token:"string",
    })

    navigate("/dashboard")

    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={onSubmit}
      validationSchema={SignInSchema}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
        >
          <FieldsList data={LOGIN_FIELD_ATTRIBUTES}/>
          <Button
            boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            margin="20px auto 30px"
            type="submit"
            width="165px"
          >
            Se connecter
          </Button>
          <Text margin="10px auto">
            <Link href="/mdp">Mot de passe oublié ?</Link>
          </Text>
          <Text margin="10px auto">
            Pas de comptes Quiz ? &nbsp;
            <Link href="/signup">Créez le vôtre dès à présent.</Link>
          </Text>
        </Form>
      )}
    </Formik>
  )
}

export default SignInFormik