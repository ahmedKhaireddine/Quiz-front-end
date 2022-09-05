import React from "react"
import styled from "styled-components"
import * as Yup from "yup"
import { useFormik } from "formik"

import ButtonComponent from "./core/ButtonComponent"

const Box = styled.div`
    display: flex;
    flex-direction column;
    padding: 30px;
`
const Message = styled.h1`
    p {
        font-size: 40px;
        font-weight: lighter;
        padding: 40px;
        color: #F1F1F1;
    }
`
const Form = styled.div`
    display: flex;
    flex-direction column;
    justify-content: flex-start;
    label {
        font-size: 25px;
        color: #F1F1F1;
    }
    input {
        height: 30px;
        width: 300px;
        padding-left: 10px;
        border-radius: 5px;
        margin: 10px auto;
    }
`

const PlayerInfos = (props) => {
    const formik = useFormik({
        initialValues: {
            nom: '',
            prenom: ''
        },
        validationSchema: Yup.object({
            nom: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('*Champs requis'),
            prenom: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('*Champs requis'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Message>
                <h1><p>Dernière étape avant de commencer</p></h1>
            </Message>
            <Box>
                <Form onSubmit={formik.handleSubmit}>
                    <label htmlFor="nom">Nom</label><br></br>
                    <input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder='Nom'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nom}
                        error={formik.errors.nom}
                    />
                    {formik.touched.nom && formik.errors.nom ? (
                        <div>{formik.errors.nom}</div>
                    ) : null}

                    <label htmlFor="prenom">Prénom</label><br></br>
                    <input
                        id="prenom"
                        name="prenom"
                        type="text"
                        placeholder='Prénom'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prenom}
                        error={formik.errors.prenom}
                    />
                    {formik.touched.prenom && formik.errors.prenom ? (
                        <div>{formik.errors.prenom}</div>
                    ) : null}

                    <ButtonComponent type="submit">Go !</ButtonComponent>
                </Form>
            </Box>
        </>
    )
}

export default PlayerInfos