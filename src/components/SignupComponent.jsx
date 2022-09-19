import { useFormik } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

import ButtonComponent from "./quiz-interface/core/ButtonComponent"

const Container = styled.div`

`

const SignupComponent = () => {

    const formik = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),

            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });

    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}

                />

                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}



                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />

                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}

                <ButtonComponent type="submit">Submit</ButtonComponent>

            </form>
        </Container>
    )
}

export default SignupComponent