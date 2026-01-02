import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, BeakerIcon } from '@heroicons/react/24/outline';

const products = [
    { name: 'Science', description: 'See the knowledge they have to share with you.', to: '#', icon: ChartPieIcon },
    { name: 'Happy', description: 'To elevate your mood', to: '#', icon: CursorArrowRaysIcon },
    { name: 'Sad', description: 'To feel their sorrow', to: '#', icon: FingerPrintIcon },
    { name: 'Sports', description: 'Keeping atheltic', to: '#', icon: SquaresPlusIcon },
    { name: 'Fiction', description: 'Dive into the fantasies', to: '#', icon: BeakerIcon },
];


export const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Deacon Book</span>
            <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
            />
            </Link>
            <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
        </div>
        <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                Categories
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.to}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </DisclosurePanel>
                </Disclosure>
                <Link
                to="/featured"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                Featured
                </Link>
                <Link
                to="/aboutus"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                About Us
                </Link>
            </div>
            <div className="py-6">
                    {!isLoggedIn ? (
                    <>
                        <Link to="./login" className="text-sm/6 font-semibold text-gray-900 mx-2">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link to="./register" className="text-sm/6 font-semibold text-gray-900">
                            Register <span aria-hidden="true"></span>
                        </Link>
                    </>
                    ) : (
                        <Link to="/" onClick={() => setIsLoggedIn(false)} className="text-sm/6 font-semibold text-gray-900">
                            Log out <span aria-hidden="true"></span>
                        </Link>
                    )}
            </div>
            </div>
        </div>
        </DialogPanel>
     </Dialog>
  )
}
