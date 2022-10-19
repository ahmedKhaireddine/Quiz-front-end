import { useContext } from "react"
import { Formik } from "formik"
import { IoPersonSharp } from "react-icons/io5"
import { RiLockFill } from "react-icons/ri"

import Button from "../quiz-interface/core/Button"
import { Form, Link, Text } from "../../styles/ReusableTagsStyled"
import { SignInSchema } from "../../validations/auth"
import TextFieldWithIcon from "../TextFieldWithIcon"
import { UserContext } from "../../contexts/User"

const SignInFormik = (props) => {
  const { setUser } = useContext(UserContext)
  const signIn = (values, actions) => {
    setUser({
      email: values.email,
      role:"user",
      token:"string",
    })

    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={signIn}
      validationSchema={SignInSchema}
    >
      {(formik) => (
        <Form
          onSubmit={formik.handleSubmit}
        >
          <TextFieldWithIcon
            autoFocus
            name="email"
            placeholder="Email..."
            type="email"
            icon={<IoPersonSharp />}
          />
          <TextFieldWithIcon
            name="password"
            placeholder="Mot de passe..."
            type="password"
            icon={<RiLockFill/>}
          />
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