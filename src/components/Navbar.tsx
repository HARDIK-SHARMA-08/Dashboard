import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { SideBar } from ".";


export const Navbar = () => {
  const auth = useSelector((state: any) => state.authReducer)
  const user = useSelector((state: any) => state.userReducer)

  const fName = user.firstname
  const initails = fName.charAt(0);
  return (
    <div className="w-full text-white bg-white rounded-b-2xl flex flex-col md:flex-row items-center justify-center md:px-6 lg:px-8
    sticky top-0">
      <div className="p-4 flex flex-row items-center justify-between">
        <a
          href="#"
          className="text-lg text-black font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
        >
          Dashboard
        </a>
      </div>
      <div className="block md:hidden">
        <SideBar />
      </div>
      <nav className="flex-col text-black flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
        {auth.token ?
          <Link href="./profile">
            <div className="inline-flex gap-2 items-center rounded-full bg-indigo-500 p-1 text-white">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-200 font-bold text-neutral-800">{initails}</span>
              <span className="pr-2">
                {user.firstname} {user.lastname}
              </span>
            </div>
          </Link> :
          <></>}

      </nav>
    </div>
  );
};
