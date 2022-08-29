// import { Fragment } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import styles from "../../styles/navbar.module.css";

// import Logo from "../Logo/Logo";
// import Navlink from "./Navlink";
// import MobileNavlink from "./MobileNavlink";

// import classNames from "../../utils/classnames";

// export default function Navbar() {
//     return (
//         <Disclosure as="nav" className={"mb-4 lg:mb-8" && styles.navbar}>
//             {({ open }) => (
//                 <>
//                     <div className="max-w-full mx-auto px-4 lg:px-32">
//                         <div className="flex justify-between h-16">
//                             <Logo />
//                             <div className="hidden lg:ml-6 lg:flex lg:gap-14">
//                                 <Navlink href="/home">Portfolio</Navlink>
//                                 <Navlink href="/blog">Blog</Navlink>
//                                 <Navlink href="/faqs">FAQs</Navlink>
//                             </div>

//                             <div className="flex items-center lg:hidden">
//                                 {/* Mobile menu button */}
//                                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                                     <span className="sr-only">
//                                         Open main menu
//                                     </span>
//                                     {open ? (
//                                         <XIcon
//                                             className="block h-6 w-6"
//                                             aria-hidden="true"
//                                         />
//                                     ) : (
//                                         <MenuIcon
//                                             className="block h-6 w-6"
//                                             aria-hidden="true"
//                                         />
//                                     )}
//                                 </Disclosure.Button>
//                             </div>
//                             <div className="hidden lg:ml-4 lg:flex lg:items-center">
//                                 {/* User Profile dropdown */}
//                                 <Menu
//                                     as="div"
//                                     className="ml-4 relative flex-shrink-0"
//                                 >
//                                     <div>
//                                         <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500">
//                                             <span className="sr-only">
//                                                 Open user menu
//                                             </span>
//                                             <Image
//                                                 className="rounded-full"
//                                                 src="/assets/account.svg"
//                                                 alt=""
//                                                 width={24}
//                                                 height={24}
//                                             />
//                                         </Menu.Button>
//                                     </div>
//                                     <Transition
//                                         as={Fragment}
//                                         enter="transition ease-out duration-100"
//                                         enterFrom="transform opacity-0 scale-95"
//                                         enterTo="transform opacity-100 scale-100"
//                                         leave="transition ease-in duration-75"
//                                         leaveFrom="transform opacity-100 scale-100"
//                                         leaveTo="transform opacity-0 scale-95"
//                                     >
//                                         <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                             <Menu.Item>
//                                                 {({ active }) => (
//                                                     <Link
//                                                         href="/account"
//                                                         className={classNames(
//                                                             active
//                                                                 ? "bg-gray-100"
//                                                                 : "",
//                                                             "block px-4 py-2 text-sm text-gray-700"
//                                                         )}
//                                                     >
//                                                         Profile
//                                                     </Link>
//                                                 )}
//                                             </Menu.Item>
//                                             <Menu.Item>
//                                                 {({ active }) => (
//                                                     <a
//                                                         href="#"
//                                                         className={classNames(
//                                                             active
//                                                                 ? "bg-gray-100"
//                                                                 : "",
//                                                             "block px-4 py-2 text-sm text-gray-700"
//                                                         )}
//                                                     >
//                                                         Logout
//                                                     </a>
//                                                 )}
//                                             </Menu.Item>
//                                         </Menu.Items>
//                                     </Transition>
//                                 </Menu>
//                             </div>
//                         </div>
//                     </div>
//                     <Disclosure.Panel className="lg:hidden bg-white">
//                         <div className="pt-2 pb-3 space-y-1">
//                             <MobileNavlink href="/home">Portfolio</MobileNavlink>
//                             <MobileNavlink href="/blog">Blog</MobileNavlink>
//                             <MobileNavlink href="/FAQs">FAQs</MobileNavlink>
//                             <MobileNavlink href="/account">Profile</MobileNavlink>
//                             <MobileNavlink href="/logout">Logout</MobileNavlink>
//                         </div>
//                     </Disclosure.Panel>
//                 </>
//             )}
//         </Disclosure>
//     );
// }
