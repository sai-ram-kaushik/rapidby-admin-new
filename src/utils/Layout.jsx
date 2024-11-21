import React from "react";

const Layout = ({ children }) => {
   return (
      <div className="flex items-start min-h-screen">
         <main className="flex-grow">{children}</main>
      </div>
   );
};

export default Layout;
