import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPost, fetchPostAuthor, fetchPostComments} from "../features/posts/fetchPosts";
import type {Comment, Post, User} from "../features/types";
import AddComment from "../UI/AddComment";

const PostComponent = () => {
    const {id} = useParams();
    const [postData, setPostData] = useState<Post>();
    const [comments, setComments] = useState<Comment[]>([]);
    const [author, setAuthor] = useState<User>();

    useEffect(() => {
        fetchPost(Number(id)).then((response) => {
            setPostData(response);
        });
        fetchPostAuthor(Number(id)).then((response) => {
            setAuthor(response);
        });
        fetchPostComments(Number(id)).then((response) => {
            setComments(response);
        });
    }, [id]);

    return (
        <div className="grid place-items-center mt-5">
            <div className="border border-gray-400 w-1/2 p-5">
                <h1 className="align-middle text-left text-2xl font-semibold mb-5">{postData?.title}</h1>
                <p className="text-justify mb-4">{postData?.body}</p>
                <Link to={"/users/" + author?.id} className="text-lg mt-5 hover:underline">author: {author?.name}</Link>

                <h2 className="text-left text-xl font-semibold mt-5 mb-2"> Comments ({comments.length}):</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className="border border-sky-400 shadow-md rounded px-4 py-4 bg-sky-100 my-5">
                        <p className="text-sm">{comment.name} commented:</p>
                        <p> {comment.body} </p>
                    </div>
                ))}
                <AddComment postId={id!}/>
            </div>
        </div>
    );
};

export default PostComponent;