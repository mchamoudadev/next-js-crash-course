import React from 'react';

// This is a Server Component
const PostDetails = async ({ params }) => {
    // The dynamic segment (postId) is directly accessible as a prop
    const { postId } = params;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { cache: "no-store" });

    const postData = await posts.json();
    // Logic to fetch post details based on postId

    return (
        <div>
            <h1 className='font-medium'>Post Details</h1>
            <p>{postData.title}</p>
            {/* Render the post details */}
        </div>
    );
};

export default PostDetails;
