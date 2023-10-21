import { createContext, useState } from "react";
import { Button, Images, NavBar, SearchBar } from "./Components/index";
import useAxios from "./hooks/useAxios";
import Hero from "./section/Hero";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("cat");
  const [page, setPage] = useState(1);
  const { response, error, fetchData } = useAxios(
    `search/photos?page=${page}&query=${searchImage}&client_id=${
      import.meta.env.VITE_REACT_API_URL
    }`
  );

  const value = {
    response,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <NavBar />
      <Hero>
        <SearchBar />
      </Hero>
      <Images />
      <Button setPage={setPage} page={page} />
    </ImageContext.Provider>
  );
}

export default App;
