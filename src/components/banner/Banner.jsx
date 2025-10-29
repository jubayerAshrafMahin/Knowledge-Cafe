import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto h-[300px] my-5 relative'>
            <img src="https://plus.unsplash.com/premium_photo-1701590725673-835ffc8009ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" 
            alt="Banner Image"
            className='w-full rounded-xl h-full' />
            <div className='absolute top-1/2 left-10 transform -translate-y-1/2'>
                <h2 className='text-white text-2xl font-bold mb-2'>Welcome to Knowledge Cafe</h2>
                <h4 className='text-gray-300 text-[16px] font-normal'>Sip on wisdom and explore engaging educational blogs <br />
                that will quench your thirst for knowledge</h4>
                <div className='text-white bg-transparent border-white border rounded-full px-4 py-2 mt-2 w-fit'>Explore more</div>
            </div>
        </div>
    );
};

export default Banner;