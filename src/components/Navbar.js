import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { TiArrowRepeat } from "react-icons/ti";
import logo from "../assets/logo.png";
import usa from "../assets/usa.png";

const Navbar = () => {
  return (
    <div className="bg-[#131921] p-4 flex-between md:px-8">
      <div className="h-10 flex shrink-0">
        <div className="h-10 flex">
          <img className="object-cover" src={logo} alt="logo" />
        </div>
        <button className="hidden text-white/70 pl-6 sm:flex items-center hover:scale-110">
          <BiWorld className="text-[20px] mr-1" />
          <p>Location</p>
        </button>
      </div>

      <div className="flex items-center w-full">
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            placeholder="Search..."
            className="py-2 rounded-full pl-12 placeholder:text-[#131921] outline-0 w-full"
          />
          <button className="absolute bg-orange-400 h-full w-12 right-0 flex-center rounded-r-full text-white">
            <FiSearch className="text-[25px] mr-1" />
          </button>
          <button className="absolute text-[#131921] h-full w-12 left-0 flex-center rounde-r-full">
            <GoSettings />
          </button>
        </div>
        <div className="hidden text-white md:flex items-center font-bold cursor-pointer mr-4 shrink-0">
          <img className="w-10 mr-1" src={usa} alt="flag" />
          <p>US</p>
          <TiArrowRepeat className="text-[15px] mt-3" />
        </div>
      </div>

      <div className="relative flex-center text-white text-[28px] ">
        <BsCart2 />
        <div className="absolute text-[16px] h-full -top-3.5 right-2 text-orange-400">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
