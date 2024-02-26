import React from 'react'
import './Discountpage.css'
import P1 from '../Images/discount.jpg'
import SaleTimer from './Common-Componant/SaleTimer'

const Discountpage = () => {
  return (
    <>
    <div className="container">
        <div className="discount-div">
            <div className="Dimg-div">
                <img src={P1} alt="" />
            </div>
            <div className="timer-div">
                <p>DISC OUNT</p>
                <h1>Summer Sale</h1>
                <p className='pp'>SALE <span>50%</span></p>
                <SaleTimer/>
                <button>SHOP NOW</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Discountpage
