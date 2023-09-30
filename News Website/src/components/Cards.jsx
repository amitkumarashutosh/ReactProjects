import React from "react";

export default function Cards(props) {
  return (
    <>
      <div className="w-[300px] rounded-md border my-4">
        <img
          src={
            props.item.urlToImage
              ? props.item.urlToImage
              : "https://i.imgflip.com/2wifvo.jpg"
          }
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">
            {props.item.title.slice(0, 70)}...
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            {props.item.description
              ? props.item.description.slice(0, 80)
              : null}
            ...
          </p>
          <a href={props.item.url} target="_blank">
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
