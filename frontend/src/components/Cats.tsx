import { useState, useEffect } from 'react'
import './Cats.css'

function Cats() {

  const numImagesPerFetch = 100;

  const [ imgUrlList, setImgUrlList ] = useState("");
  const [ curImgIdx, setCurImgIdx ] = useState(0);

  const handleClickRandom = () => {
    const next = (curImgIdx + 1) % numImagesPerFetch;
    setCurImgIdx(next);
  };

  const getImgUrls = () => {
    try {
      fetch("https://allyfarace.com/v1/cat")
        .then((res) => res.json())
        .then((data) => setImgUrlList(data.urlList))
    } catch (e) {
      console.log("Error: Unable to fetch image... "+ {e})
    }
  };

  useEffect(() => {
    getImgUrls()
  }, [])

  return (
    <div className="cats">
      <button className="cats-button" onClick={handleClickRandom}>Random</button>
      <img className="cats-image" src={imgUrlList ? imgUrlList[curImgIdx] : "/imdb-icon.jpg"}/>
    </div>
  )
}

export default Cats
