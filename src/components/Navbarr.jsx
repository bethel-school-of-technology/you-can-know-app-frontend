import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import image from "../images/LOGO.png";
import image1 from "../images/avatar.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Destinations", href: "/destinations", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Search", href: "/search", current: false },
  { name: "Login", href: "/login", current: false},
  { name: "Signup", href: "/signup", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-50px">
                <div className="flex-shrink-0 flex items-center ">
                  <Link to="/home">
                    <img
                      className="block lg:hidden h-auto w-12 transform scale-250"
                      src={image}
                      alt="logo-img"
                    />
                  </Link>
                  <Link to="/home">
                    <img
                      className="hidden lg:block h-auto w-12 transform scale-250"
                      src={image}
                      alt="logo-img"
                    />
                  </Link>
                </div>

                {/* navBar buttons */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 pl-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white font-semibold text-lg text-blue-600 hover:bg-gray-100 hover:text-blue-600"
                            : "font-semibold text-lg text-blue-600 hover:bg-gray-100 hover:text-blue-600",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" flex text-sm rounded-full ">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={image1}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-4 py-2 font-semibold text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
                            )}
                          >
                            Profile
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/logout"
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-4 py-2 font-semibold text-sm text-blue-600 hover:bg-blue-600 hover:text-white"
                            )}
                          >
                            Log Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-white text-blue-600 font-semibold hover:bg-blue-600 hover:text-white"
                      : "font-semibold text-blue-600 hover:bg-blue-600 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
