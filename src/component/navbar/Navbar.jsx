

import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="bg-[#181818] w-screen  overflow-hidden">
        <nav className="w-screen  py-6 px-6 lg:pr-32 bg-[#252525] flex justify-between">
            <span className="text-lg font-semibold text-white">HouseHunter</span>
            <ul className="hidden md:flex items-center space-x-5 text-white">
                <li> <NavLink to='/'>Home</NavLink></li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li><NavLink to='register'>Register</NavLink></li>
            </ul>
            {/* Hamburger Menu */}
            <button className="space-y-1 group md:hidden">
                <div className="w-6 h-1 bg-white"></div>
                <div className="w-6 h-1 bg-white"></div>
                <div className="w-6 h-1 bg-white"></div>
                {/* menu */}
                <ul className="bg-[#252525] w-screen pb-10 text-white absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
                    <button className="px-10 py-8 relative ml-auto">
                        <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                        <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                    </button>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">Home</li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">About</li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">Service</li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">Blog</li>
                <li className="flex justify-center w-full py-4 hover:bg-[#202020]">Register</li>
            </ul>
            </button>
        </nav>
    </div>
    
  );
};

export default Navbar;
