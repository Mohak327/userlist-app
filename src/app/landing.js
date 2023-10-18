import {ThemedButton} from '@/commons/buttons'
import Link from 'next/link';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Landing() {

  const handleClick = () => {
    // Handle button click event here
    console.log('Button clicked!');
  }

  return (
<div className="relative h-[calc(100vh-60px)] bg-cover bg-center w-screen">
  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
    <div className="relative p-8 md:p-24 z-10">
      <h2 className="mb-8 text-center text-6xl font-semibold">Github Users</h2>
      <div className="mx-auto mb-32 text-center lg:max-w-7xl lg:w-full lg:mb-0">
        <Link href="/users">
          <ThemedButton onClick={handleClick} content="Check out our user list" icon={<GitHubIcon />} />
        </Link>
      </div>
    </div>
  </div>
  <img className="w-full h-full object-cover" src="bg1.jpeg" alt="Background Image" />
</div>

  )
}

export default Landing