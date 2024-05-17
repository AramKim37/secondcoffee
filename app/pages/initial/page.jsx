import Image from "next/image";
import Link from "next/link";
import React from "react";
import Coffee from "../../../public/images/coffee1.gif";

const InitialPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-300">
      <div className="flex items-center justify-evenly gap-10">
        <h1 className="text-white font-extrabold text-2xl tracking-widest">
          Second Coffee
        </h1>
        {/* images(coffee gif) */}
        <div className="relative w-32 h-32">
          <Image
            src={Coffee}
            alt="coffee"
            layout="fill"
            objectFit="contain"
            className="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
