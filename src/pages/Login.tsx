import React from "react";
import {Form, Formik, Field} from 'formik';
import {useContext} from "react";
import {getUser, printDatabase} from "../features/users/database";
import {UserContext} from "../App";
import {RegisteredUser} from "../features/types";

interface LoginValues {
    email: string;
    password: string;
}

const Login = () => {
    const userContext = useContext(UserContext);

    const initialValues: LoginValues = {
        email: "",
        password: ""
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
            <h1>Login</h1>
            <Formik initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        const user = getUser(values.email, values.password);
                        if(user != null) {
                            userContext!.setCurrentUser(user);
                            localStorage.setItem("user", JSON.stringify(user));
                            alert("Logged in");
                        }
                        else {
                            alert("Wrong email or password");
                        }
                        actions.setSubmitting(false);
                        printDatabase();
                    }}>

                {({values}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="email" />
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" placeholder="password" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Login;
