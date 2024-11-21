import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
   return (
      <div className="flex items-start min-h-screen">
         <Sidebar />
         <main className="flex-grow">{children}</main>
      </div>
   );
};

export default Layout;
