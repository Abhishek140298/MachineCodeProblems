import React, { useState, useEffect } from "react";

const api_endpoint = "https://jsonplaceholder.typicode.com";
const FetchDataFromAPi = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [dots, setDots] = useState("");

  const fetchUser = async () => {
    console.log("JJJj");
    setLoading(true);
    const userRes = await fetch(`${api_endpoint}/users`);
    const users = await userRes.json();
    setUser(users);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchUser();
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 4 ? "" : prev + "."));
      if (!loading) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100vw",
          height: "100vh",
          background: "red",
          fontSize: 70,
        }}
      >
        Users Loading{dots}
      </div>
    );
  }

  return (
    <div>
      <h1>User List</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          flexWrap: "wrap",
          flex: 1,
          margin: "70px",
        }}
      >
        {user?.map((value, index) => (
          <div
            style={{
              width: "400px",
              height: "300px",
              background: "green",
              margin: "10px",
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'space-around'
            }}
          >
            <span>{value?.username}</span>
            <span>{value?.email}</span>
            <span>{value?.phone}</span>
            <span>{value?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchDataFromAPi;
