import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

function Card({key, data, handleCardClick}) {
  let { id, login, type, html_url, avatar_url } = data;
  return (
    <Link
        href={`/users/${login}`}
        className="flex flex-col items-center justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-100 hover:bg-gray-100 hover:dark:border-violet-200 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Image
           src={avatar_url}
           alt="Description of the image"
           width={64}
           height={64}
           className="mb-3 rounded-full object-cover"
        />
        <h2 className={`mb-1 text-2xl font-semibold`}>
        {login}{' '}
        </h2>
        <h2 className="font-semibold mb-1 text-md opacity-50">{type}</h2>
        <p className={`transition-transform group-hover:translate-x-1 motion-reduce:transform-none group-hover:text-violet-500 flex space-x-1 text-center m-0 max-w-[30ch] text-sm`}>
          <p className="">View Profile </p>
          <span> -&gt; </span>
        </p>
    </Link>
  )
}

export default Card