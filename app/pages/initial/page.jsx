"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Heart from "../../../public/images/heart.png";

const InitialPage = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="initial">
      <div className="flex justify-center items-center h-[100%] flex-col gap-1">
        <p className="text-white font-extrabold text-2xl md:text-3xl tracking-widest">
          SECOND COFFEE
        </p>
        <Image src={Heart} alt="heart" className="w-24 h-24 animate-pulse" />
        <Link href="/pages/mainpage">
          <div className="">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-yellow-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#452a25] rounded-md group-hover:bg-opacity-0 uppercase">
                Sign Up
              </span>
            </button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#452a25] rounded-md group-hover:bg-opacity-0 uppercase">
                Sign In
              </span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InitialPage;
