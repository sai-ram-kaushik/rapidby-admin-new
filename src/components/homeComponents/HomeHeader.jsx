import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../elements/Button";

const HomeHeader = () => {
   const { authData } = useContext(AuthContext);

   return (
      <div className="w-full">
         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between w-full">
            <div className="flex flex-col items-start">
               <h2 className="text-[24px] font-heading text-secondary font-medium">
                  Hello <span>{authData.adminData.username}</span>
               </h2>
               <p className="text-primaryShade">
                  This is what we&apos;ve got for you today!
               </p>
            </div>

            <div className="flex items-center gap-3">
               <Button title="Add Product +" />
               <Button title="Add Categories +" />
            </div>
         </div>
      </div>
   );
};

export default HomeHeader;
