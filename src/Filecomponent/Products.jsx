import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import ProductsData from "./ProductDatabase/dataproduct";


const Products = () => {
  const cat_list = [
    {   li: "All",
        url: "",
        key:2
    },
    {   li: "Women's",
        url: "",
        key:3
    },
    {   li: "Men's",
        url: "",
        key:4
    },
    {   li: "Kid's",
        url: "",
        key:5
    },
    {   li: "Accessories",
        url: "",
        key:6
    },
    {   li: "Cosmetics",
        url: "",
        key:7
    },
  ];


  return (
    <>
      <div className="container">
        <div className="Main-Pdiv">
          <div className="p-head">
            <h1>
              <span style={{ borderBottom: "2px solid red" }}>NEW</span> PRODUCTS
            </h1>
            <ul>
              {cat_list.map((items) => (
                <Link to={items.url} key={items.key}>
                  <li>{items.li}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className="Products-div">
            {ProductsData.slice(0 , 8).map((items) => (
              <Link to={items.url} key={items.Pname}>
                <div className="P-in">
                  <div className="img-div">
                    <img src={items.Pimage} alt="" />
                    {items.Psale && <p className="Sale">{items.Psale}</p>}
                    {items.Pstock && <p className="Ostock">{items.Pstock}</p>}
                    {items.Pcondition && <p className="condition">{items.Pcondition}</p>}
                        <div className="hover-div">
                            <i class="fa-solid fa-arrows-left-right"></i>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                  </div>
                  <h1>{items.Pname}</h1>
                  <p className="prating">
                    {/* {[...Array(5)].map((_, index) => (
                      <i key={index} className={items.Prating}></i>
                    ))} */}
                    <i className={items.Prating}></i>
                    <i className={items.Prating}></i>
                    <i className={items.Prating}></i>
                    <i className={items.Prating}></i>
                    <i className={items.Prating}></i>
                  </p>
                  <p className="price-div">
                    <p>{items.Pprice}</p>
                    {items.Pmrp && <p className="mrp">{items.Pmrp}</p>}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
