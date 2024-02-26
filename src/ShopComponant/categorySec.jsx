import React from 'react'
import './categorySec.css'
import ShopDataItems from './ShopData';


const Shop = () => {
  return (
    <>
      <div className="categorySec">
            <div className="left-cat-div">
                <h1>CATEGORIES</h1>
                {
                  ShopDataItems.map((items)=>{
                    return<>
                    <select className='Drop-list'>
                      <h1>{items.Itemfor}</h1>
                      <option>{items.item1}</option>
                      <option>{items.item2}</option>
                      <option>{items.item3}</option>
                      <option>{items.item4}</option>
                      <option>{items.item5}</option>
                    </select>
                    </>
                  })
                }
            </div>
            <div className="right-cat-div">

            </div>
      </div>
    </>
  )
}

export default Shop;
