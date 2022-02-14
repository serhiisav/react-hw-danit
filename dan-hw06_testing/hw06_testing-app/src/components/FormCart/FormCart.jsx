import React, { useEffect } from "react";
import { Formik, Form } from 'formik';
import './formCart.scss'
import { useDispatch } from 'react-redux';
import { setOrderInfo } from "../../store/actions";
import CartFormSchema from "./CartFormSchema";
import { useNavigate } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { useRef } from "react";
import OrderFormField from "./OrderFormField";


const FormCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef();

    const handleSubmitForm = (values) => {
        dispatch(setOrderInfo(values));
        navigate('/cart/order');
    }

    useEffect(() => {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, []);

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', age: '', address: '', phone: '' }}
            validationSchema={CartFormSchema}
            onSubmit={(values) => {
                handleSubmitForm(values);
            }}
        >
            {({ values, errors, setFieldValue, handleBlur, touched }) =>
            (
                <Form ref={formRef}
                    className="form-cart">

                    <OrderFormField name="firstName" type="text" placeholder="First Name" />

                    <OrderFormField name="lastName" type="text" placeholder="Last Name" />

                    <OrderFormField name="age" type="number" placeholder="Age" />

                    <OrderFormField name="address" type="text" placeholder="Address" />

                    <NumberFormat
                        onBlur={event => handleBlur(event)}
                        className={touched.phone && errors.phone ? "form-field error" : "form-field"}
                        value={values.phone}
                        name="phone"
                        format="+38 (###) ###-##-##" allowEmptyFormatting mask="_"
                        onValueChange={(values) => {
                            const { value } = values;
                            setFieldValue('phone', value);
                        }}
                    />
                    {touched.phone && errors.phone ? <span className="error-form">{errors.phone}</span> : null}

                    <button className="form-submit" type="submit">Checkout</button>

                </Form>
            )}
        </Formik>
    );
};

export default FormCart;