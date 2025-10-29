import React, { use, useState } from 'react';
import Blog from '../blog/blog';
import BlogHistory from '../blogHistory/BlogHistory';

const Blogs = ({blogsPromise}) => {

    const blogs = use(blogsPromise);
    console.log(blogs);

    const [bookmarks, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    function handleBookmarked(blog){
        if(bookmarks.includes(blog.blogTitle)){
           alert("This blog is already bookmarked!");
        }else{
        const newBookmarks = [...bookmarks, blog.blogTitle]
        setBookmark(newBookmarks);
        }
    }

    function removeBookmark(bookmark){
        setBookmark(bookmarks => bookmarks.filter(title => title !== bookmark));
    }

    function handleMarkAsRead(blog){

        if(bookmarks.includes(blog.blogTitle)){
            // let newBookmarks = [...bookmarks];
            // newBookmarks.filter((bookmark)=> bookmark!==(blog.blogTitle));
            // setBookmark(newBookmarks); 
        }
        setReadingTime(readingTime=> (blog.readingTime) + readingTime);
    }
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-3'>
            <div className='max-w-[850px] grid gap-3 grid-cols-2 col-span-2'>
                {
                blogs.map(blog=>{
                    return(
                            <div className=''>
                                <Blog blog={blog}
                                handleMarkAsRead={handleMarkAsRead}
                                handleBookmarked={handleBookmarked}
                                bookmarks={bookmarks}></Blog>
                            </div>
                            
                       
                    )
                })
            }
            </div>
            <div className=''>
                <div className=' bg-white px-4 py-4 h-full shadow-lg border border-stone-200 rounded-2xl'>
                    <h2 className='text-center font-semibold text-xl px-3 py-1 mx-auto text-black mb-2'><i class="fa-solid fa-earth-americas text-blue-800"></i> History</h2>
                    <p className='text-center text-gray-900'>Total Reading Time: {readingTime} min</p>
                    <p className='text-center text-gray-900'>Bookmarked Blogs: {bookmarks.length}</p>
                    <div className='h-6'></div>
                    <h2 className='text-center font-semibold text-xl px-3 py-1 mx-auto text-black mb-2'><i className='fa-solid fa-bookmark text-red-500'></i> Bookmarks</h2>
                    
                    {
                        (bookmarks.length==0)? (<p className='text-center text-sm text-gray-700'>No bookmarks added yet.</p>):(
                            bookmarks.map(bookmark=> {
                                return(
                                    <div className='px-3 py-1 bg-white rounded-md mb-2 shadow-md flex justify-between items-center border-[0.1px] border-stone-200'>
                                        <p> {bookmark}</p>
                                        <div className='w-fit ml-2'>
                                            <i class="fa-regular fa-circle-xmark cursor-pointer text-red-500"
                                            title='Remove from bookmarks'
                                            onClick={()=>{removeBookmark(bookmark)}}></i>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;