
import Link from 'next/link';
import React, { Suspense } from 'react';
import DeleteButton from './DeleteButton';

const List = async () => {

    const posts = await fetch('http://localhost:3000/api/post');
    const postData = await posts.json();

    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Id
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Body
                                </th>

                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {postData.map((post, index) => (

                                <tr key={post.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {post.id}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.title}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{post.body}</td>

                                    <td className="space-x-4 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

                                        <DeleteButton post={post} />
                                        <Link href={`/posts/${post.id}`} className="text-indigo-600 hover:text-indigo-900">
                                            Edit<span className="sr-only">, {post.name}</span>
                                        </Link>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default List;