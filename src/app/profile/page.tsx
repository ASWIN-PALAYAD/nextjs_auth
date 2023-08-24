'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {

  const router = useRouter();
  const [data, setData] = useState('nothing')

  const logout = () => {
    try {
      axios.get('/api/users/logout')
      toast.success("Logout Successfull")
      router.push('/login')
    } catch (error:any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res);
    setData(res?.data?.data._id)
    console.log(data);
    
    
  }

  return (
    <div
    className='flex flex-col items-center justify-center min-h-screen py-2 '
    >
      <h1> Profile</h1>
      <hr />
      <h3>My Profile</h3>
      <h2 className='p-3 rounded bg-green-500 '>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>
        {data}
        </Link>}</h2>

      <button
        className='bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 rounded px-3'
        onClick={logout}
      >
        signout
      </button>

      <button
        className='bg-green-800 hover:bg-blue-700 mt-4 text-white font-bold py-2 rounded px-3'
        onClick={getUserDetails}
      >
      get user details
      </button>
    
    
    
    </div>

    
  )
}

export default ProfilePage 