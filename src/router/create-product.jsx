import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateProduct } from "../gateway/products";
import ProductForm from "../components/product-form";
import LoadingSpinner from "../components/loading-spinner";

import "./product.css";

function CreateProduct() {
  const { mutate, isSuccess, isLoading } = useCreateProduct();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [navigate, isSuccess]);

  return (
    <div className="create-product">
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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ProductForm
            onSubmit={(newProduct) => {
              mutate(newProduct);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CreateProduct;
