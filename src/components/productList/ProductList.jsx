/** @format */

import React from "react";
import "./productList.css";
import Product from "./../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspite.</h1>
        <p className="pl-desc">
          Technology is absolutely everywhere around us. And as developers, this
          is great for us because it gives us a huge platform to impact people's
          lives in a positive way
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <div className="cover-img">
            <Product key={item.id} img={item.img} link={item.github} />
            <span className="cover">
              <a href={item.github}>See more!</a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
