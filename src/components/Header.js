import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithRedirect, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { MobileNav } from './MobileNav';
import Logo from "../assets/logo.png";
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    } from '@headlessui/react';
    import {
    Bars3Icon,
    BeakerIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    } from '@heroicons/react/24/outline';
    import { ChevronDownIcon } from '@heroicons/react/20/solid';

    const products = [
    { name: 'Science', description: 'See the knowledge they have to share with you.', to: '#', icon: ChartPieIcon },
    { name: 'Happy', description: 'To elevate your mood', to: '#', icon: CursorArrowRaysIcon },
    { name: 'Sad', description: 'To feel their sorrow', to: '#', icon: FingerPrintIcon },
    { name: 'Sports', description: 'Keeping atheltic', to: '#', icon: SquaresPlusIcon },
    { name: 'Fiction', description: 'Dive into the fantasies', to: '#', icon: BeakerIcon },
    ]
   
    export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isAuth") || false)
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);
    const navigate = useNavigate();

    function handleLogin() {
        signInWithRedirect(auth, provider).then((result) => {
            setIsAuth(true);
            setIsLoggedIn(auth);
            localStorage.setItem("isAuth", true);
            navigate("/");
        })
    }

    function handleLogout() {
        signOut(auth);
        setIsAuth(false);
        setIsLoggedIn(false);
        localStorage.setItem("isAuth", false);
    }

    return (
        <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
            <Link to="/" className="-m-2 p-2">
                <img
                alt="Logo"
                src={ Logo }
                className="h-8 w-auto flex"
                />
            </Link>
            <Link to="/">
            <span className="font-bold mx-2 py-2">Deacon Blog</span>
            </Link>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                Categories
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                <div className="p-4">
                    {products.map((item) => (
                    <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                        </div>
                        <div className="flex-auto">
                        <Link to={item.to} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </PopoverPanel>
            </Popover>

            <Link to="/featured" className="text-sm/6 font-semibold text-gray-900">
                Featured
            </Link>
            <Link to="/aboutus" className="text-sm/6 font-semibold text-gray-900">
                About Us
            </Link>
            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!isLoggedIn ? (
                <>
                    <Link onClick={handleLogin} to="./login" className="p-2 text-sm/6 font-semibold text-white mx-2 bg-blue-500 rounded-xl">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/create" className="p-2 text-sm/6 font-semibold text-white mx-2 bg-blue-500 rounded-xl">
                        Create <span aria-hidden="true"></span>
                    </Link>
                    <Link to="/" onClick={handleLogout} className="p-2 rounded-xl text-sm/6 font-semibold text-white bg-blue-500">
                        Log out <span aria-hidden="true"></span>
                    </Link>
                </>
            )}
            </div>
        </nav>
        <MobileNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </header>
    )
}
