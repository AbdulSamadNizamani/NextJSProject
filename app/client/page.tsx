'use client';
import React from 'react'
import { useUser } from '@clerk/nextjs'
const ClientPage = () => {
    const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
    <div className='h-full flex flex-col items-center justify-center text-2xl'>   
        Hellow, {user.firstName} Welcome to Clerk
    </div>
  )
}

export default ClientPage
