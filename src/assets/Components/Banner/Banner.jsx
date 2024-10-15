import React from 'react';

const Banner = () => {
    return (
        <div className="mx-24 flex  bg-slate-200 rounded-md p-10 " >
            <div className='text-6xl font-extrabold text-center py-32 pr-20  '>
                <h1>Books to freshen up 
                your bookshelf</h1>
                <button className="btn font-extrabold btn-success">View The List</button>
            </div>
            <div className='pr-16 pl-10 py-10 shrink-0 ' >
                <img src="/images/the_cover.jpg" className='h-96 w-96 rounded ' alt="" />
            </div>
        </div>
    );
};

export default Banner;