import { useState, useEffect } from "react";

function Fetch() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
           .then(res => res.json())
            .then((data) => setPost(data));
    }, []);

    return (
        <div>
            <h2>Post</h2>
            <ul>
                {post.slice(0, 5).map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Fetch;
