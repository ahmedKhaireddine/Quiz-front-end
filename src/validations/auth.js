import * as Yup from "yup"
import YupPassword from "yup-password"

YupPassword(Yup)

export const SignInSchema = Yup.object({
  email: Yup
    .string()
    .email("Format d'email valide")
    .required("* Email requis"),
  password: Yup.string()
    .required("* Mote de passe requis")
    .min(8, "8 caractères minimum")
    .test("Mot de passe valide", "Mot de passe invalide", (value, context) => {
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSymbole = /[!@#%&]/.test(value)
      const hasUpperCase = /[A-Z]/.test(value)
      const numberOfMustBeValidConditions = 3
      const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole]
      let validConditions = 0

      conditions.forEach(condition => condition ? validConditions++ : null)

      if (validConditions >= numberOfMustBeValidConditions) return true

      return false
    })
})