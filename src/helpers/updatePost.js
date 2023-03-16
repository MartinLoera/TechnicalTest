export const updatePost = async (postToUpdate) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`;
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            id: postToUpdate.id,
            title: postToUpdate.title,
            body: postToUpdate.body,
            userId: postToUpdate.userId,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    const status = response.status;
    return status;
};
