import { fetchRepos } from '@/api/fetchRepos';
import Card from '@/components/card';
import RepoCard from '@/components/repoCard';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import { makeIntegerArray } from '@/helpers/stringFunctions';

const ShimmerComponent = () => (
  <div className="h-[76px] flex flex-col space-y-2 group rounded-lg p-3 transition-colors dark:bg-neutral-800/30">
    <div className="animate-pulse h-3/5 w-1/3 rounded-lg dark:bg-neutral-800/30" />
    <div className="animate-pulse h-2/5 w-3/4 rounded-lg dark:bg-neutral-800/30" />
  </div>
);

function UserRepos({ login = '', url = '' }) {
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserRepos = async () => {
      const data = await fetchRepos(login);
      setUserRepos(data);
      setLoading(false);
    };

    getUserRepos();
  }, [login]);

  return (
    <div>
      <div className="mx-auto grid gap-4 text-center lg:max-w-7xl lg:w-full lg:mb-0 grid-cols-1">
        {loading ? (
          makeIntegerArray(1).map((item) => (
            <ShimmerComponent key={item} />
          ))
        ) : (
          userRepos.slice(0, 9).map((user) => {
            let { id, name } = user;
            return <RepoCard key={login} data={user} />;
          })
        )}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mx-auto w-fit hover:dark:border-violet-300 text-center text-violet-500 hover:text-violet-700 text-sm`}
        >
          <div className="flex items-center space-x-1 py-2">
            <GitHubIcon size="small" />
            <p>View all Repositories</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserRepos;
