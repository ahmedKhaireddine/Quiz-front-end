import * as Yup from "yup"

export const ContactSchema = Yup.object({
    email: Yup
    .string()
    .email("Format d'email invalide")
    .required("* Un email est requis afin de pouvoir vous répondre"),
  sujet: Yup
    .string(),
  message: Yup
    .string()
    .required("* Précisez la raison de votre message")
    .max(300, "Votre message ne doit pas dépasser les 300 caractères"),
})