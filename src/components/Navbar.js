
// Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav style={{background: 'linear-gradient(to left, #6e5494, #300066, #300066)', zIndex: 1000}} className="bg-violet-300  p-4 text-white sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
            <Link className="text-xl text-white hover:text-violet-100 font-semibold" href="/">CloudBees</Link>
            </div>
            <div className="flex space-x-8">
                <Link className="nav-link text-white hover:text-violet-100" href="/users">User Profiles</Link>
                {/* <Link className="nav-link hover:text-gray-300" href="/my-profile">My Profile</Link> */}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;


