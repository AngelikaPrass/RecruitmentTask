import {Form, Formik, Field} from 'formik';
import axios from "axios";
import type {RegisteredUser} from "../features/types";
import {registerUser} from "../features/users/database";
import React, {useContext} from "react";
import {UserContext} from "../App";

interface RegisterFormValues {
    name: string;
    email: string;
    gender: "male" | "female" | null;
    status: "active" | "inactive";
    password: string;
    passwordConfirmation: string;

}

const Register = () => {
    const userContext = useContext(UserContext);
    const initialValues: RegisterFormValues = {
        name: "",
        email: "",
        gender: null,
        status: "active",
        password: "",
        passwordConfirmation: ""
    };

    if(userContext!.currentUser != null) {
        return (
            <div>
                <h1>You are already logged in</h1>
            </div>
        );
    }
    else return (
        <div>
            <h1>Register</h1>
            <Formik initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        const valuesToSend = {
                            name: values.name,
                            email: values.email,
                            gender: values.gender,
                            status: values.status
                        }

                        axios.post("https://gorest.co.in/public/v1/users", valuesToSend, {
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
                            }
                        }).then((response) => {
                            const registeredUser: RegisteredUser = {
                                id: response.data.data.id,
                                email: values.email,
                                password: values.password
                            }
                            registerUser(registeredUser);
                        }).catch((error) => {
                            console.log(error);
                        });
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
            >
                {({values}) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="John Doe"/>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="john.doe@example.com"/>
                        <div id="my-radio-group">Gender</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="gender" value="male"/>
                                Male
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="female"/>
                                Female
                            </label>
                        </div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" placeholder="Password"/>
                        <label htmlFor="password-confirm"> Confirm password</label>
                        <Field id="password-confirm" name="password-confirm" type="password"
                               placeholder="confirm password"/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;
