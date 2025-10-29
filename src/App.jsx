import { Suspense } from 'react';
import './App.css'
import Nav from './components/navbar/nav'
import Blogs from './components/blogs/Blogs';
import Banner from './components/banner/Banner';

function App() {

  const blogsPromise = fetch("blogs.json").then(res=>res.json());

  return (
    <div>
      <Nav></Nav>
      <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <h2 className='text-2xl mb-4 font-semibold'>Explore Blogs</h2>
      <Suspense fallback={<p className='text-center'>Loading...</p>}>
      <Blogs blogsPromise={blogsPromise}></Blogs>
      </Suspense>
      </div>
    </div>
  )
}

export default App
