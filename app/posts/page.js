import Link from 'next/link';
import { Suspense } from 'react';
import List from './_components/List';
import Loading from './loading';
export const dynamic = 'force-dynamic'; // defaults to auto

const Home = async () => {


    return (

        <div className='px-4 sm:px-6 lg:px-8 mt-10'>
            {/* <h1 className='text-lg font-medium'>Posts current Time {new Date().toLocaleTimeString()}</h1>
            {postData.map((post, index) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <span className='text-gray-900  font-medium list-item'>{post.title}</span>
                </Link>
            ))} */}

            <div className='sm:flex sm:items-center'>

                <div className='sm:flex-auto'>
                    <h1 className='text-base font-semibold leading-6 text-gray-900'>Posts</h1>
                    <p className='mt-2 text-sm text-gray-700'>A list of all posts from the json file</p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link

                        href={'/posts/new'}
                        type="button"
                        className="block rounded-md bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                    >
                        Add Posts
                    </Link>
                </div>
            </div>
            <Suspense fallback={<Loading />}>
                <List />
            </Suspense>

        </div>
    );
};


export default Home;