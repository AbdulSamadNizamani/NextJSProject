'use client'
import { UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const { userId } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this logic runs only on the client side
  }, []);

  if (!isClient) return null;

  return (
    <div className='bg-cyan-950 rounded-b-xl'>
      <ul className='flex justify-around py-4 px-6'>
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link href="/client">
            <li>Client Page</li>
          </Link>
        </div>
        <div className='flex gap-6 items-center'>
          {!userId ? (
            <>
              <Link href="/sign-in">
                <li>Login</li>
              </Link>
              <Link href="/sign-up">
                <li>Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li className='flex items-center'>
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
