import React from 'react'
import './Category.css'


const Category = () => {
    const cat_img = [
        {
            cat:"Men’s fashion",
            items:358,
            btn:"SHOP NOW",
            id:1,
            divid:"div1"

        },
        {
            cat:"Kid’s fashion",
            items:276,
            btn:"SHOP NOW",
            id:2,
            divid:"div2"

        },
        {
            cat:"Cosmetics",
            items:250,
            btn:"SHOP NOW",
            id:3,
            divid:"div3"

        },
        {
            cat:"Accessories",
            items:210,
            btn:"SHOP NOW",
            id:4,
            divid:"div4"

        }
    ]

  return (
    <>
      <div className="Main-cat-div">
            <div className="left-div">
                <h1>Women’s fashion</h1>
                <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore 
                    magna aliquapendisse ultrices gravida.
                </p>
                <button>Shop Now</button>
            </div>
            <div className="right-div">
                {
                    cat_img.map((items)=>{
                        return<>
                            <div className="cat-div" id={items.divid}>
                            <h1>{items.cat}</h1>
                            <p>{items.items}</p>
                            <button>{items.btn}</button>
                        </div>
                        </>
                    })
                }
            </div>
      </div>
    </>
  )
}

export default Category
