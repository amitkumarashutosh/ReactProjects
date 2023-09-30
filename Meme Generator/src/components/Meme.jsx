import React, { useState } from "react";
import { useEffect } from "react";
import memeData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((item) => setAllMemeImages(item.data.memes));
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    // const memeArr = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    // const url = memeArr[randomNumber].url;
    const url = allMemeImages[randomNumber].url;
    // setAllMemeImages(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleClick(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <>
      <main>
        <form className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleClick}
          />

          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleClick}
          />
          <button onClick={getMemeImage} className="form--button">
            Get a new meme image🖼️
          </button>
        </form>
        <div className="meme">
          <img src={meme.randomImage} className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </main>
    </>
  );
}
