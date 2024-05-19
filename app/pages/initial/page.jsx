"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Coffee from "../../../public/images/coffee1.gif";

const InitialPage = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-300">
      <div className="flex items-center gap-10">
        <div className="flex items-center w-full h-full flex-col">
          <div className="items-center flex justify-center">
            <h1 className="text-white font-extrabold text-4xl tracking-widest">
              Second Coffee
            </h1>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* images(coffee gif) */}
            <Image
              src={Coffee}
              alt="coffee"
              className="w-32 h-32 hover:scale-[120%] ease-in-out transform transition-transform duration-300"
            />
            <span
              className={`absolute top-20 left-28 text-white font-extrabold pl-5 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              Ready?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
