import Image from "next/image";
import React from "react";
import Logo from "../../public/images/logo.png";

const Sidebar = () => {
  return (
    <div className="flex basis-1/5 h-full items-center justify-center">
      <div className="w-full h-full">
        <div className="spatial w-full h-full items-center rounded-xl">
          <div className="flex">
            <Image src={Logo} className="w-20" />
            <p>UserName</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
