import React from 'react'
import './ButtomMenu.css'
function ButtomMenu() {
  return (
    <>
        <div className='offsetmenu'></div>
        <div className='bottommenuoffset'>
    
        <div class="hidden md:flex menu">
        <div className='offset'></div>
        <div className='hidden md:flex buttom-menu'>
        <div class="menu-column">
            <ul className=''>
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
        </div>
        
        <div className='offset'></div>
    </div>
    </div>
    <div className='offsettest1'>
    <div className='flex flex-col mb-4 text-2xl  md:hidden items-start space-y-4 transition-all duration-300'>
            <div>ไอคอน</div>
            <div>รองเท้า</div>
            <div>เสื้อผ้า</div>
            <div>สำหรับเด็ก</div>
        </div>
        </div>
    </>
  )
}

export default ButtomMenu