"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Coffee from "../../../public/images/coffee1.gif";
import Second from "../../../public/images/second.png";

const InitialPage = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="initial">
      <div className="flex justify-center items-center h-[100%] flex-col">
        <p className="text-white font-extrabold text-2xl md:text-3xl tracking-widest">
          SECOND COFFEE
        </p>
        <Link href="/pages/mainpage">
          <button>Go</button>
        </Link>
      </div>
    </div>
  );
};

export default InitialPage;
