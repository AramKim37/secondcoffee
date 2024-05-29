import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.png";
import Main from "@/app/components/Main";
import Sidebar from "@/app/components/Sidebar";
import RightSideBar from "@/app/components/RightSideBar";

const MainPage = () => {
  return (
    <main className="mainbg flex w-full px-10">
      <Sidebar />
      <Main />
      <RightSideBar />
    </main>
  );
};

export default MainPage;
