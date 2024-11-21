import React from "react";
import searchIcon from "/icons/search.svg";

const SearchBar = () => {
   return (
      <div className="flex max-w-[290px] gap-2 bg-gray-100 p-2 rounded-xl">
         <img src={searchIcon} />
         <input
            type="search"
            className="bg-transparent outline-none"
            placeholder="Search"
         />
      </div>
   );
};

export default SearchBar;
