import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

const Navbar = () => {
  const { searchParam, setSearchParam ,handleSubmit} = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg-flex-row gap-5 lg:gap-0">
      <h2 className=" text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Food Recipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event)=> setSearchParam(event.target.value)}
          placeholder="Enter Item..."
          className="bg-gray-200 p-3 px-8 lg:w-96 shadow-lg shadow-red-200 focus:shadow-red-200 mt-5 mb-5 outline-none rounded-full"
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
