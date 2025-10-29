import React, { useState } from 'react';

const BlogHistory = ({blog}) => {

    const [bookmark, setBookmark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    function handleBookmarked(blog){
        setBookmark()
    }

    function handleMarkAsRead(blog){
        setReadingTime(readingTime=> (blog.readingTime) + readingTime);
    }
    return (
        <div className='rounded-2xl bg-blue-50 px-4 py-6 h-full'>
            <h2 className='text-center font-semibold text-xl px-3 py-1 bg-blue-400 rounded-lg w-fit mx-auto text-white'>History</h2>
            <p>Total Reading Time: {bookmark.length}</p>
            <p>Bookmarked Blogs: {readingTime}</p>
        </div>
    );
};

export default BlogHistory;