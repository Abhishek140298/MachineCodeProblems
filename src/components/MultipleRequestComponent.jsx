import { useEffect, useState } from "react";
const CATEGORY_APIS = {
  trending: "/api/categories/trending",
  electronics: "/api/categories/electronics",
  fashion: "/api/categories/fashion",
  grocery: "/api/categories/grocery",
  deals: "/api/categories/deals",
};

const MultipleRequestComponent = () => {
  const [categoryData, setCategoryData] = useState(
    Object?.keys(CATEGORY_APIS)?.map((key) => ({
      [key]: { status: "loading", data: null, error: null },
    }))
  );

  const fetWithRetry = async (url, limit = 3, delay = 200, signal) => {
    for (let i = 0; i < limit; i++) {
      try {
        const res = await fetch(url, { signal: signal });

        r = await res.json();
        return r;
      } catch (error) {
        if (i == limit) {
          throw error;
        }
        await new Promise.resolve(setTimeout(() => "resolve", delay));
      }
    }
  };

  useEffect(() => {
    const controllers = {};
    Object.entries(CATEGORY_APIS).forEach(([key, url]) => {
      const controler = new AbortController();
      controllers[key] = controler;
      fetWithRetry(url, 3, 200, (signal = controler.signal))
        .then((data) =>
          setCategoryData((prev) => ({
            ...prev,
            key: { status: "success", data: data, error: null },
          }))
        )
        .catch((err) =>
          setCategoryData((prev) => ({
            ...prev,
            key: { status: "error", data: null, error: err },
          }))
        );
    });
    return ()=>{Object.keys(controllers).forEach(key=>controllers[key].abort)}
  }, []);

  return <div>hello</div>;
};

export default MultipleRequestComponent;
