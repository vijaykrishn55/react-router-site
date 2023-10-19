import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();
  return <div className='w-screen flex justify-center items-center p-12'>
<div className='text-center w-56 h-12  bg-black text-2xl font-bold  text-white rounded-2xl py-1'>User: {userid}</div>
  </div>
};

export default User;
