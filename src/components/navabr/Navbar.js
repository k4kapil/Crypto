import React from 'react'
import { Link } from "react-router-dom"
import clogo2 from "../../Assets/clogo2.png"
import "./Navbar.css"
const Navbar = () => {

  return (
    <>
        <div className='nav'>
        <img src={clogo2} alt='' />
         <div className='navItems'>
         <Link to ="/">HomePage</Link>
         <Link to ="/exchange">Exchange</Link>
         <Link to ="/cryptocurrencies">Cryptocurrencies</Link>
         <Link to ="/news">News</Link>
        
          </div>
          
    
      
      </div> 
      
      </> 
      )
  }

export default Navbar