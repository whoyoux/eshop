import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { PencilSimple, SignOut, SignIn, User } from "phosphor-react";
import { forwardRef } from "react";

const MyLink = forwardRef((props: any, ref) => {
  let { href, children, Icon, ...rest } = props;
  return (
    <Link href={href}>
      <a
        ref={ref}
        {...rest}
        className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-blue-500 hover:text-white"
      >
        <Icon className="mr-2 h-5 w-5" aria-hidden="true" weight="bold" />
        {children}
      </a>
    </Link>
  );
});

MyLink.displayName = "MyLink";

const Header = () => {
  return (
    <header className="w-full mb-5 flex items-strech justify-between text-white h-[15vh]">
      <Link href="/">
        <h1 className="font-title font-semibold text-4xl text-white flex items-center">
          eshop
        </h1>
      </Link>
      <div className="sm:hidden flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  <MyLink href="/edit" Icon={PencilSimple}>
                    Edit
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/sigin" Icon={SignIn}>
                    Sign in
                  </MyLink>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  <MyLink href="/account" Icon={User}>
                    Account
                  </MyLink>
                </Menu.Item>
                <Menu.Item>
                  <MyLink href="/logout" Icon={SignOut}>
                    Sign out
                  </MyLink>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <ul className="hidden sm:flex text-white uppercase font-medium items-center justify-end ">
        <li className="hover:bg-blue-600 h-full p-5 flex items-center cursor-pointer">
          sale
        </li>
        <li className="hover:bg-blue-600 h-full p-5 flex items-center cursor-pointer">
          collections
        </li>
        <li className="hover:bg-blue-600 h-full p-5 flex items-center cursor-pointer">
          account
        </li>
        <li className="hover:bg-blue-600 h-full p-5 flex items-center cursor-pointer">
          logout
        </li>
      </ul>
      <div className="w-screen h-[15vh] bg-blue-12 absolute left-0 right-0 bg-blue-500 -z-10"></div>
    </header>
  );
};

export default Header;
