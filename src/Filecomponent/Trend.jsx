import React from "react";
import "./Trend.css";
import p1 from "../Images/ht-1.jpg";
import p2 from "../Images/ht-2.jpg";
import p3 from "../Images/ht-3.jpg";
import p4 from "../Images/bs-1.jpg";
import p5 from "../Images/bs-2.jpg";
import p6 from "../Images/bs-3.jpg";
import p7 from "../Images/f-1.jpg";
import p8 from "../Images/f-2.jpg";
import p9 from "../Images/f-3.jpg";

const Trend = () => {

  const Trend01 = [
    {
        name: "Chain bucket bag",
        rating: "ri-star-fill",
        price: "$59",
        img: p1,
      },
      {
        name: "Pendant earrings",
        rating: "ri-star-fill",
        price: "$59",
        img: p2,
      },
      {
        name: "Cotton T-Shirt",
        rating: "ri-star-fill",
        price: "$59",
        img: p3,
      },
  ];

  const Trend02 = [
    {
        name: "Cotton Pent",
        rating: "ri-star-fill",
        price: "$59",
        img: p4,
      },
      {
        name: "Zip-pockets pebbled tote briefcase",
        rating: "ri-star-fill",
        price: "$59",
        img: p5,
      },
      {
        name: "Round leather bag",
        rating: "ri-star-fill",
        price: "$59",
        img: p6,
      }
  ];

  const Trend03 = [
    {
        name: "Bow wrap skirt",
        rating: "ri-star-fill",
        price: "$59",
        img: p7,
      },
      {
        name: "Metallic earrings",
        rating: "ri-star-fill",
        price: "$59",
        img: p8,
      },
      {
        name: "Flap cross-body bag",
        rating: "ri-star-fill",
        price: "$59",
        img: p9,
      }
  ];

  return (
    <>
      <div className="container">
      <div className="Main-Trend-div">
        <div id="Main-div1" className="Main-div-in">
            <h1 className="head"><span>HOT</span> TREND</h1>
        {Trend01.map((items) => {
          return (
            <>
                <div className="div-data-main">
                    <div className="img-div">
                        <img src={items.img} alt="" />
                    </div>
                <div className="div-data">
                    <h1>{items.name}</h1>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <p>{items.price}</p>
                </div>
                </div>
            </>
          );
        })}
        </div>
        <div id="Main-div2" className="Main-div-in">
            <h1 className="head"><span>BEST</span> SELLER</h1>
        {Trend02.map((items) => {
          return (
            <>
                <div className="div-data-main">
                    <div className="img-div">
                    <img src={items.img} alt="" />
                </div>
                <div className="div-data">
                    <h1>{items.name}</h1>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <p>{items.price}</p>
                </div>
                </div>
            </>
          );
        })}
        </div>
        <div id="Main-div3" className="Main-div-in">
            <h1 className="head"><span>FEATURE</span></h1>
        {Trend03.map((items) => {
          return (
            <>
                <div className="div-data-main">
                    <div className="img-div">
                    <img src={items.img} alt="" />
                </div>
                <div className="div-data">
                    <h1>{items.name}</h1>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <i className={items.rating}></i>
                <p>{items.price}</p>
                </div>
                </div>
            </>
          );
        })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Trend;
