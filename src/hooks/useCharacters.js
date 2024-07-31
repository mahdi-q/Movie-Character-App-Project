import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useCharacters(searchValue) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${searchValue}`,
          { cancelToken: source.token }
        );
        setCharacters(res.data.results);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("successfully aborted");
        } else {
          setCharacters([]);
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (searchValue.length < 3) {
      setCharacters([]);
      return;
    }

    fetchData();

    return () => {
      source.cancel();
    };
  }, [searchValue]);

  return { characters, isLoading };
}
