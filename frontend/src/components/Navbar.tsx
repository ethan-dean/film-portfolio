import './Navbar.css'

function Navbar(props: any) {
  
  return (
    <>
      <div className="navbar">
        <div className="navbar-items">
          <button className="navbar-button" onClick={() => props.handleClick("About")}>
            <p className="navbar-title" >About&nbsp;</p>
            <img className="navbar-icon" src="/about-icon-black.png" />
          </button>
          <a className="navbar-link" href="https://www.imdb.com/name/nm15000024/" target="blank_" >
            <p className="navbar-title" >Moviestar&nbsp;</p>
            <img className="navbar-img" src="/imdb-icon-black.png" />
          </a>
          {/* <a className="navbar-link" href="https://www.linkedin.com/in/ally-farace-b56941262/" target="blank_">
            <p className="navbar-title" >Connect&nbsp;</p>
            <img className="navbar-img" src="/linkedin-icon-black.png" />
          </a> */}
          <button className="navbar-button" onClick={() => props.handleClick("Cats")}>
            <p className="navbar-title" >Cats&nbsp;</p>
            <img className="navbar-icon" src="/paw-icon-black.png" />
          </button>
        </div>
        <span className="navbar-line"></span>
      </div>
      <div className="menuToggle">

        <input type="checkbox" />
        
        <span></span>
        <span></span>
        <span></span>
        
        <ul className="menu">
          <button className="navbar-button" onClick={() => props.handleClick("About")}>
            <p className="navbar-title" >About&nbsp;</p>
            <img className="navbar-icon" src="/about-icon-black.png" />
          </button>
          <a className="navbar-link" href="https://www.imdb.com/name/nm15000024/" target="blank_" >
            <p className="navbar-title" >Moviestar&nbsp;</p>
            <img className="navbar-img" src="/imdb-icon-black.png" />
          </a>
          <button className="navbar-button" onClick={() => props.handleClick("Cats")}>
            <p className="navbar-title" >Cats&nbsp;</p>
            <img className="navbar-icon" src="/paw-icon-black.png" />
          </button>
        </ul>
      </div>
    </>
  )
}

export default Navbar
