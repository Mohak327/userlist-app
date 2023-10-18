'use client'
import Card from '../../components/card'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchUsers } from '../../api/fetchUsers';
import { ThemedButton } from '@/commons/buttons';
import Link from 'next/link';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [viewMode, setViewMode] = useState('card'); // Default view mode is 'card'.

    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };

        getUsers();
    }, []);

    return (
        <div className="mx-auto p-8 md:p-24">
            <div className={`mb-4 md:mb-20 text-center`}>
                <h2 className={`mb-4 text-center text-3xl md:text-6xl font-semibold`}>User Profiles</h2>
                <div className="mb-4 flex justify-center">
                    <button
                        onClick={() => setViewMode('card')}
                        className={`px-4 py-2 mr-2 ${viewMode === 'card' ? 'bg-violet-800' : 'bg-transparent'} text-white rounded`}
                    >
                        Card View
                    </button>
                    <button
                        onClick={() => setViewMode('table')}
                        className={`px-4 py-2 ${viewMode === 'table' ? 'bg-violet-800' : 'bg-transparent'} text-white rounded`}
                    >
                        Table View
                    </button>
                </div>
            </div>
            {viewMode === 'card' ? (
                <div>
                    <div className="mx-auto mb-32 grid gap-4 text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3">
                    {users.map((user) => {
                        let { id, login, html_url, avatar_url } = user;
                        console.log(user)
                        return(
                            <Card key={login} data={user}/>
                    )})}
                    </div>
                </div>
            ) : (
<div className="mx-auto lg:max-w-7xl lg:w-full">
    <table className="mx-auto border border-collapse">
        <thead>
            <tr style={{ background: 'linear-gradient(to right, #6e5494, #300066, #300066)' }} className="bg-gray-200">
                <th className="p-2 text-left">Avatar</th>
                <th className="p-2 text-left">Username</th>
                <th className="p-2 text-left">Profile Link</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => {
                const { id, login, html_url, avatar_url } = user;
                return (
                    <tr key={id} className='hover:dark:bg-neutral-800/30'>
                        <td className="p-3 border-b">
                            <Image
                                src={avatar_url}
                                alt={login}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                        </td>
                        <td className="p-3 border-b">
                            <p>
                                {login}
                            </p>
                        </td>
                        <td className="p-3 pr-8 border-b">
                            <Link href={`/users/${login}`} target="_blank" rel="noopener noreferrer" className={`transition-transform hover:translate-x-1 motion-reduce:transform-none hover:text-violet-500 flex space-x-1 text-center m-0 max-w-[30ch] text-sm`}>
                                <p>View Profile </p>
                                <span> -&gt; </span>
                            </Link>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>



            )}
        </div>
    );
};

export default UserList;
