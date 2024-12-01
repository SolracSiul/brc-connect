import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="custom-gradient">
        <div className="text-white py-[42px] px-6 h-[280px] max-w-[1200px] mx-auto flex justify-between ">
            <div className="flex flex-col gap-10">
                <h1 className="text-2xl font-bold text-[#b34b4b]">Brecho connect</h1>
                <Image src="/facisa-logo.png" alt="oie" width={130} height={130}/>
            </div>
            <div className="">
                    <Image src="/logo.png" alt="oie" width={130} height={130}/>
            </div>
        </div>
    </header>
  );
};

export default Header;
