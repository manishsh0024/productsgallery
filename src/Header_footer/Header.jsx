import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'
import './Header.css';


const Header = () => {

    const headerdata = [
        {
            nav:"HOME",
            id:1,
            url:""
        },
        {
            nav:"WOMEN'S",
            id:2,
            url:""
        },
        {
            nav:"MEN'S",
            id:3,
            url:""
        },
        {
            nav:"SHOP",
            id:4,
            url:"/Shop"
        },
        {
            nav:"PAGES",
            id:5,
            url:""
        },
        {
            nav:"BLOG",
            id:6,
            url:""
        },
        {
            nav:"CONTACT",
            id:7,
            url:""
        }
    ];

    const [open , setopen] = useState({condition:false , class:"ri-menu-line menu"});

    const update=()=>{
        if(open.condition===false && open.class==="ri-menu-line menu"){
            setopen({condition:true , class:"ri-close-line"})
        }
        else{
            setopen({condition:false , class:"ri-menu-line menu"})
        }
    }


  return (
    <>
      <div className="nav_bar">
        <Link to={"/home"}>
            <img src={logo} alt="Site Logo" />
        </Link>
        <ul>
            {
                headerdata.map((items)=>{
                    return(
                    <>
                        <Link to={items.url}>
                        <li key={items.id} className="head-list">
                            {items.nav}
                        </li>
                        </Link>
                    </>
                    )
                })
            }
        </ul>
        <div className="login">
            <Link to={"/login"}>
            <p>
                <p>Login/Register</p>
            </p>
            </Link>
        </div>
        <div className="head-icon">
            <ul>
                <li><i class="ri-search-line"></i></li>
                <li className='heart-icon'>
                    <i class="ri-heart-3-line"></i>
                    <p className='uper-logo'>2</p>
                </li>
                <li className='bag-icon'>
                    <i class="ri-shopping-bag-line"></i>
                    <p className='uper-logo1'>2</p>
                    </li>
            </ul>
        </div>
                <button onClick={update} style={{border:"none", outline:"none"}}>
                    <i class={open.class} ></i>
                </button>
      </div>
    </>
  )
}

export default Header
