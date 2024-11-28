import React from "react";
import OrdersList from "./OrdersList";
import { useQuery } from "@tanstack/react-query";
import { getMonthlyMetrix } from "../../api/getApi/getApi";

const OrderContainer = () => {
   const { data: metrix, isLoading } = useQuery({
      queryKey: ["montlyMetrix"],
      queryFn: getMonthlyMetrix,
   });

   const montlyMetrix = metrix?.data || {};
   console.log(montlyMetrix);

   const productOfTheMonth = montlyMetrix?.productOfTheMonth || {};

   const productDetails = productOfTheMonth?.productDetails || {};

   return (
      <div className="w-full">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
            <div className="max-w-[373px] min-h-[126px] bg-[#FBE0FF] rounded-xl">
               <div className="flex flex-col items-start gap-2 px-[24px] py-[20px]">
                  <h3 className="text-[16px] text-primaryShade">
                     Orders this month
                  </h3>
                  <div className="flex items-center gap-2">
                     <p className="text-[36px] font-bold">
                        {montlyMetrix.totalOrdersCount}
                     </p>
                     <p>-35% from last month</p>
                  </div>
               </div>
            </div>
            <div className="max-w-[373px] min-h-[126px] bg-[#FFEDD3] rounded-xl">
               <div className="flex flex-col items-start gap-2 px-[24px] py-[20px]">
                  <h3 className="text-[16px] text-primaryShade">
                     Product of the month
                  </h3>
                  <div className="flex items-center gap-2">
                     <p className="text-[36px] font-bold">
                        {productDetails.name}
                     </p>
                  </div>
               </div>
            </div>
            <div className="max-w-[373px] min-h-[126px] bg-[#EFFFFA] rounded-xl">
               <div className="flex flex-col items-start gap-2 px-[24px] py-[20px]">
                  <h3 className="text-[16px] text-primaryShade">
                     Order delivered this month
                  </h3>
                  <div className="flex items-center gap-2">
                     <p className="text-[36px] font-bold">
                        {montlyMetrix.deliveredOrdersCount}
                     </p>
                  </div>
               </div>
            </div>
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
