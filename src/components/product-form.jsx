import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useCategories } from "../gateway/products";

import "./product-form.css";

function ProductForm({ product, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: product?.id ?? "",
      title: product?.title ?? "",
      price: product?.price ?? "",
      category: product?.category ?? "",
      image: product?.image ?? "",
      description: product?.description ?? "",
    },
  });
  const { data: categories } = useCategories();
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div>Title</div>
        <input
          className="form-control"
          {...register("title", { required: true })}
        />
      </div>
      <div className="form-row">
        <div>Category</div>
        <select {...register("category", { required: true })}>
          {categories != null
            ? categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))
            : null}
        </select>
      </div>
      <div className="form-row">
        <div>Price</div>
        <input
          type="text"
          className="form-control"
          {...register("price", { required: true })}
        />
      </div>
      <div className="form-row">
        <div>Image Url</div>
        <input
          type="text"
          className="form-control"
          {...register("image", { required: true })}
        />
      </div>
      <div className="form-row">
        <div>Description</div>
        <textarea
          type="text"
          className="form-control"
          {...register("description", { required: true })}
        />
      </div>
      <div className="form-footer">
        <button type="submit">Submit</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
