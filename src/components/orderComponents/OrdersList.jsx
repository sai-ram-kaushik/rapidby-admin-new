import React from "react";
import SearchBar from "../../elements/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/getApi/getApi";

const OrdersList = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ["orders"],
      queryFn: getOrders,
   });

   const orders = data?.data || [];

   if (isLoading) {
      return <p>Loading..</p>;
   }

   if (isError) {
      return <p>Error loading products</p>;
   }

   return (
      <div className="bg-background max-w-full px-[24px] py-[32px] rounded-xl">
         <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4 text-primaryShade">
               <p>All</p>
               <p>Pending</p>
               <p>In queue</p>
               <p>Ready to deliver</p>
               <p>Delivered</p>
            </div>

            <SearchBar />
         </div>

         <div className="mt-5 w-full">
            <table className="w-full border-collapse">
               <thead>
                  <tr className="grid grid-cols-8 text-left">
                     <th className="px-6 py-3">Order ID</th>
                     <th className="px-6 py-3">Ordered By</th>
                     <th className="px-6 py-3">Product</th>
                     <th className="px-6 py-3">Email ID</th>
                     <th className="px-6 py-3">Order Date/Time</th>
                     <th className="px-6 py-3">Amount</th>
                     <th className="px-6 py-3">Status</th>
                     <th className="px-6 py-3">Action</th>
                  </tr>
               </thead>

               <tbody>
                  {orders.length > 0 ? (
                     orders.map((order, idx) => (
                        <tr
                           key={idx}
                           className="grid grid-cols-8 items-center border-b"
                        >
                           <td className="px-6 py-4 truncate">
                              #{order._id.slice(16, 24)}
                           </td>
                           <td className="px-6 py-4 truncate">
                              {order.orderBy}
                           </td>
                           <td className="px-6 py-4 truncate">
                              {order.items.map((item) => item.name)}
                           </td>
                           <td className="px-6 py-4 break-all">
                              {order.email}
                           </td>
                           <td className="px-6 py-4">{order.createdAt}</td>
                           <td className="px-6 py-4">{order.amount}</td>
                           <td className="px-6 py-4">{order.status}</td>
                           <td className="px-6 py-4">...</td>
                        </tr>
                     ))
                  ) : (
                     <tr className="grid grid-cols-8">
                        <td colSpan="8" className="text-center py-4">
                           No products found
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default OrdersList;
