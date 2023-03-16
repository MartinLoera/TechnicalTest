import { addPost } from "./helpers/addPost";
import { deletePost } from "./helpers/deletePost";
import { getPostsById } from "./helpers/getPostsById";
import { CustomAppBar } from "./components/CustomAppBar";
import { SearchBar } from "./components/SearchBar";
import { CreatePost } from "./components/CreatePost";
import { PostsList } from "./components/PostsList";
import { useFetchPost } from "./hooks/useFetchPosts";
import { useState } from "react";
import { AppTheme } from "./theme/AppTheme";
import { updatePost } from './helpers/updatePost';

export const TechnicalTestApp = () => {
    const [start, setStart] = useState(0);

    //custom hook
    let { posts, setPosts } = useFetchPost(start);

    const searchPostById = async (id) => {
        const post = await getPostsById(id);
        setPosts([...post]);
    };

    const handleCreatePost = async (post) => {
        console.log("se esta creando el post");
        const status = await addPost(post);
        if (status == 201) {
            console.log("se creo con exito");
            setPosts((postList) => [post, ...postList])
        }
    };

    const deletePostById = async (id) => {
        const response = await deletePost(id);
        if (response != 200) {
            return;
        }
        setPosts((list) => list.filter((item) => item.id != id));
    };

    const replacePost = async (newPost) => {
        const status = await updatePost(newPost);
        if (status == 200) {
            let newArray = [...posts]
            let index = newArray.findIndex((item) => item.id == newPost.id);
            newArray[index] = newPost;
            setPosts(newArray);
        }
    };


    

    return (
        <AppTheme>
            <CustomAppBar />
            <SearchBar onSearchPost={searchPostById} />
            <CreatePost />
            <PostsList
                postsList={posts}
                onClickDelete={deletePostById}
                onClickReplace={replacePost}
            ></PostsList>
            <CreatePost onClickCreate={handleCreatePost}></CreatePost>
        </AppTheme>
    );
};
