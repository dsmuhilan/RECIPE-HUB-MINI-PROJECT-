import React  from 'react'
import "./home.css";
import Navbar from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
// import Sidebar from './sidebar';

export default function Home() {


  return (
    <div class="body">
        <header>
        <Navbar/>
        </header>
        <h1 className='head' style={{fontFamily:"Times New Roman"}}>
        Discover Culinary Delights, One Recipe at a Time
        
        <Link to='/rec'> <h2>Explore your dish</h2></Link>
        </h1>
        <Footer/>
       
    </div>
  )
}