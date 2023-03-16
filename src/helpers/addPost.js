export const addPost = async(postToAdd) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify({
            title: postToAdd.title, 
            body: postToAdd.body, 
            userId: postToAdd.userId
        }), 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const statusCode = response.statusCode;
    return statusCode;
}