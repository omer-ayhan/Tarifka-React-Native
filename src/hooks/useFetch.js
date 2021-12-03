import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: incomingData } = await axios.get(url);
      setData(incomingData);
      setLoading(false);
    } catch (error) {
      setError(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
