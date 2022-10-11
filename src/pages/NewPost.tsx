import {Formik, Form, Field, ErrorMessage} from 'formik';
import {UserContext} from "../App";
import {useContext} from "react";
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
    if (context!.currentUser == null || user !== null) {
        return (
            <div>
                <h1>New Post</h1>
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
                    {({values}) => (
                        <Form>
                            <label htmlFor="title">Title</label>
                            <Field id="title" name="title" placeholder="Title"/>
                            <ErrorMessage name="title" component="div"/>
                            <label htmlFor="body">Body</label>
                            <Field id="body" name="body" placeholder="Body"/>
                            <ErrorMessage name="body" component="div"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    } else
        return (<div> You have to log in to add a new post</div>);
}

export default NewPost;
