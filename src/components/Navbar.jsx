import React from 'react'

function Navbar() {
  return (
    <>
      <header>
      <div>
        <a href='/Jordan'><img src='https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg'></img></a>
      </div>
      <ul>
        <li><a href='#'>ค้นหาร้านค้า</a></li>
        <div></div>
        <li><a href=''>ความช่วยเหลือ</a></li>
        <div></div>
        <li><a href=''>เข้าร่วมกับเรา</a></li>
        <div></div>
        <li><a href=''>ลงชื่อเข้าใช้</a></li>
      </ul>
    </header>
    <nav>
      <div>
        <a href='/'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'></img>
        </a>
        </div>
      <ul>
        <li><a className='test' href='/Saleoff'>ลดเพิ่ม 30% 🔥</a></li>
        <li><a href='New'>ใหม่และโดดเด่น</a></li>
        <li><a href='Men'>ผู้ชาย</a></li>
        <li><a href='Women'>ผู้หญิง</a></li>
        <li><a href='Kids'>เด็ก</a></li>
        <li><a href='Sale'>ลดราคา</a></li>
        <li><a href='Design'>ออกแบบเองกับ</a></li>
        <li><a href='Snkrs'>SNKRS</a></li>
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