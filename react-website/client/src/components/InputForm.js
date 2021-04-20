
import React from 'react';
//import './InputForm.css';
import { Formik } from "formik";
import * as Yup from "yup";


const ValidatedInputForm = () => (
    <Formik
        initialValues = {{ selection: "", restaurant_name: "", Phone_number: "", About: "", date_opened: "", street_address: "", city: "", USstate: "" }}
        
        onSubmit = {(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Processing input", values);
                setSubmitting(false);
            }, 500);
        }}
        
        validationSchema = {Yup.object().shape({
            selection: Yup.string()
                .required("Select a template!"),
            restaurant_name: Yup.string()
                .required("Restaurant name is required!")
                .max(5, "Restaurant name cannot be longer than 5 characters!"),
            Phone_number: Yup.number()
                .required("Phone number is required!"),
            About: Yup.string()
                .required("Information about the restaurant is required!")
                .max(3500, "Information about the restaurant is too long"),
            date_opened: Yup.date()
                .required("Opening date is required!"),
            street_address: Yup.string()
                .required("Address name is required!"),
            city: Yup.string()
                .required("City name is required!"),
            USstate: Yup.string()
                .required("State name is required!")
        })}
      
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <div id="form">
                <form id="input" onSubmit={handleSubmit}>
                    <h3>Input form for restaurant website template.</h3>
                    <h4>Enter your restaurant details and files to be displayed into the chosen template.</h4>
                    <label>Template Selection:</label>
                    <select
                        name="selection"
                        values={values.selection}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.selection && touched.selection && "error"}
                    >
                        <option value="" label="Select a template" />
                        <option value="Template1" label="Template 1" />
                        <option value="Template2" label="Template 2" />
                        <option value="Template3" label="Template 3" />
                        <option value="Template4" label="Template 4" />
                        <option value="Template5" label="Template 5" />
                    </select>
                    {errors.selection && touched.selection && (
                        <div id="input-feedback">{errors.selection}</div>
                    )}

                    <p><strong>General Information:</strong></p>
                    <label htmlFor="restaurant_name">Restaurant Name:</label>
                    <input
                        name="restaurant_name"
                        className="restaurant_name"
                        type="string"
                        placeholder="Enter restaurant name here"
                        value={values.restaurant_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.restaurant_name && touched.restaurant_name && "error"}
                    />
                    {errors.restaurant_name && touched.restaurant_name && (
                        <div id="input-feedback">{errors.restaurant_name}</div>
                    )}

                    <label htmlFor="Phone_number">Phone Number:</label>
                    <input
                        name="Phone_number"
                        className="Phone_number"
                        type="number"
                        placeholder="Enter phone number here"
                        value={values.Phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.Phone_number && touched.Phone_number && "error"}
                    />
                    {errors.Phone_number && touched.Phone_number && (
                        <div id="input-feedback">{errors.Phone_number}</div>
                    )}

                    <label htmlFor="About">Enter information about your restaurant:</label>
                    <input
                        name="About"
                        className="About"
                        type="string"
                        placeholder="Enter information here"
                        value={values.About}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.About && touched.About && "error"}
                    />
                    {errors.About && touched.About && (
                        <div id="input-feedback">{errors.About}</div>
                    )}

                    <label htmlFor="date_opened">Enter opening date:</label>
                    <input
                        name="date_opened"
                        className="date_opened"
                        type="date"
                        placeholder="Enter opening date of restaurant"
                        value={values.date_opened}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.date_opened && touched.date_opened && "error"}
                    />
                    {errors.date_opened && touched.date_opened && (
                        <div id="input-feedback">{errors.date_opened}</div>
                    )}

                    <p><strong>Restaurant Address Details:</strong></p>
                    <label htmlFor="street_address">Enter street name:</label>
                    <input
                        name="street_address"
                        className="street_address"
                        type="string"
                        placeholder="Enter street name"
                        value={values.street_address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.street_address && touched.street_address && "error"}
                    />
                    {errors.street_address && touched.street_address && (
                        <div id="input-feedback">{errors.street_address}</div>
                    )}

                    <label htmlFor="city">Enter city name:</label>
                    <input
                        name="city"
                        className="city"
                        type="string"
                        placeholder="Enter city name"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.city && touched.city && "error"}
                    />
                    {errors.city && touched.city && (
                        <div id="input-feedback">{errors.city}</div>
                    )}

                    <label for="state">Enter state name:</label>
                    <input
                        name="USstate"
                        className="USstate"
                        type="string"
                        placeholder="Enter state name"
                        value={values.USstate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.USstate && touched.USstate && "error"}
                    />
                    {errors.USstate && touched.USstate && (
                        <div id="input-feedback">{errors.USstate}</div>
                    )}

                    <p><strong>Files To Be Added:</strong></p>
                    <label htmlFor="Menu">Menu PDF file:</label>
                    <input
                        name="Menu"
                        className="Menu"
                        type="file"
                        value={values.Menu}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.Menu && touched.Menu && "error"}
                    />
                    {errors.Menu && touched.Menu && (
                        <div id="input-feedback">{errors.Menu}</div>
                    )}

                    <label htmlFor="Logo">Logo PNG file:</label>
                    <input
                        name="Logo"
                        className="Logo"
                        type="file"
                        value={values.Logo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.Logo && touched.Logo && "error"}
                    />
                    {errors.Logo && touched.Logo && (
                        <div id="input-feedback">{errors.Logo}</div>
                    )}

                    <button type="submit" disabled={isSubmitting} onSubmit={handleSubmit}>Submit</button>
                </form>
                </div>
            );
        }}
    </Formik>
);

export default ValidatedInputForm;

