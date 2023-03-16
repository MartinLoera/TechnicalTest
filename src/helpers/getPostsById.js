export const getPostsById = async (postId) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    return [data];
};
