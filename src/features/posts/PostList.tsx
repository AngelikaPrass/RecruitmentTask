import type {Post} from "../types";
import {Link} from "react-router-dom";

interface PostListProps {
    posts: Post[];
}

const PostsList = (props: PostListProps) => {
    const {posts} = props;
    return (
        <div>
            <div>
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link to={post.id.toString()}>{post.title}</Link>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PostsList;