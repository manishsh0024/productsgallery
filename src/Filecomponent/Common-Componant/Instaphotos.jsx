import React from 'react'
import './Instaphotos.css'
import p1 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-1.jpg'
import p2 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-2.jpg'
import p3 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-3.jpg'
import p4 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-4.jpg'
import p5 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-5.jpg'
import p6 from 'C:/Users/somec/OneDrive/Desktop/office work/ashiontemplate/src/Images/insta-6.jpg'
import { Link } from 'react-router-dom'


const Instaphotos = () => {
    const imagedata = [
        {
          img: p1,
          link: "",
          insta: "@insta1",
        },
        {
          img: p2,
          link: "",
          insta: "@insta2",
        },
        {
          img: p3,
          link: "",
          insta: "@insta3",
        },
        {
          img: p4,
          link: "",
          insta: "@insta4",
        },
        {
          img: p5,
          link: "",
          insta: "@insta5",
        },
        {
          img: p6,
          link: "",
          insta: "@insta6",
        }
      ];
      
  return (
    <>
      <div className="instadp">
        {
            imagedata.map((items)=>{
                return<>
                    <div className="img-div">
                            <div className="link-div">
                        <Link to={items.link}>
                                <h1>{items.insta}</h1>
                        </Link>
                            </div>
                        <img src={items.img} alt="" />
                    </div>
                </>
            })
        }
      </div>
    </>
  )
}

export default Instaphotos;
