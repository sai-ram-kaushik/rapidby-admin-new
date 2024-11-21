import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard/*" element={<Dashboard />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;

const Dashboard = () => {
   return (
      <div>
         <div>hello</div>
      </div>
   );
};
