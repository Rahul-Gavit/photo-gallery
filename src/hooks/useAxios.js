import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com/";

  const fetchData = async (url) => {
    try {
      const res = await axios(url);
      setResponse(res.data.results);
      console.log(res.data.results);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return { response, error, fetchData: (url) => fetchData(url) };
};

export default useAxios;
