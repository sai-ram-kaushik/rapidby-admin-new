import React from "react";
import OrdersList from "./OrdersList";

const OrderContainer = () => {
   return (
      <div className="w-full">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
            <div className="max-w-[373px] min-h-[126px] bg-[#FBE0FF] rounded-xl"></div>
            <div className="max-w-[373px] min-h-[126px] bg-[#FFEDD3] rounded-xl"></div>
            <div className="max-w-[373px] min-h-[126px] bg-[#EFFFFA] rounded-xl"></div>
            <div className="max-w-[373px] min-h-[126px] bg-background rounded-xl"></div>
            <div className="max-w-[373px] min-h-[126px] bg-background rounded-xl"></div>
            <div className="max-w-[373px] min-h-[126px] bg-background rounded-xl"></div>
         </div>

         <div className="mt-10">
            <OrdersList />
         </div>
      </div>
   );
};

export default OrderContainer;
