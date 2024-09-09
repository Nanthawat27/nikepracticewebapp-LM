import React from 'react'
import Navbar from '../components/Navbar'
import './MenShoes.css'
function MenShoes() {
  return (
    <>
        <Navbar></Navbar>
        <div className='headeroffset'></div>
        <div className='wall-header'>
            <div className='header-contentbar'>
            <div className='leftmenu'>
                <h1>รองเท้าบุรุษ</h1>
            </div>
            <div className='rightmenu'>
                <div>ซ่อนตัวกรอง</div>
                <div>เรียงตาม</div>
            </div>
            </div>
        </div>
        <div className='headeroffset'></div>
    </>
  )
}

export default MenShoes