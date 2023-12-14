import React from 'react';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const Nav = () => {
    return (
        // <nav className='flex justify-between items-center'>
        //     <Link href="/">Home</Link>
        //     <ul className='flex space-x-2 py-2'>
        //         <li>
        //             <Link href="/posts">Posts</Link>
        //         </li>
        //         <li>
        //             <Link href="/about">About</Link>
        //         </li>
        //         <li>
        //             <Link href="/contact">Contact</Link>
        //         </li>
        //     </ul>
        // </nav>

        <div className="flex justify-between items-center my-4">
            <div className="flex flex-shrink-0 items-center">
                <h1 className='text-lg leading-5'>Logo</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={'text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Nav;