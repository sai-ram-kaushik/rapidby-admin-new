import React from "react";
import HomeHeader from "../components/homeComponents/HomeHeader";
import HomeDetails from "../components/homeComponents/HomeDetails";
import data from "../data/landing-page.json";

const Home = () => {
   return (
      <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
         <HomeHeader />
         <HomeDetails homeDetails={data.homeDetails} />
      </div>
   );
};

export default Home;
