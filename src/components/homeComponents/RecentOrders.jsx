import React from "react";
import Button from "../../elements/Button";

const RecentOrders = () => {
   return (
      <div className="w-full">
         <div className="max-w-full bg-background px-[24px] py-[30px] rounded-2xl">
            <div className="flex items-center justify-between w-full">
               <h3 className="text-[20px] font-bold">Recent Orders</h3>
               <div className="flex items-center gap-3">
                  <p>Filter</p>
                  <Button title="Export" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default RecentOrders;
