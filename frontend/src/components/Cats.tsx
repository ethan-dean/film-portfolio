import { useState, useEffect } from 'react'

function Cats() {

  const numImagesPerFetch = 10;

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
    <>
      <img className="cats-image" src={imgUrlList ? imgUrlList[curImgIdx] : "/imdb-icon.jpg"}/>
      <button className="cats-button" onClick={handleClickRandom}>Random</button>
    </>
  )
}

export default Cats
