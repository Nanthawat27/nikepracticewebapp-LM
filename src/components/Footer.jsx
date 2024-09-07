import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <footer>
      <div className='offsetfooter'></div>
      <div>
        <ul>แหล่งข้อมูล
          <div></div>
          <li><a href=''>ค้นหาร้านค้า</a></li>
          <li><a href=''>สมัครเป็น Member</a></li>
        </ul>

        <ul>ความช่วยเหลือ
          <div></div>
        <li><a href=''>รับความข่วยเหลือ</a></li>
        <li><a href=''>สถานะการสั่งซื้อ</a></li>
        <li><a href=''>การส่งมอบ</a></li>
        <li><a href=''>การคืนสินค้า</a></li>
        <li><a href=''>การชำระเงิน</a></li>
        <li><a href=''>ติดต่อเรา</a></li>
        </ul>
        <ul>บริษัท
          <div></div>
        <li><a href=''>เกี่ยวกับ Nike</a></li>
        <li><a href=''>ข่าวสาร</a></li>
        <li><a href=''>ร่วมงานกับเรา</a></li>
        <li><a href=''>ร่วมลงทุนกับเรา</a></li>
        <li><a href=''>ความยั่งยืน</a></li>
        </ul>
        <div>
        </div>
        <div className='lang'>
        
          <a>ไทย</a>
        </div>
      </div>
      <div className='footerspacer'></div>
      <div className='footerlistblock'>
      <ul className='footerlist'>
      <li><a href=''>© 2024 Nike, Inc. สงวนลิขสิทธิ์</a></li>
      <li><a href=''>คำแนะนำ</a></li>
      <li><a href=''>ข้อกำหนดการใช้</a></li>
      <li><a href=''>นโยบายความเป็นส่วนตัวของ Nike</a></li>
      </ul>
      </div>
      
    </footer>
    </>
  )
}

export default Footer