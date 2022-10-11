import {Field, Form, Formik} from 'formik';
import axios from "axios";
import type {RegisteredUser} from "../features/types";
import {registerUser} from "../features/users/database";
import React, {useContext} from "react";
import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();

    const initialValues: RegisterFormValues = {
        name: "",
        email: "",
        gender: null,
        status: "active",
        password: "",
        passwordConfirmation: ""
    };

    if (userContext!.currentUser != null) {
        return (
            <div>
                <h1 className="text-2xl">You are already logged in</h1>
            </div>
        );
    } else return (
        <div className="grid place-items-center mt-1">
            <h1 className="text-2xl my-5 py-5"> Register </h1>
            <div className="w-full max-w-xs">
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
                                    name: values.name,
                                    email: values.email,
                                    password: values.password
                                }
                                registerUser(registeredUser);
                                navigate("/");
                            }).catch((error) => {
                                console.log(error);
                            });
                            actions.setSubmitting(false);
                        }}
                >
                    {({isSubmitting}) => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="name"
                                       className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <Field id="name" name="name" placeholder="John Doe"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <Field id="email" name="email" placeholder="john.doe@example.com"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4 block">
                                <div className="text-gray-700 text-sm font-bold mb-2">Gender</div>
                                <div className="mt-2">
                                    <label className="inline-flex items-center">
                                        <Field type="radio" name="gender" value="male"/>
                                        <span className="ml-2 mr-4"> Male </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <Field type="radio" name="gender" value="female"/>
                                        <span className="ml-2"> Female </span>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password"
                                       className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Field id="password" name="password" type="password" placeholder="*****"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password-confirm"
                                       className="block text-gray-700 text-sm font-bold mb-2"> Confirm password</label>
                                <Field id="password-confirm" name="password-confirm" type="password"
                                       placeholder="*****"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={isSubmitting}>Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
