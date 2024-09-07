import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const NavbarScroll = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // เมื่อเลื่อนลง, ซ่อน Navbar
      setShowNavbar(false);
    } else {
      // เมื่อเลื่อนขึ้น, แสดง Navbar
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }
}


function Navbar() {
  return (
    <>
      <header>
      <div>
        <Link to ='/Jordan'><img src='https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg'></img></Link>
      </div>
      <ul>
        <li><Link to='#'>ค้นหาร้านค้า</Link></li>
        <div></div>
        <li><Link to=''>ความช่วยเหลือ</Link></li>
        <div></div>
        <li><Link to=''>เข้าร่วมกับเรา</Link></li>
        <div></div>
        <li><Link to=''>ลงชื่อเข้าใช้</Link></li>
      </ul>
    </header>
    <nav>
      <div>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'></img>
        </Link>
        </div>
      <ul>
        <li><Link to='/Saleoff'>ลดเพิ่ม 30% 🔥</Link></li>
        <li><Link to='/New'>ใหม่และโดดเด่น</Link></li>
        <li><Link to='/Men'>ผู้ชาย</Link></li>
        <li><Link to='/Women'>ผู้หญิง</Link></li>
        <li><Link to='/Kids'>เด็ก</Link></li>
        <li><Link to='/Sale'>ลดราคา</Link></li>
        <li><Link to='/Design'>ออกแบบเองกับ</Link></li>
        <li><Link to='/Snkrs'>SNKRS</Link></li>
      </ul>
      <div className='search'>
      <input type="text" placeholder='ค้นหา'/>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </nav>
    <section>
      <div className='banner'></div>
    </section>
    </>
  )
}

export default Navbar