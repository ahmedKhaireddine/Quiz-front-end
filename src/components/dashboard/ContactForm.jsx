import React from "react"

const ContactForm = () => {
    
    const initialValues={
        email: "",
        sujet: "",
        message: ""
    }

    const validationSchema = Yup.object({
        email: Yup
        .string()
        .email("Format d'email valide")
        .required("*Email requis"),
        password: Yup
        .string()
        .required("*Indiquez un sujet")
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
                    >
                        Contactez-nous
                    </Heading>

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                    />

                    <TextField
                        label="Sujet"
                        name="sujet"
                        type="text"
                    />

                    <TextField
                        label="Sujet"
                        name="sujet"
                        type="text"
                    />

                    <Button type="submit">Envoyer</Button>
                    </VStack>
                </Box>
            )}
        </Formik>
  )
}

export default ContactForm