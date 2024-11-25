import { useQuery } from "@tanstack/react-query";
import React from "react";
import { productCount } from "../../api/getApi/getApi";

const HomeDetails = ({ homeDetails }) => {
   const { totalProducts, orderPending, totalRevenue } = homeDetails;

   const { data, isLoading } = useQuery({
      queryKey: ["totalProductCount"],
      queryFn: productCount,
   });

   const productCountValue = data?.data || 0;

   if (isLoading) {
      return <p>Loading...</p>;
   }

   return (
      <div className="w-full">
         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
            <div className="bg-[#DEE9FF] w-full max-w-[374.67px] 2xl:max-w-[450px] min-h-[175px] rounded-2xl">
               <div className="px-[32px] py-[28px] flex flex-col items-start gap-5">
                  <div className="flex items-center gap-3">
                     <img src={totalProducts.icon} />
                     <h3 className="font-heading text-[24px] font-medium">
                        {totalProducts.title}
                     </h3>
                     <img src={totalProducts.arrowIcon} />
                  </div>

                  <div className="flex items-center gap-2">
                     <h2 className="text-[56px] font-bold">
                        {productCountValue}
                     </h2>

                     <div className="flex flex-col items-start">
                        <p>{totalProducts.newProductQuantity}</p>
                        <p>added last month</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#FBE0FF] w-full max-w-[374.67px] 2xl:max-w-[450px] min-h-[175px] rounded-2xl">
               <div className="px-[32px] py-[28px] flex flex-col items-start gap-5">
                  <div className="flex items-center gap-3">
                     <img src={orderPending.icon} />
                     <h3 className="font-heading text-[24px] font-medium">
                        {totalProducts.title}
                     </h3>
                     <img src={orderPending.arrowIcon} />
                  </div>

                  <div className="flex items-center gap-2">
                     <h2 className="text-[56px] font-bold">
                        {orderPending.totalNumber}
                     </h2>

                     <div className="flex flex-col items-start">
                        <p>{orderPending.newProductQuantity}</p>
                        <p>added last month</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-[#FFEDD3] w-full max-w-[374.67px] 2xl:max-w-[450px] min-h-[175px] rounded-2xl">
               <div className="px-[32px] py-[28px] flex flex-col items-start gap-5">
                  <div className="flex items-center gap-3">
                     <img src={totalRevenue.icon} />
                     <h3 className="font-heading text-[24px] font-medium">
                        {totalRevenue.title}
                     </h3>
                     <img src={totalRevenue.arrowIcon} />
                  </div>

                  <div className="flex items-center gap-2">
                     <h2 className="text-[56px] font-bold">
                        {totalRevenue.totalNumber}
                     </h2>

                     <div className="flex flex-col items-start">
                        <p>{totalRevenue.newProductQuantity}</p>
                        <p>added last month</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeDetails;
