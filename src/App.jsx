import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
   return (
      <AuthProvider>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/admin/dashboard/*" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </AuthProvider>
   );
};

export default App;

const Dashboard = () => {
   return (
      <Layout>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </Layout>
   );
};
