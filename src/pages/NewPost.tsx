import {Field, Form, Formik} from 'formik';
import {UserContext} from "../App";
import React, {useContext} from "react";
import axios from "axios";

const NewPost = () => {

    interface FormValues {
        title: string;
        body: string;
    }

    const context = useContext(UserContext);
    const user = localStorage.getItem("user");
    const initialValues: FormValues = {
        title: "",
        body: ""
    }
    if (context!.currentUser == null || user == null) {
        return (<div className="text-2xl text-center py-5"> You have to log in to add a new post</div>)
    } else {
        return (
            <div className="grid place-items-center mt-1">
                <h1 className="text-2xl my-5 py-5"> New Post </h1>
                <div className="w-full max-w-xs">
                    <Formik initialValues={initialValues}

                            onSubmit={(values, actions) => {
                                axios.post(`https://gorest.co.in/public/v1/users/${context!.currentUser!.id}/posts`, values, {
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json",
                                        "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
                                    }
                                }).then(
                                    (response) => {
                                        console.log(response);
                                        actions.setSubmitting(false);
                                        alert(JSON.stringify(values, null, 2));
                                    }
                                )
                            }}
                    >
                        {({isSubmitting}) => (
                            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label htmlFor="title"
                                           className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                                    <Field id="title" name="title" placeholder="Title"
                                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="body"
                                           className="block text-gray-700 text-sm font-bold mb-2">Body</label>
                                    <Field id="body" name="body" placeholder="Body" as="textarea" rows="4"
                                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
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
        );
    }
}

export default NewPost;
