import React from 'react'
import { useFormik } from 'formik'

const Signup = () => {

    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: ''
        },

        onSubmit: values => {
        alert(JSON.stringify(values, null, 2))
        },

    })

    return (
        <form onSubmit={formik.handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
        />
        <button type="submit">Submit</button>
            
        </form>
    )
}

export default Signup