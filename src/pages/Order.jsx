import React from "react";
import OrderContainer from "../components/orderComponents/OrderContainer";

const Order = () => {
   return (
      <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
         <OrderContainer />
      </div>
   );
};

export default Order;
