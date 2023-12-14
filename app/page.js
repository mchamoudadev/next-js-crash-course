import Image from 'next/image';

const Home = async () => {


  const posts = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" });

  const postData = await posts.json();

  return (
    <div>
      <h1 className='text-lg font-medium'>Posts current Time {new Date().toLocaleTimeString()}</h1>
      {postData.map((post, index) => (
        <div key={post.id}>
          {/* <span className='font-semibold text-gray-700 list-item'> */}
          <span className='text-gray-900  font-medium list-item'>{post.title}</span>
        </div>
      ))}
    </div>
  );
};


export default Home;