"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteButton = (post) => {


    const router = useRouter();

    const handleDelete = async (id) => {

        if (!confirm("Are you sure you want to delete this")) return;
        let response;
        response = await fetch(`http://localhost:3000/api/post/${id}`, { // Adjust the API endpoint as needed
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Post submitted successfully');

            router.push('/posts');
            router.refresh();
            // Handle success
        } else {
            console.error('Error submitting post');
            // Handle error
        }

    };

    return (
        <button
            onClick={() => handleDelete(post.id)}
            className="text-rose-600 hover:text-rose-900">
            Delete<span className="sr-only">, {post.name}</span>
        </button>
    );
};

export default DeleteButton;