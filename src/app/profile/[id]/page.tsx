import React from 'react'

const UserProfile = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white '>
        <h1>user profile</h1>
        <hr />
        <p>my id is : {params.id}</p>
    </div>
    
  )
}

export default UserProfile