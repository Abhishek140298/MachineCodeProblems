import { useState, useEffect } from "react";

//Outside hok ,because every hook will use same map,if inside every time new one is created
//Memory leak can be aoided by useing timestamp and LRU
const cache = new Map();
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState();
  const [res, setRes] = useState();

  const fetchData = async (url) => {
    const controller = await new AbortController();

    try {
      setLoading(true);

      const res = await fetch(url,{
        signal:controller
      });
      setRes(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      controller.abort();
    }
  };

  useEffect(() => {
    
  }, [url]);
};
