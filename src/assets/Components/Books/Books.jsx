import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks]= useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBooks(data));
    },[])

    return (
        <div className="mx-24">
            <div>
            <h1 className='text-center font-extrabold text-6xl mt-16'>Books: {books.length}</h1>
        </div>
        <div className='grid grid-cols-2 gap-6 mt-12'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;