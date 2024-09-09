import React from 'react'
import Navbar from '../components/Navbar'
import slide1 from '../assets/slide1.png'
import Footer from '../components/Footer'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'
import slide6 from '../assets/slide6.png'
import './Home.css'
import ButtomMenu from '../components/ButtomMenu'
function Home() {
  return (
    <>
    <Navbar></Navbar>
        <div className='productbanner'>
            <div>
              <div></div>
                <a href=''><img src='https://grays.life/wp-content/uploads/2021/01/nike-running-ad4.jpg' alt='banner'></img></a>
              <div></div>
            </div>
            <div className=' banner-content'>
              <div className='block items-center space-y-6 mt-5 md:flex flex-col lg:flex banner-list'>
                <p className='font-bold mt-6'>รองเท้าวิ่งไลฟ์สไตล์</p>
                <h1 className='font-bold text-5xl md:text-7xl lg:text-8xl'>โดดเด่นเป็นพิเศษ</h1>
                <h1 className='font-light'>พบกับคอลเลกชันใหม่ล่าสุดของรองเท้าวิ่งสไตล์เรโทร ตัวช่วยสุดเจ๋งที่จะช่วยอัปเกรดลุคของคุณให้ปังยิ่งขึ้น</h1>
                <button className=''>เลือกซื้อ</button>
              </div>
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
          <div className='offsetslide'></div>
          
          <div class="flex overflow-x-scroll space-x-4 p-4">

              <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
                <img src={slide1} alt="Air Max Dn" class="w-full h-auto"></img>
                <div class="mt-4">
                  <h2 class="text-xl font-bold">Air Max Dn</h2>
                  <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
                </div>
              </div>

              <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <img src={slide2} alt="Air Max Dn" class="w-full h-auto"></img>
            <div class="mt-4">
              <h2 class="text-xl font-bold">Air Max Dn</h2>
              <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
              <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
            </div>
          </div>

          <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <img src={slide3} alt="Air Max Dn" class="w-full h-auto"></img>
            <div class="mt-4">
              <h2 class="text-xl font-bold">Air Max Dn</h2>
              <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
              <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
            </div>
          </div>

          <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <img src={slide4} alt="Air Max Dn" class="w-full h-auto"></img>
            <div class="mt-4">
              <h2 class="text-xl font-bold">Air Max Dn</h2>
              <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
              <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
            </div>
          </div>

          <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <img src={slide5} alt="Air Max Dn" class="w-full h-auto"></img>
            <div class="mt-4">
              <h2 class="text-xl font-bold">Air Max Dn</h2>
              <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
              <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
            </div>
          </div>

          <div class="min-w-[450px] bg-white p-4 shadow-lg rounded-lg flex flex-col">
            <img src={slide6} alt="Air Max Dn" class="w-full h-auto"></img>
            <div class="mt-4">
              <h2 class="text-xl font-bold">Air Max Dn</h2>
              <p class="text-gray-600">ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
              <a href="#" class="text-blue-500 hover:underline">ดูเพิ่มเติม</a>
            </div>
          </div>

          </div>
          





          <div className='offsetbanner'></div>
          <h1 className='hitt'>กำลังฮิต</h1>
          <div className='bannerproduct2'>
              <div></div>
                <a href=''><img src='https://images.squarespace-cdn.com/content/v1/6417886c0667f10347ff3f09/dec6b1e0-3881-4fc2-8a5a-96ea215bc716/matthewbrownphoto_jordanchicago3.jpg' alt='banner'></img></a>
              <div></div>
          </div>
          <div className='productbanner'>
          <div className='banner-content'>
              <div className='block space-y-5 md:flex flex-col items-center lg:flex banner-list'>
                <p className='font-bold mt-5'>Nike Jordan 1 High Chicago</p>
                <h1 className='font-bold text-3xl md:text-5xl'>ความยืดหยุ่น และความมั่นคง</h1>
                <p className='font-light'>ยึดเกาะ มั่นคง ไลฟ์สไตล์ Nike Jordan 1 High Chicago</p>
                <button>เลือกซื้อ</button>
              </div>
          </div>
          </div>
        <ButtomMenu></ButtomMenu>
        <Footer></Footer>
    </>
  )
}

export default Home