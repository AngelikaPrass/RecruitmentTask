import {Field, Form, Formik} from "formik";
import React, {useContext} from "react";
import {UserContext} from "../App";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface CommentFormValues {
    name: string;
    email: string;
    postId: string;
    body: string;
}

interface CommentFormProps {
    postId: string;
}

const AddComment = (props: CommentFormProps) => {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const user = context?.currentUser || JSON.parse(localStorage.getItem("user") || "");

    if (user === null || user === undefined || user == "") {
        return (<> </>);
    } else {
        const initialValues: CommentFormValues = {
            name: user.name,
            email: user.email,
            postId: props.postId,
            body: ""
        }
        return (
            <div className="grid place-items-left mt-1">
                <h1 className="text-2xl my-5 py-5"> Add comment </h1>
                <div className="w-100">
                    <Formik initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                axios.post(`https://gorest.co.in/public/v1/posts/${props.postId}/comments`, {
                                    post_id: props.postId,
                                    name: values.name,
                                    email: values.email,
                                    body: values.body
                                }, {
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Authorization": "Bearer a9bf67b3b593f9fbdca800d03c42bd3c626e6d12cfba8839a66f615eeaf3cbd0"
                                    }
                                })
                                    .then(() => {
                                        alert("Comment added");
                                        navigate("/posts/" + props.postId);
                                    }).catch((error) => {
                                    alert("Error");
                                    console.error(error);
                                });
                                actions.setSubmitting(false);
                            }}>

                        {({isSubmitting}) => (
                            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <Field
                                        id="body" name="body" placeholder="Write your comment here..." as="textarea"
                                        rows="4"
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
export default AddComment;