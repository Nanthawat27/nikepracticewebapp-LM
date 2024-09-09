import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function Navbar() {
  return (
    <>
      <header class="hidden md:flex">
      <div className='mainheader'>
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
      </div>
    </header>
    <nav>
      <div className='leftlogo'>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'></img>
        </Link>
        </div>
      <div></div>
      <div className='hidden md:flex navbarlist'>
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
      </div>
      
      <div className='search'>
      <input className="hidden xl:inline block"type="text" placeholder='ค้นหา'/>
      <i class="inline block xl:hidden fa-solid fa-magnifying-glass"></i>
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-bag-shopping"></i>
      <i class="md:hidden fa-solid fa-bars"></i>
      </div>
    </nav>
    <section>
      <div className='banner'></div>
    </section>
    </>
  )
}

export default Navbar