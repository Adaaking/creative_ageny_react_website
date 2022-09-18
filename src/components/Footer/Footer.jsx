import React from 'react'
import { navbar } from '../../common/data'
import './footer.scss'
import logo from '../../common/images/hipster-white.png'
import { HashLink as Link } from 'react-router-hash-link'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt=''/>
      </div>
      <div className='menu'>
        <h3>Menu</h3>
        {navbar.map((nav)=>{
          return <article className='nav-name' key={nav.id}>
            <Link to={nav.route} smooth>{nav.name}</Link>
          </article>
        })}
      </div>
      <div className='address'> 
        <h3>Address</h3>
        <span>Suite #913</span>
        <span>cmc condominiam</span>
        <span>CMC Street</span>
        <span>Addis Ababa</span>
        <span>M1 1TA</span>
      </div>
      <div className='contact-info'>
        <h3>Contact</h3>
        <span>E: addisumotora3@gmail.com</span>
        <span>T: +251961439185</span>
        <span>F: +251961439185</span>
      </div>
    </div>
  )
}

export default Footer