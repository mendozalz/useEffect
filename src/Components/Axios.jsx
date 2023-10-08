import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const client = axios.create({
      baseURL: "https://randomuser.me/",
    });
    client.get("api/?results=3").then((response) => {
      response.data.results.map((el) => {
        setDatos((e)=>
          [...e, <div className="card" key={el.id.value}>
            <div className="main-content">
              <img src={el.picture.large} />
              <p className="heading">
                {el.name.first} {el.name.last}
              </p>
            </div>
          </div>]
        );
      });
    });
  }, []);

  return (
    <>
    <h1>Axios</h1>
      <div>{datos}</div>
    </>
  );
}

export default Axios;
