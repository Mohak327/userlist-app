import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';

function FollowCard({key, data, handleCardClick}) {
  let { id, login, html_url, avatar_url } = data;
  return (
    <Link
        href={`/users/${login}`}
        className="flex flex-col group rounded-lg p-2 transition-colors dark:bg-neutral-800/30 hover:dark:bg-neutral-600/30"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className='text-center p-2'>
            <Image
            src={avatar_url}
            alt="Description of the image"
            width={64}
            height={64}
            className="mx-auto mb-1 rounded-full object-cover"
            />
            <h2 className={`text-lg font-medium group-hover:text-violet-500`}>
                {login}{' '}
            </h2>
        </div>
    </Link>
  )
}

export default FollowCard