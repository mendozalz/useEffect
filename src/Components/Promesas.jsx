import React, { useState, useEffect } from "react";

function Promesas() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const api = async () => {
      const url = await fetch("https://randomuser.me/api/?results=3");
      const resp = await url.json();
      resp.results.map(el=>{
        setDatos((e)=>
          [...e, <div className="card" key={el.id.value}>
            <div className="main-content">
              <img src={el.picture.large} alt={el.name.first} />
              <p className="heading">{el.name.first} {el.name.last}</p>
            </div>
          </div>]
        )
      });
      
    }
    api()
  }, []);

  return (
    <>
    <h1>Async/Await</h1>
      <div>{datos}</div>
    </>
  );
}

export default Promesas;
