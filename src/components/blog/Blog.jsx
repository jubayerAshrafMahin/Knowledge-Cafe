// import React, { useState } from 'react';

const Blog = ({blog, handleMarkAsRead, handleBookmarked, bookmarks}) => {

    
    const isBookmarked = bookmarks.includes(blog.blogTitle);
    return (
        <div className=' max-w-[700px] rounded-2xl shadow-md border-[0.1px] border-stone-200'>
            <div className='relative  rounded-t-2xl'>
                <div className='rounded-t-2xl h-[200px]'>
                    <img src={blog.blogCover} alt='Blog Cover' className='object-cover w-full h-full rounded-t-2xl'></img>
                </div>
                <div className='absolute top-4 right-4 flex flex-col gap-2'>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full icon-bg cursor-pointer'
                    onClick={()=>{handleBookmarked(blog);}}
                    title='Bookmark'>
                        <i className={`${isBookmarked? 'fa-solid': 'fa-regular'} fa-bookmark text-lg text-white`}></i>
                    </div>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full icon-bg cursor-pointer'
                    onClick={()=>{handleMarkAsRead(blog);}}
                    title='Mark as read'>
                        <i className="fa-regular fa-circle-check text-lg text-white"></i>
                    </div>
                </div>
            </div>
            <p className='text-xl font-semibold my-2 px-4'>{blog.blogTitle}</p>
            {/* <p className='mb-3 px-4 text-md'>{blog.blogSubtitle}</p> */}
            <div className='flex justify-between items-baseline-last px-4 pb-3'>
                <div className='flex gap-2'>
                <img src={blog.authorImage} alt={`image of ${blog.author}`} className='rounded-full w-[45px] h-[45px] object-cover' />
                <div>
                    <h5 className='font-semibold'>{blog.author}</h5>
                    <p className='text-sm text-stone-900'>{blog.publishDate}</p>
                </div>
            </div>
                <div className='flex justify-center gap-3 items-end'>
                    <p className='text-sm text-stone-900'>{`${blog.readingTime} min read`}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;