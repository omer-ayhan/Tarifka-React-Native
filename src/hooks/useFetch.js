import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    // use abortController to cancel the request
    const abortController = new AbortController();
    try {
      const { data: incomingData } = await axios.get(url, {
        signal: abortController.signal,
      });
      setData(incomingData);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
    return () => {
      abortController.abort();
    };
  }, [url]);

  useEffect(() => {
    // unmount
    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
