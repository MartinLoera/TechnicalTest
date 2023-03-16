
export const getPosts = async (start = 0) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=20`);
    const data = await response.json();
    console.log(data);
    return data;
}