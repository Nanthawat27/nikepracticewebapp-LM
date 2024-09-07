import React from 'react'
import './Mens.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NikeAds from '../assets/NikeAds.mp4'
import { Link } from 'react-router-dom'

function Mens() {
  return (
    <>
    <Navbar></Navbar>
    <div className='main-men'>
    <div className='class-men'>
      <h1>ผู้ชาย</h1>
      <ul>
        <li><Link to='/Men/Shoes'>รองเท้า</Link></li>
        <li><Link to='/Men/Apparel'>เสื้อผ้า</Link></li>
        <li><Link to='/Men/Accessories'>อุปกรณ์</Link></li>
      </ul>
      <div></div>
    </div>
    <div className='video-content'>
      <video preload="true" muted autoplay="autoplay" loop="loop" playsinline>
          <source src={NikeAds} type="video/mp4"/>
      </video>
      <div className='content'>
        <h2>สร้างมาเพื่อการไล่ล่า</h2>
        <p>ไล่กวดคู่ต่อสู้ด้วย Gianis Freak 6 รุ่นใหม่</p>
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
    <div className='offsetmenu'></div>
    <div className='bottommenuoffset'>
    
        <div class="menu">
        <div className='offset'></div>
        <div class="menu-column">
            <ul>
                <h3>ไอคอน</h3>
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
                <li>Air Max 97</li>
                <li>Air Max 270</li>
                <li>Air Max 720</li>
                <li>Air Max ทั้งหมด</li>
                <li>VaporMax</li>
            </ul>
        </div>
        <div class="menu-column">
            <ul>
                <h3>รองเท้า</h3>
                <li>รองเท้าทั้งหมด</li>
                <li>รองเท้าออกแบบเอง</li>
                <li>รองเท้า Jordan</li>
                <li>รองเท้าวิ่ง</li>
                <li>รองเท้าบาสเก็ตบอล</li>
                <li>รองเท้าฟุตบอล</li>
                <li>รองเท้ายิมและเทรนนิ่ง</li>
                <li>รองเท้าไลฟ์สไตล์</li>
            </ul>
        </div>
        <div class="menu-column">
            <ul>
                <h3>เสื้อผ้า</h3>
                <li>เสื้อผ้าทั้งหมด</li>
                <li>ชุดสุภาพ</li>
                <li>เสื้อมีฮู้ดและเสื้อแบบสวม</li>
                <li>เสื้อ</li>
                <li>เสื้อแจ็คเก็ต</li>
                <li>สินค้ากระชับกล้ามเนื้อและ Nike Pro</li>
                <li>กางเกงและเลกกิ้ง</li>
                <li>กางเกงขาสั้น</li>
            </ul>
        </div>
        <div class="menu-column">
            <ul>
                <h3>สำหรับเด็ก</h3>
                <li>รองเท้าทารกและเด็กวัยหัดเดิน</li>
                <li>รองเท้าเด็ก</li>
                <li>รองเท้าเด็ก Jordan</li>
                <li>รองเท้าสเก็ตบอลเด็ก</li>
                <li>รองเท้าวิ่งเด็ก</li>
                <li>เสื้อผ้าเด็ก</li>
                <li>เป้สะพายหลังเด็ก</li>
                <li>ถุงเท้าเด็ก</li>
            </ul>
        </div>
        <div className='offset'></div>
    </div>
    </div>
    <Footer></Footer>

    </>
    
  )
}

export default Mens