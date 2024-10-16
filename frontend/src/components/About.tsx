import './About.css'

function About() {
  
  return (
    <div className="about-container">
      <div className="about-text-container">
        <p className="about-text-title">Ally Farace</p>
        <span className="about-text-line"></span>
        <p className="about-text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo possimus eaque, aspernatur asperiores accusamus doloribus odio dicta numquam. Quas inventore dignissimos dolore a nihil quo dolor voluptatibus animi velit.</p>
        <p className="about-text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo possimus eaque, aspernatur asperiores accusamus doloribus odio dicta numquam. Quas inventore dignissimos dolore a nihil quo dolor voluptatibus animi velit.</p>
      </div>
      <div className="about-image-container">
        <img className="about-image-1" src="/ally-1.png" />
        {/* <img className="about-image-2" src="/ally-2.png" />
        <img className="about-image-3" src="/ally-3.png" /> */}
      </div>
    </div>
  )
}

export default About
