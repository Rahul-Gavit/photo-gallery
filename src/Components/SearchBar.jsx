import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${
          import.meta.env.VITE_REACT_API_URL
        }`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };
  return (
    <div class="relative mt-2 rounded-md shadow-sm">
      <input
        type="text"
        name="search"
        id="search"
        class="block w-[250px] md:w-[650px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
    </div>
  );
};

export default SearchBar;
