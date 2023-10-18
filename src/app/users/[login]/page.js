'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchUserDetails } from "@/api/fetchUserDetails";
import { PillButton } from "@/commons/buttons";
import { splitFullName, capitalizeFirstLetter, splitCompanies } from "@/helpers/stringFunctions";
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import BookIcon from '@mui/icons-material/Book';
import Modal from "@/commons/Modal";

const clickableLink = (link) => {
  return (
    <Link className="underline text-violet-300" href={link} target="_blank" rel="noopener noreferrer">
      {link}
    </Link>
  );
};

const UserDetails = ({ params }) => {
  const login = params.login;
  const [user, setUserDetails] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setIsOpenModal(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetchUserDetails(login);
      setUserDetails(data);
    };

    getUserDetails();
  }, [login]);

  let {
    id = '',
    html_url = '',
    avatar_url = '',
    name = '',
    email = '',
    twitter_username = '',
    blog = '',
    followers = 0,
    following = 0,
    followers_url = '',
    following_url = '',
    company = '',
    location = '',
    bio = '',
    public_repos = 0,
    repos_url = '',
    type = ''
  } = user || {};

  const { firstName, lastName } = splitFullName(name);

  const tabData = {
    repositories: {
      count: public_repos,
      url: repos_url,
    },
    followers: {
      count: followers,
      url: followers_url,
    },
    following: {
      count: following,
      url: following_url,
    },
  };

  let modalUrl;
  switch (modalType) {
    case 'following':
    case 'followers':
    case 'repositories':
      modalUrl = tabData[modalType].url;
      break;
    default:
      modalUrl = '';
  }

const companiesArray = splitCompanies(company, ', ');

console.log('companiesArray', companiesArray);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto p-8 md:p-24 mb-32 text-center lg:max-w-7xl lg:w-full lg:mb-0">
        <Image
          src={avatar_url}
          alt="Description of the image"
          width={256}
          height={256}
          className="mb-3 rounded-full object-cover"
        />
        <h2 className={`text-2xl font-semibold`}>{login} {type && `(${type})`}</h2>
        {bio && <p className="italics">"{bio}"</p>}
        <p className="mb-2">{lastName}, {firstName}</p>

        <div className="mb-5 flex items-center justify-center gap-4 mt-3 lg:flex-row sm:flex-wrap lg:flex-nowrap lg:flex-wrap">
          {html_url && (
            <Link href={html_url} target="_blank" rel="noopener noreferrer">
              <PillButton icon={<GitHubIcon />} />
            </Link>
          )}
          {email && (
            <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              <PillButton icon={<MailIcon />} />
            </Link>
          )}
          {twitter_username && (
            <Link href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">
              <PillButton icon={<TwitterIcon />} />
            </Link>
          )}
          {blog && (
            <Link href={blog} target="_blank" rel="noopener noreferrer">
              <PillButton icon={<BookIcon />} />
            </Link>
          )}
        </div>

        <div className="inline-flex">
          {Object.keys(tabData).map((key) => {
            return (
              <div key={key}>
                <h2 className="rounded-full text-2xl font-semibold object-cover">{tabData[key].count}</h2>
                <button
                  onClick={() => openModal(key)}
                  className="underline hover:text-violet-800 font-medium px-4 rounded-l"
                >
                  {capitalizeFirstLetter(key)}
                </button>
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          {isOpenModal && (
            <Modal
              title={capitalizeFirstLetter(modalType)}
              body={clickableLink(modalUrl)}
              open={isOpenModal}
              setIsOpen={closeModal}
            />
          )}
        </div>

        {company && 
          <div className="mb-8">
            <h2 className={`text-2xl font-semibold`}>&#128188; Work Experience</h2>
            <p>{company}</p>
          </div>
        }

        {location && 
          <div className="mb-8">
            <h2 className={`text-2xl font-semibold`}>&#x1f3e1; Lives in</h2>
            <p>{location}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default UserDetails;
