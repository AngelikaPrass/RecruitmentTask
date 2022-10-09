import {Formik, Form, Field, ErrorMessage} from 'formik';
const NewPost = () => {

    interface FormValues {
        email: string;
        title: string;
        body: string;
    }

    return (
        <div>
            <h1>New Post</h1>
            <Formik initialValues={{email: "", title: "", body: ""}}

                    onSubmit={(values, actions) => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }}
            >
                {({values}) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="email" />
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" placeholder="Title" />
                        <ErrorMessage name="title" component="div" />
                        <label htmlFor="body">Body</label>
                        <Field id="body" name="body" placeholder="Body" />
                        <ErrorMessage name="body" component="div" />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NewPost;