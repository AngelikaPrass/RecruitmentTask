import type {Post} from "../types";
import {Link} from "react-router-dom";

interface PostListProps {
    posts: Post[];
}

const PostsList = (props: PostListProps) => {
    const {posts} = props;
    return (
        <div>
            <div className="grid place-items-center mt-1">
                {posts.map((post) => (
                    <div key={post.id} className="grid border rounded-lg border-gray-300 w-1/2 mt-5 md:ml-48 px-5 py-2">
                        <Link to={post.id.toString()}
                              className="font-medium text-2xl cursor-pointer hover:underline">{post.title}</Link>
                        <p className="text-slate-500"> {post.body.slice(0, 90)}...
                            <br/>
                            <Link to={post.id.toString()} className="text-blue-400 hover:underline"> Click to read
                                more </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PostsList;