// pages/index.js or in your specific component file
"use client";

import { useRouter } from "next/navigation";

export default function PostForm({ updateInfo }) {


    const router = useRouter();


    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            title: formData.get('title'),
            body: formData.get('body')
        };

        let response;

        if (updateInfo) {
            response = await fetch(`http://localhost:3000/api/post/${updateInfo.id}`, { // Adjust the API endpoint as needed
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        } else {
            response = await fetch('http://localhost:3000/api/post', { // Adjust the API endpoint as needed
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        }



        if (response.ok) {
            console.log('Post submitted successfully');

            router.push('/posts');
            router.refresh();
            // Handle success
        } else {
            console.error('Error submitting post');
            // Handle error
        }
    }

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={updateInfo?.title}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        defaultValue={updateInfo?.body}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {updateInfo ? "Update Post" : "Register"}
                </button>
            </form>
        </div>
    );
}
