import React from 'react'
import './Mens.css'
import Navbar from '../components/Navbar'

function Mens() {
  return (
    <>
    <Navbar></Navbar>
    <div className='class-men'>
      <h1>ผู้ชาย</h1>
      <ul>
        <li><a href=''>รองเท้า</a></li>
        <li><a href=''>เสื้อผ้า</a></li>
        <li><a href=''>อุปกรณ์</a></li>
      </ul>
      <span></span>
    </div>
    </>
    
  )
}

export default Mens