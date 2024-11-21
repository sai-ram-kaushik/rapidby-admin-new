import React from "react";
import data from "../data/sidebar.json";
import { Link } from "react-router-dom";

const Sidebar = () => {
   const { title, logo, sidebarLinks, logoutIcon, logoutTitle } = data.sidebar;
   return (
      <div className="hidden sm:flex sm:flex-col sm:justify-between sm:w-[220px] px-5 py-5 h-screen sticky top-0">
         <div>
            <div className="flex flex-col items-start gap-5">
               <div className="flex items-center gap-2">
                  <img src={logo} width={24} height={21} alt="Logo" />
                  <p className="text-secondary text-[24px] font-bold">
                     {title}
                  </p>
               </div>

               <div className="flex flex-col items-start gap-4">
                  {sidebarLinks.map((link, index) => (
                     <Link to={link.path} key={index}>
                        <ul className="flex items-center gap-4 cursor-pointer">
                           <img src={link.icon} alt={link.name} />
                           <p>{link.name}</p>
                        </ul>
                     </Link>
                  ))}
               </div>
            </div>
         </div>

         <div>
            <div className="flex items-center gap-2 cursor-pointer">
               <img src={logoutIcon} width={24} height={24} alt="Logout Icon" />
               <p>{logoutTitle}</p>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
