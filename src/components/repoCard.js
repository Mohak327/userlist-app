import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';

function RepoCard({key, data, handleCardClick}) {
  let { id, name, description, html_url } = data;
  return (
    <Link
        href={html_url}
        className="flex flex-col group rounded-lg p-3 transition-colors dark:bg-neutral-800/30 hover:dark:bg-neutral-600/30"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div className='text-left'>
            <h2 className={`text-lg font-medium group-hover:text-violet-500`}>
            {name}{' '}
            </h2>
            <h2 className="mb-1 text-sm opacity-50">{description}</h2>
        </div>
    </Link>
  )
}

export default RepoCard