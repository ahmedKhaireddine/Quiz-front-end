import * as Yup from "yup"
import YupPassword from "yup-password"

YupPassword(Yup)

export const SignInSchema = Yup.object({
  email: Yup
    .string()
    .email("Format d'email valide")
    .required("* Email requis"),
  password: Yup.string()
    .min(8, "8 caractères minimum")
    .required("* Mote de passe requis")
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

export const SignUpSchema = Yup.object({
  email: Yup
    .string()
    .email("Format d'email n'est pas valide")
    .required("* Email requis"),
  fullName: Yup
    .string()
    .required("* Nom complet requis"),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "La confirmation du mot de passe n'est pas valide")
    .required("* Veuillez confirmer votre mot de passe"),
  password: Yup
    .string()
    .required("* Mot de passe requis")
    .min(8, "Le mot de passe doit contenir au minimum 8 caractères")
    .test("Mot de passe valide", "Votre mot de passe doit contenir au minimum 8 caractères dont 1 minuscule, 1 majuscule, 1 chiffre et 1 symbole", (value, context) => {
      const hasLowerCase = /[a-z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSymbole = /[!@#%&]/.test(value)
      const hasUpperCase = /[A-Z]/.test(value)
      const numberOfMustBeValidConditions = 3
      const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole]
      let validConditions = 0

      conditions.forEach((condition) => condition ? validConditions++ : null)

      if (validConditions >= numberOfMustBeValidConditions) return true

      return false
    })
})