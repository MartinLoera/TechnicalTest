import { useState, useEffect } from "react";
import { getPosts } from '../helpers/getPosts';

export const useFetchPost = (category) => {
    const [posts, setPosts] = useState([])

    const fetchPost = async (start) => {
        const postsResponse = await getPosts(start);
        setPosts(postsResponse);
    };

    useEffect(() => {
        fetchPost()
    }, []);

    return {
        posts,
        setPosts
    };
};
