import { useState, useEffect } from 'react'
import './Cats.css'
import Loading from './loading-module/loading.tsx'

function Cats() {

  const numImagesPerFetch = 10;

  const [ imgUrlList, setImgUrlList ] = useState("");
  const [ curImgIdx, setCurImgIdx ] = useState(0);

  const handleClickRandom = async () => {
    // Only increment if images have loaded
    if (imgUrlList) {
      if (curImgIdx == (numImagesPerFetch - 1)) {
        setImgUrlList("");
        await getImgUrls()
      }
      const next = (curImgIdx + 1) % numImagesPerFetch;
      setCurImgIdx(next);
    }
  };

  const getImgUrls = async () => {
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
      {
        imgUrlList ? 
          <img className="cats-image" src={imgUrlList[curImgIdx]}/>
        :
          <Loading />
      }
    </div>
  )
}

export default Cats
