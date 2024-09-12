import React from 'react'
import Navbar from '../components/Navbar'
import './MenShoes.css'
import { Link } from 'react-router-dom'
function MenShoes() {
  return (
    <>
        <Navbar></Navbar>
        <div className='headeroffset'></div>
        <div className='wall-header'>
            <div className='block lg:flex justify-between header-contentbar'>
            <div className='text-xl mt-4 mb-6 md:text-2xl font-bold lg:mt-2  leftmenu'>
                <h1>รองเท้าบุรุษ</h1>
            </div>
            <div className='hidden lg:flex mt-2 space-x-4 rightmenu'>
                <div>ซ่อนตัวกรอง</div>
                <div>เรียงตาม</div>
            </div>
            
            </div>
        </div>
        <div className='flex pl-4 py-4 overflow-x-scroll lg:hidden border-b-2 horizonalmenubar'>
              <ul className='flex whitespace-nowrap font-medium space-x-4'>
                <li><Link to="/Jordan">Life Style</Link></li>
                <li><Link to="/Jordan">Jordan</Link></li>
                <li><Link to="/Jordan">Running</Link></li>
                <li><Link to="/Jordan">Basketball</Link></li>
                <li><Link to="/Jordan">American Football</Link></li>
                <li><Link to="/Jordan">Training</Link></li>
                <li><Link to="/Jordan">Sketboard</Link></li>
                <li><Link to="/Jordan">Golf</Link></li>
                <li><Link to="/Jordan">Tennis</Link></li>
                <li><Link to="/Jordan">Athletics</Link></li>
                <li><Link to="/Jordan">Walking</Link></li>
              </ul>
          </div>

          
          <div className='lg:hidden resultandfilter'>
          <div className='flex mt-2 items-center justify-between'>
            <p className='font-light'>Result</p>
            <button type="button" className='py-1 font-medium filter-button'>Filter</button>
          </div>
          </div>

          <div className='hidden lg:block headeroffset'></div>
          <div className='leftmenubox'>
            <div className='hidden lg:block overflow-y-scroll max-h-[55vh] leftmenulist'>

            <ul className='flex flex-col justify-center whitespace-nowrap font-medium space-y-2'>
                <li><Link to="/Jordan">Life Style</Link></li>
                <li><Link to="/Jordan">Jordan</Link></li>
                <li><Link to="/Jordan">Running</Link></li>
                <li><Link to="/Jordan">Basketball</Link></li>
                <li><Link to="/Jordan">American Football</Link></li>
                <li><Link to="/Jordan">Training</Link></li>
                <li><Link to="/Jordan">Sketboard</Link></li>
                <li><Link to="/Jordan">Golf</Link></li>
                <li><Link to="/Jordan">Tennis</Link></li>
                <li><Link to="/Jordan">Athletics</Link></li>
                <li><Link to="/Jordan">Walking</Link></li>
              </ul>

            <div className='text-lg font-medium space-y-4 accordionmenu'>
            <div >Gender</div>
            <div>Shop by Price</div>
            <div>Sale & Deal</div>
            <div>Size</div>
            <div>Color</div>
            <div>Hight of Shoes</div>
            <div>Brand</div>
            <div>Collection</div>
            <div>Air Max</div>
            <div>Width</div>
            <div>Sports</div>
            <div>Jordan</div>
            </div>
            </div>
          </div>
    </>
  )
}

export default MenShoes