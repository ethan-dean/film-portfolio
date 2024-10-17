import './About.css'

function About() {
  
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-text-container">
          <p className="about-text-title">Ally Farace</p>
          <span className="about-text-line"></span>
          <p className="about-text-body">
            Ally is the most beautiful and intelligent girl in the world.
            Everytime I look at her I can't help but smile, happy that she is in my life.
            She always knows how to solve my problems and saves me from stressing over things I don't need to.
            When I am with her I feel safe and confident in myself.
          </p>
          <p className="about-text-body">
            Ally is also incredibly sweet.
            She never fails to warm my heart.
            Anytime I see her smile it always makes my day brighter.
            Whether it’s a kind word or a small gesture, she knows how to make me feel special and cared for.
            Being with her makes me the luckiest person in the world.
          </p>
        </div>
        <div className="about-image-container">
          <img className="about-image-1" src="/ally-1.png" />
        </div>
      </div>
      <div className="about-container rev">
        <div className="about-image-container">
          <img className="about-image-2" src="/ally-2.png" />
          <img className="about-image-3" src="/ally-3.png" />
        </div>
        <div className="about-text-container">
          <p className="about-text-body">
            "Doubt thou the stars are fire,
             doubt that the sun doth move,
             but never doubt that Ally is a wonder,
             unmatched and unrivaled.
             She is my muse, my love, my everything."
            </p>
          <p className="about-text-body">- Shakespeare... maybe...</p>
        </div>
      </div>
    </div>
  )
}

export default About
