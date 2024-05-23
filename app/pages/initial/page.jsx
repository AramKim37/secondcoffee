"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Coffee from "../../../public/images/coffee1.gif";

const InitialPage = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-300 initial">
      <div className="flex items-center">
        <h1 className="text-black font-extrabold text-4xl tracking-widest uppercase">
          Second Coffee
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default InitialPage;
