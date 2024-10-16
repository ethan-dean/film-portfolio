import { useState, useEffect } from 'react'

function Cats() {

  const [imgSrc, setImgSrc] = useState("");

  try {
    useEffect(() => {
      fetch("https://allyfarace.com/v1/cat")
        .then((res) => res.json())
        .then((data) => setImgSrc(data.url))
    }, []) 
  } catch (e) {
    console.log("Error: Unable to fetch image... "+ {e})
  }
  
  return (
    <>
      <img src={imgSrc}/>
    </>
  )
}

export default Cats
