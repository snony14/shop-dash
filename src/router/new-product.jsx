import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateProduct } from "../gateway/products";
import ProductForm from "../components/product-form";

import "./product-edit.css";

function NewProduct() {
  const { mutate, isSuccess, error } = useCreateProduct();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("RENDER");
    return () => {
      console.log("TEST");
    };
  }, []);

  return (
    <div className="product-edit">
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
      </div>
      <div>
        <h1>New Product</h1>
        <ProductForm
          onSubmit={(newProduct) => {
            mutate(newProduct);
          }}
        />
      </div>
    </div>
  );
}

export default NewProduct;
