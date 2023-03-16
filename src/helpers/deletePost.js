export const deletePost = async(postToDeleteId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postToDeleteId}`, {
        method: "DELETE", 
    });
    const statusCode = await response.status;
    console.log(statusCode);
    return statusCode;
}