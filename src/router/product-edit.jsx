import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductForm from "../components/product-form";
import LoadingSpinner from "../components/loading-spinner";
import { useProduct, useUpdateProduct } from "../gateway/products";

import "./product-edit.css";

function ProductEdit() {
  const { id } = useParams();
  const { data } = useProduct(id);
  const { mutate, isSuccess, isLoading } = useUpdateProduct();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/products");
    }
  }, [isSuccess, navigate]);

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
        <h1>Edit Product</h1>
        {isLoading ? <LoadingSpinner /> : null}
        {data != null ? (
          <ProductForm
            product={data}
            onSubmit={(product) => {
              mutate(product);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ProductEdit;
