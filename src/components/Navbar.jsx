import React, { useContext, useState } from "react";
import SearchBar from "../elements/SearchBar";
import notificationIcon from "/icons/notification.svg";
import avatar from "/icons/avatar.svg";
import logo from "/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
   const { authData } = useContext(AuthContext);

   const [nav, setNav] = useState(false);

   const handleChange = () => {
      setNav(!nav);
   };

   return (
      <div className="w-full h-[68px] px-5 sm:px-10">
         <div className="w-full h-full flex sm:hidden items-center justify-between">
            <div className="flex sm:hidden items-center gap-2">
               <img src={logo} />
               <p className="text-secondary text-[24px] font-bold">RapidBy</p>
            </div>

            <div
               className="p-2 rounded-full bg-secondary text-background "
               onClick={handleChange}
            >
               {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
            </div>
         </div>

         <div className="w-full h-full hidden sm:flex items-center justify-between">
            <SearchBar />
            <div className="flex items-center gap-3">
               <img src={notificationIcon} />
               <p>|</p>
               <img src={avatar} />
               {authData.accessToken ? (
                  <p>{authData.adminData.username}</p>
               ) : (
                  <p></p>
               )}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
