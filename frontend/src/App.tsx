import { useState } from 'react'
import About from './components/About.tsx'
import Cats from './components/Cats.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

import './App.css'

function App() {
  
  const [curPage, setCurPage] = useState("About")
  
  const handlePageClick = (s: string) => {
    setCurPage(s)
  }

  const getCurPageElement = () => {
    switch (curPage) {
      case "About":
        return <About />
      case "Cats":
        return <Cats />
    }
  }

  return (
    <div className="app" >
      <Navbar handleClick={handlePageClick}/>
      {getCurPageElement()}
      <Footer/>
    </div>
  )
}

export default App
