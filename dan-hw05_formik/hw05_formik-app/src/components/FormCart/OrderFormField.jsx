import React from "react";
import { useField } from "formik";

const OrderFormField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <input className={meta.touched && meta.error ? "form-field error" : "form-field"} {...field} {...props} />
            {meta.touched && meta.error ? <span className="error-form">{meta.error}</span> : null}
        </>
    )
}
export default OrderFormField;