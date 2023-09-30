import React from "react";
import Cards from "./Cards";
import alldata from "../data.jsx";
import { useState, useEffect } from "react";

export default function Section() {
  const [data, setData] = useState(alldata);
  const [page, setPage] = useState(0);

  const elements = data.map((res) => {
    return <Cards item={res} key={res.url} />;
  });

  const prevHandler = () => {
    setPage(page - 1);
  };
  const nextHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=60059ee7c83243299e96fb28e989c1ab&page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((item) => setData(item.articles));
  }, [page]);

  return (
    <>
      <main className="container">{elements}</main>
      <div className="buttons">
        <button
          onClick={prevHandler}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={page === 0}
        >
          &larr; Prev
        </button>
        <button
          onClick={nextHandler}
          disabled={page === 4}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn"
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}
