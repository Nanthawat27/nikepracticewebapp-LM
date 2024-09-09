import React from 'react'
import './Mens.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NikeAds from '../assets/NikeAds.mp4'
import { Link } from 'react-router-dom'
import ButtomMenu from '../components/ButtomMenu'

function Mens() {
  return (
    <>
    <Navbar></Navbar>
    <div className='main-men'>
    <div className='lg:hidden main-men-offset'></div>
    <div className='block space-y-4 lg:flex justify-between items-center class-men'>
      <h1 className=''>ผู้ชาย</h1>
      <ul className='flex space-x-4 lg:flex'>
        <li><Link to='/Men/Shoes'>รองเท้า</Link></li>
        <li><Link to='/Men/Apparel'>เสื้อผ้า</Link></li>
        <li><Link to='/Men/Accessories'>อุปกรณ์</Link></li>
      </ul>
      <div></div>
    </div>
    <div className='video-content'>
      <video className="w-[9:16]" preload="true" muted autoplay="autoplay" loop="loop" playsinline>
          <source src={NikeAds} type="video/mp4"/>
      </video>
      <div className='space-y-6 md:flex flex-col items-center mt-5 content '>
        <p className='font-bold text-xl'>สร้างมาเพื่อการไล่ล่า</p>
        <p className='font-bold text-3xl md:text-4xl font-bold lg:text-5xl '>ไล่กวดคู่ต่อสู้ด้วย Gianis Freak 6 รุ่นใหม่</p>
        <button>เลือกซื้อ</button>
      </div>
    </div>
    <div className='spanoffset'></div>
    <div className='boxbanner'>
            <h1>สินค้าเด่น</h1>
            <div className='btnwrap'>
              <i class="fa-solid fa-angle-left"></i>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
    <ul className='slider'>

    </ul>
    <div className='spanoffset'></div>
    <div className='boxbanner'>
            <h1>ไอเทมพื้นฐานสำหรับฟุตบอล</h1>
            <div className='btnwrap'>
              <i class="fa-solid fa-angle-left"></i>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>



    </div>
    <ButtomMenu></ButtomMenu>
    <Footer></Footer>

    </>
    
  )
}

export default Mens