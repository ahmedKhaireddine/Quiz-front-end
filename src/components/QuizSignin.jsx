import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const QuizSignin = () => {

        const formik = useFormik({

            initialValues: {
                code: '',
            },

            validationSchema: Yup.object({
                code: Yup.number()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
            }),

            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
            
        });

    return (
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="code">Entrer le code ici</label>
            <input
                id="code"
                name="code"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
            />

            {formik.touched.code && formik.errors.code ? (
                <div>{formik.errors.code}</div>
            ) : null}

            <button type="submit">Submit</button>

        </form>
    )
}

export default  QuizSignin