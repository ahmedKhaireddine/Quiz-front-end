import { Formik } from "formik"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../quiz-interface/core/Button"
import FieldsList from "../FieldsList"
import { Form, Link, Text } from "../../styles/ReusableTagsStyled"
import { RECORD_FIELD_ATTRIBUTES } from "../../constants"
import { SignUpSchema } from "../../validations"
import { UserContext } from "../../contexts"

const SignUpFormik = (props) => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmit = (values, actions) => {
    setUser({
      active: "true",
      email: values.email,
      full_name:"Jean Moreau",
      picture: "null",
      role:"user",
      token:"string",
    })

    navigate("/dashboard")

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
      onSubmit={onSubmit}
      validationSchema={SignUpSchema}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
        >
          <FieldsList data={RECORD_FIELD_ATTRIBUTES}/>
          <Button
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            margin="20px auto 30px"
            type="submit"
          >
            Créer un compte
          </Button>
          <Text
            margin="10px auto"
            textAlign="center"
          >
            Vous avez déjà un compte ? &nbsp;
            <Link href="/signin">Connectez vous</Link>
          </Text>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpFormik