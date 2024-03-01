import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

export default function Home() {
  const [api, setApi] = useState("https://swapi.dev/api/planets/?format=json");
  const [value, setValue] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const previousHandler = () => {
    if (prevPage !== null) {
      setApi(prevPage);
    }
  };

  const nextHandler = () => {
    if (nextPage !== null) {
      setApi(nextPage);
    }
  };

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setValue(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      });
  }, [api]);

  return (
    <div className="home">
      <div className="home--items">
        {value.map((planet) => {
          return (
            <Card
              key={planet.name}
              name={planet.name}
              climate={planet.climate}
              terrain={planet.terrain}
              population={planet.population}
              residents={planet.residents}
            />
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={previousHandler} disabled={prevPage === null}>
          Prev
        </button>
        <button onClick={nextHandler} disabled={nextPage === null}>
          Next
        </button>
      </div>
    </div>
  );
}
