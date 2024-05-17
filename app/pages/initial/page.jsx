import Image from "next/image";
import Link from "next/link";
import React from "react";
import Coffee from "../../../public/images/coffee1.gif";

const InitialPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-300">
      <div className="flex items-center justify-evenly gap-10">
        <div className="flex items-center">
          <div className="h-[500] items-center flex justify-center">
            <h1 className="text-white font-extrabold text-4xl tracking-widest h-full">
              Second Coffee
            </h1>
          </div>
          <div className="">
            {/* images(coffee gif) */}
            <Image src={Coffee} alt="coffee" className=" w-32 h-32 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialPage;
