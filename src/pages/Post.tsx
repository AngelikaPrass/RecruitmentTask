import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchPost, fetchPostComments} from "../features/posts/fetchPosts";
import type {Post, Comment} from "../features/types";

const PostComponent = () => {
    const {id} = useParams();
    const [postData, setPostData] = useState<Post>();
    const [comments, setComments] = useState<Comment[]>([]);
    useEffect(() => {
        fetchPost(Number(id)).then((response) => {
            setPostData(response);
        });
        fetchPostComments(Number(id)).then((response) => {
            setComments(response);
        });
    }, [id]);

    return (
        <div>
            <h1>{id}</h1>
            <h1>{postData?.title}</h1>
            <p>{postData?.body}</p>

            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.body}</p>
                    <p>{comment.name}</p>
                </div>
            ))}
        </div>
    );
};

export default PostComponent;