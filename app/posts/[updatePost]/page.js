import React from 'react';
import PostForm from '../_components/PostForm';

const UpdatePage = async ({ params }) => {

    console.log(params);
    const initialData = await fetch(`http://localhost:3000/api/post/${params.updatePost}`, { cache: "no-store" });

    const updateInfo = await initialData.json();

    return (
        <PostForm updateInfo={updateInfo} />
    );
};

export default UpdatePage;