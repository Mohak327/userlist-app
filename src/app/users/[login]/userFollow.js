import { fetchFollowersData } from '@/api/fetchFollowersData';
import Card from '@/components/card';
import RepoCard from '@/components/repoCard';
import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import FollowCard from '@/components/followCard';
import { capitalizeFirstLetter, makeIntegerArray } from '@/helpers/stringFunctions';

const ShimmerComponent = () => (
    <div className="h-[128px] flex flex-col space-y-2 group rounded-lg p-3 transition-colors dark:bg-neutral-800/30">
      <div className="animate-pulse h-16 w-16 mx-auto rounded-full dark:bg-neutral-800/30" />
      <div className="animate-pulse h-1/4 w-3/4 mx-auto rounded-lg dark:bg-neutral-800/30" />
    </div>
  );

function UserFollows({login = '', url = '', category = 'followers'}) {
  const [userFollows, setUserFollows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserFollowsData = async () => {
      const data = await fetchFollowersData(login, category);
      setUserFollows(data);
      setLoading(false);
    };

    getUserFollowsData();
  }, [login]);

  console.log('UserFollows', userFollows, userFollows.slice(9))

  return (
      <div>
        <div className="mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 text-center lg:max-w-7xl lg:w-full lg:mb-0">
        {loading ? (
            makeIntegerArray(3).map((item) => (
                <ShimmerComponent key={item} />
              ))
        ) : (
            userFollows.slice(0, 9).map((user) => {
                let { id, login: followLogin = '', avatar_url = '', html_url = '' } = user;
                console.log(user)
                return(
                    <FollowCard key={followLogin} data={user}/>
            )})
        )}
        </div>
        <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`pt-4 flex items-center space-x-1 justify-center text-violet-500 hover:text-violet-700 text-sm`}
        >
            <GitHubIcon size='small'/>
            <p>{`View all ${capitalizeFirstLetter(category)}`}</p>
        </Link>
    </div>
  )
}

export default UserFollows