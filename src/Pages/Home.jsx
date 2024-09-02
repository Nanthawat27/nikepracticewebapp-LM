import React from 'react'
import Navbar from '../components/Navbar'
import slide1 from '../assets/slide1.png'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <main>
        <div>
            <div>
              <div></div>
                <a href=''><img src='https://c.static-nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/tpqid8vgfey6m4ke86te/123-joyride-cdp-apla-xa-xp.jpg' alt='banner'></img></a>
              <div></div>
            </div>
            <div className='banner-content'>
              <div className='banner-list'>
                <p>รองเท้าวิ่งไลฟ์สไตล์</p>
                <h1>โดดเด่นเป็นพิเศษ</h1>
                <div>พบกับคอลเลกชันใหม่ล่าสุดของรองเท้าวิ่งสไตล์เรโทร ตัวช่วยสุดเจ๋งที่จะช่วยอัปเกรดลุคของคุณให้ปังยิ่งขึ้น</div>
                <button>เลือกซื้อ</button>
              </div>
            </div>
        </div>
        <span className='spanoffset'></span>
        <div className='newslideshow'>
          <h1>ใหม่และโดดเด่น</h1>
          <div className='imgslider'>
            <div className='img-container'>
              <a href=''><img src={slide1}></img></a>
              <a href=''></a>
              <a href=''></a>
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default Home