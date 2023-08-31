import { React, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [toggle,settoggle]=useState(false)
  return (
    <div className="bg-black text-red-500 ">
      <div className=" md:max-w-[1440px] relative p-4 mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Company</h1>
        </div>
        {   toggle ?
          <CgClose onClick={()=>{settoggle(!toggle)}} className="text-2xl block md:hidden" />
            :<GiHamburgerMenu onClick={()=>{settoggle(!toggle)}} className="text-2xl block md:hidden" />
        
        }
        <ul className="hidden md:flex text-lg gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/test">Test</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <ul className={`md:hidden flex flex-col items-center text-xl gap-12 h-screen duration-300 absolute top-16 w-full  bg-gray-700  ${toggle ? 'left-[0]':'left-[-100%]'} `}>
          <li className="p-3 mt-12">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3">
            <Link to="/test">Test</Link>
          </li>
          <li className="p-3">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
