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
        <div className='spanoffset'></div>
        <div className='newslideshow'>
          <div className='boxbanner'>
            <h1>สินค้าเด่น</h1>
            <div className='btnwrap'>
              <i class="fa-solid fa-angle-left"></i>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className='offsetslide'></div>
          
          <div className='sliderborder'>
          <div className='slidecontainer'>
              <div className='carditem'>
                <img src={slide1} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>

              <div className='carditem'>
                <img src={slide2} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>

              <div className='carditem'>
                <img src={slide3} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>

              <div className='carditem'>
                <img src={slide4} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>

              <div className='carditem'>
                <img src={slide5} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>

              <div className='carditem'>
                <img src={slide6} alt='Air Max Dn'></img>
                <div className='card-content'>
                  <h2 >Air Max Dn</h2>
                  <p>ค้นหารองเท้า Air Max คู่ที่ใช่สำหรับคุณ</p>
                  <a>ดูเพิ่มเติม</a>
                </div>
              </div>
              
          </div>
          </div>
          <div className='offsetbanner'></div>
          <h1 className='hitt'>กำลังฮิต</h1>
          <div>
              <div></div>
                <a href=''><img src='https://images.squarespace-cdn.com/content/v1/6417886c0667f10347ff3f09/dec6b1e0-3881-4fc2-8a5a-96ea215bc716/matthewbrownphoto_jordanchicago3.jpg' alt='banner'></img></a>
              <div></div>
          </div>
          <div className='banner-content'>
              <div className='banner-list'>
                <p>Nike Jordan 1 High Chicago</p>
                <h1>ความยืดหยุ่น และความมั่นคง</h1>
                <div>ยึดเกาะ มั่นคง ไลฟ์สไตล์ Nike Jordan 1 High Chicago</div>
                <button>เลือกซื้อ</button>
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
    </main>
    </>
  )
}

export default Home