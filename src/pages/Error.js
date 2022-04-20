import React from 'react';
import { Link } from 'react-router-dom';

const Error  = () => {
  return (
    <div className='text-center font-bold m-5 md:text-4xl text-2xl'>
      <h1 className='m-10'>Sorry this page doesn't exist</h1>
      <Link to='/' className='bg-sky-500/50 p-2 text-center'>Back Home</Link>
    </div>
  )
}

export default Error 