import React from 'react'
import './Footer.css'
import logo from '../Images/logo.png'
import payment1 from '../Images/payment-1.png'
import payment2 from '../Images/payment-2.png'
import payment3 from '../Images/payment-3.png'
import payment4 from '../Images/payment-4.png'
import payment5 from '../Images/payment-5.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    const quickline = [
        {
            id: "div1",
            h: "About",
            url:""
        },
        {
            id: "div2",
            h: "Blogs",
            url:""
        },
        {
            id: "div3",
            h: "Contacts",
            url:""
        },
        {
            id: "div4",
            h: "FAQ",
            url:""
        }
    ];
    
    const Account = [

        {
            id: "div1",
            h1: "My Account",
            url:""
        },
        {
            id: "div2",
            h1: "Orders Tracking",
            url:""
        },
        {
            id: "div3",
            h1: "CheckOut",
            url:""
        },
        {
            id: "div4",
            h1: "Wishlist",
            url:""
        }
    ];

    const icon = [
        {
            ic:"ri-facebook-line",
            url:""
        },
        {
            ic:"ri-twitter-fill",
            url:""
        },
        {
            ic:"ri-youtube-fill",
            url:""
        },
        {
            ic:"ri-instagram-line",
            url:""
        },
        {
            ic:"ri-pinterest-line",
            url:""
        }
    ]
    
    
  return (
    <>
      <div className="container">
      <div className="FMain-div">
        <div className="div1">
            <img src={logo} alt="" />
            <p> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt cilisis.
            </p>
            <div className="payment-icon">
                <img src={payment1} alt="" />
                <img src={payment2} alt="" />
                <img src={payment3} alt="" />
                <img src={payment4} alt="" />
                <img src={payment5} alt="" />
            </div>
        </div>

        <div className="div2">
            <ul>
                <h1>QUICK LINES</h1>
                {
                    quickline.map((items)=>{
                        return<>
                            <Link to={items.url}>
                                <li>
                                    <h2 id={items.id}>{items.h}</h2>
                                </li>
                            </Link>
                        </>
                    })
                }
            </ul>
        </div>

        <div className="div3">
        <ul>
                <h1>ACCOUNT</h1>
                {
                    Account.map((item)=>{
                        return<>
                            <Link to={item.url}>
                                <li>
                                    <h2 id={item.id}>{item.h1}</h2>
                                </li>
                            </Link>
                        </>
                    })
                }
            </ul>
        </div>

        <div className="div4">
            <h1>NEWSLETTER</h1>
            <div className="input-div">
                <input type="email" placeholder='Enter Email' />
                <button>SUBSCRIBE</button>
            </div>
            <div className="icon">
                {
                    icon.map((items)=>{
                        return<>
                            <Link to={items.url}>
                                <i class={items.ic}></i>
                            </Link>
                        </>
                    })
                }
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer
