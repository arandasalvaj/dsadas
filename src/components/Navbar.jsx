import React from "react";
import { RiSearch2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <header className="fixed w-full bg-[#32502E] flex items-center gap-[450px] xl:pl-96 p-4 z-40">
      <form action="">
        <div className="relative">
          <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2"/>
          <input className="bg-white outline-none py-1 pl-10 pr-4 rounded-full" type="text" placeholder="Buscar" />
        </div>
      </form>
      <span className="text-4xl font-bold text-white text-center flex items-center justify-end" >Invernadero</span>

    </header>
  );
};

export default Navbar;
