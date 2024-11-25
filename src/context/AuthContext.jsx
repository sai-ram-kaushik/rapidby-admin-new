import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [authData, setAuthData] = useState({
      accessToken:
         localStorage.getItem("accessToken") || Cookies.get("accessToken"),
      refreshToken:
         localStorage.getItem("refreshToken") || Cookies.get("refreshToken"),
      adminData:
         JSON.parse(localStorage.getItem("adminData")) ||
         JSON.parse(Cookies.get("adminData") || null),
   });

   const login = (data) => {
      const { accessToken, refreshToken, adminData } = data;

      // Save to localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("adminData", JSON.stringify(adminData));

      // Save to cookies
      Cookies.set("accessToken", accessToken, { expires: 7 }); // Expires in 7 days
      Cookies.set("refreshToken", refreshToken, { expires: 7 });
      Cookies.set("adminData", JSON.stringify(adminData), { expires: 7 });

      setAuthData({ accessToken, refreshToken, adminData });
   };

   const logout = () => {
      // Remove from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("adminData");

      // Remove cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      Cookies.remove("adminData");

      setAuthData({ accessToken: null, refreshToken: null, adminData: null });
   };

   useEffect(() => {
      setAuthData({
         accessToken:
            localStorage.getItem("accessToken") || Cookies.get("accessToken"),
         refreshToken:
            localStorage.getItem("refreshToken") || Cookies.get("refreshToken"),
         adminData:
            JSON.parse(localStorage.getItem("adminData")) ||
            JSON.parse(Cookies.get("adminData") || null),
      });
   }, []);

   return (
      <AuthContext.Provider value={{ authData, login, logout }}>
         {children}
      </AuthContext.Provider>
   );
};
