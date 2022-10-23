import { useContext } from "react"
import { Formik } from "formik"

import { ATTRIBUTES_REGISTEATION_FIELDS } from "../../constants"
import Button from "../quiz-interface/core/Button"
import FieldsList from "../FieldsList"
import { Form, Link, Text } from "../../styles/ReusableTagsStyled"
import { SignUpSchema } from "../../validations/auth"
import { UserContext } from "../../contexts/User"

const SignUpFormik = (props) => {
  const { setUser } = useContext(UserContext)

  const onSubmit = (values, actions) => {
    console.log("values => ", values)
    setUser({
      active: "false",
      email: values.email,
      role: "user",
      token: "string"
    })

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
          <FieldsList data={ATTRIBUTES_REGISTEATION_FIELDS}/>
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