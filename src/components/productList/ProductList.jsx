import React from "react";
import "./productList.css";
import Product from "./../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspite. It's Thuc</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          ratione molestiae architecto ipsum accusamus ipsam! Optio dolorum
          impedit repellat molestiae!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.github} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
