import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateProduct } from "../gateway/products";
import ProductForm from "../components/product-form";

import "./product-edit.css";

function NewProduct() {
  const { mutate, isSuccess } = useCreateProduct();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [navigate, isSuccess]);

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
