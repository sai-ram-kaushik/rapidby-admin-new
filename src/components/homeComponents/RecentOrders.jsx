import React from "react";
import Button from "../../elements/Button";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/getApi/getApi";

const RecentOrders = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ["orders"],
      queryFn: getOrders,
   });

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (isError) {
      return <p>Something went wrong</p>;
   }

   const orders = data?.data || [];

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

            <div className="mt-5">
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
                        orders.slice(0, 3).map((order, idx) => (
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
                              <td className="px-6 py-4">
                                 {order.items.map((item) => item.amount)}
                              </td>
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
      </div>
   );
};

export default RecentOrders;
