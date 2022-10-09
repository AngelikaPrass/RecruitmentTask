import PostList from "../features/posts/PostList";
import {fetchPosts} from "../features/posts/fetchPosts";
import { useSearchParams } from "react-router-dom";
import Pagination from "../UI/Pagination";
import {useState} from "react";
import type {Post} from "../features/types";

const Posts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page: number = Number(searchParams.get("page") || "1");
    const [posts, setPosts] = useState<Post[]>([]);


    const handlePageChange = (page: number) => {
        setSearchParams({page: page.toString()});
    };

return (
        <div>
            <h1>Posts</h1>
            <Pagination page={page} fetchFunction={fetchPosts} setDisplay={setPosts} handlePageChange={handlePageChange}>
                <PostList posts={posts} />
            </Pagination>
        </div>
    );
}

export default Posts;