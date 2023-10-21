import React from "react";
import { useContext } from "react";
import { ImageContext } from "../App";
import { imageGallery, toggle, cross } from "../assets/icons";
import { useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=zAYh2KASkCMM1YKJbbalhUPTbJ5ksGjDoS41TqAOYEY`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };
  const [toggleItem, setToggleItem] = useState(false);
  return (
    <header className="flex bg-white items-center justify-between gap-4 px-6 py-4">
      <div>
        <img src={imageGallery} />
      </div>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm hidden sm: md:block">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-[450px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
            placeholder="Search high resolution Images, categories, wallpapers"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
          />
        </div>
      </div>
      <div className="hidden xl:block">
        <ul className="flex gap-5">
          {navLinks.map((items) => [
            <li
              className="font-montserrat font-bold text-dull-black"
              key={items.label}
            >
              <a href={items.href}>{items.label}</a>
            </li>,
          ])}
        </ul>
      </div>
      <div className="hidden xl:block">
        <span className="font-montserrat font-bold text-dull-black text-sm">
          Dark Mode
        </span>
      </div>
      <div className=" max-xl:flex hidden flex-col justify-end items-center ">
        <img
          src={toggleItem ? cross : toggle}
          alt="toggleItem"
          width={20}
          height={20}
          className="cursor-pointer object-contain"
          onClick={() => setToggleItem(!toggleItem)}
        />
        <div
          className={`${
            !toggleItem ? "hidden" : "flex"
          } absolute top-[3px] md:top-4 left-0 z-10 mt-[60px] bg-orange-200 w-full h-auto  `}
        >
          <div className=" flex-col w-full h-full py-4">
            <ul className=" w-full flex flex-col justify-center items-center">
              {navLinks.map((items) => (
                <li key={items.label}>
                  <a
                    href={items.href}
                    className=" hover:text-slate-gray font-montserrat leading-normal text-2xl font-semibold text-black"
                  >
                    {items.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <span>Dark Mode</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
