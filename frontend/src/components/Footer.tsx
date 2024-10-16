import './Footer.css'

function Footer() {
  
  return (
    <div className='footer-div'>
      <p className='footer-text'>
        &copy;{(new Date()).getFullYear()}&nbsp;
        <a className='footer-link' href='https://github.com/ethan-dean' target='blank_'>Ethan Dean</a>
      </p>
    </div>
  )
}

export default Footer

