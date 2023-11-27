"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png"
import { Skeleton } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { AvatarIcon } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ToggleThemeButton from '@/components/ToggleThemeButton';

export const revalidate = 60;
const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 500);
    };

    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 500);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const { data: session, status } = useSession();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pathName = usePathname();
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSignOut = async () => {
    const res = await fetch(`/api/v1/user`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: session?.session?.user?.username,
      }),
      cache: "no-store",
    });
    const response = await res.json();
    console.log(response);
    await signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <nav className="bg-gray-300 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              className="h-8 w-8 mr-1"
              alt=" Logo"
            />
            {isDesktop && (
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Drawww
              </span>
            )}
          </Link>

          <div className="flex md:order-2">
          <ToggleThemeButton />

         
           
            
            {/* <button
              data-collapse-toggle="navbar-search"
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}

            {status === "authenticated" ? (
              <section className="ml-3">
                {isDesktop ? (
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src:
                            session?.session?.user?.image ||
                            "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                        description={
                          "@" + session?.session?.user?.username || "@anonymous"
                        }
                        name={session?.session?.user?.name || "anonymous"}
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                      <DropdownItem key="profile" className="gap-2 h-14">
                        <p className="font-bold">Signed in as</p>{" "}
                        <p className="font-bold">
                          @{session?.session?.user?.username || "anonymous"}
                        </p>{" "}
                      </DropdownItem>
                      <DropdownItem key="settings">
                        {" "}
                        <Link
                          href={`/user/profile?@${session?.session?.user?.username}`}
                        >
                          My Account
                        </Link>
                      </DropdownItem>
                        {/*
                      <DropdownItem key="portfolio">
                        <Link
                          href={`/user/portfolio?@${session?.session?.user?.username}`}
                        >
                          Portfolio
                        </Link>
                      </DropdownItem>
                        */}
                      <DropdownItem key="logout" color="danger">
                        <span onClick={handleSignOut}>Log Out</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                      <User
                        as="button"
                        avatarProps={{
                          isBordered: true,
                          src:
                            session?.session?.user?.image ||
                            "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                        }}
                        className="transition-transform"
                      />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                      <DropdownItem key="profile" className="gap-2 h-14">
                        <p className="font-semibold">Signed in as </p>
                        <span className="font-bold">
                          @{session?.session?.user?.username || "anonymous"}
                        </span>
                      </DropdownItem>
                      <DropdownItem key="settings">
                        <Link
                          href={`/user/profile?@${session?.session?.user?.username}`}
                        >
                          My Account
                        </Link>
                      </DropdownItem>
                    {/*
                      <DropdownItem key="portfolio">
                       <Link
                          href={`/user/portfolio?@${session?.session?.user?.username}`}
                        >
                          Portfolio
                        </Link>
                      </DropdownItem>
                    */} 
                      <DropdownItem key="logout" color="danger">
                        <span onClick={handleSignOut}>Log Out</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )}
              </section>
            ) : status === "loading" ? (
              <>
                {isDesktop && (
                  <>
                    <div className="max-w-[300px] w-full flex items-center gap-3">
                      <div>
                        <Skeleton className="flex w-12 h-12 rounded-full" />
                      </div>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                      </Skeleton>
                    </div>
                  </>
                )}
                {!isDesktop && (
                  <Skeleton className="flex w-10 h-10 rounded-full" />
                )}
              </>
            ) : pathName === "/user/login" ? (
              <button className="px-3 py-1 ml-2 text-gray-400 bg-gray-700 border border-transparent rounded-xl hover:bg-gray-800 hover:text-gray-300">
                <Link href="/user/register">Register</Link>
              </button>
            ) : (
              <button className="px-3 py-1 ml-2 text-gray-400 bg-gray-700 border border-transparent rounded-xl hover:bg-gray-800 hover:text-gray-300">
                <Link href="/user/login">Login</Link>
              </button>
            )}
            {/* Dropdown menu */}
          </div>

          {/* Mobile nav */}
          <div
            className={`items-center justify-between ${
              isSearchOpen ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {isSearchOpen && (
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                )}
              </div>

              {/* Dropdown menu */}

              {isSearchOpen && (
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              )}
            </div>

            {/* <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:flex  `}
            >
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
