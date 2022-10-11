import React, {useContext} from "react";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {getUser} from "../features/users/database";
import {UserContext} from "../App";
import {useNavigate} from "react-router-dom";

interface LoginValues {
    email: string;
    password: string;
}

const Login = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const initialValues: LoginValues = {
        email: "",
        password: ""
    };

    if (userContext!.currentUser != null) {
        return (
            <div>
                <h1 className="text-2xl">You are already logged in</h1>
            </div>
        );
    } else return (
        <div className="grid place-items-center mt-1">
            <h1 className="text-2xl my-5 py-5"> Log in </h1>
            <div className="w-full max-w-xs">
                <Formik initialValues={initialValues}
                        onSubmit={(values, actions) => {
                            const user = getUser(values.email, values.password);
                            if (user != null) {
                                userContext!.setCurrentUser(user);
                                localStorage.setItem("user", JSON.stringify(user));
                                alert("Logged in");
                                navigate("/");
                            } else {
                                alert("Wrong email or password");
                            }
                            actions.setSubmitting(false);
                        }}>

                    {({isSubmitting}) => (
                        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="email"
                                       className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <Field id="email" name="email" placeholder="email"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password"
                                       className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <Field id="password" name="password" type="password" placeholder="********"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                <ErrorMessage name="password" component="div"/>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" disabled={isSubmitting}>Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}
export default Login;
