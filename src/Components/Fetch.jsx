import React, { useState, useEffect } from "react";

//Usando Fetch
function Fetch() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const api = "https://randomuser.me/api/?results=3";
    const resp = fetch(api);
    resp
      .then((resp) => resp.json())
      .then((data) => {
        data.results.map((el) => {
          setDatos((e)=>
            [...e, <div className="card" key={el.id.value}>
              <div className="main-content">
                <img src={el.picture.large} />
                <p className="heading">
                  {el.name.first} {el.name.last}
                </p>
              </div>
            </div>]);
        });
      })
      .catch((e) => console.warn("eror"));
  }, []);
 
  return (
    <>
    <h1>Fetch</h1>
      <div>{datos}</div>
    </>
  );
}

export default Fetch;
