import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import EditIcon from "../assets/edit-icon";
import LoadingSpinner from "../components/loading-spinner";
import ProductsFilter from "../components/products-filter";
import { useProducts } from "../gateway/products";

import "./products.css";

function Products() {
  const [filters, setFilters] = useState();
  const { data: products, isLoading } = useProducts(filters);
  const navigate = useNavigate();

  return (
    <div className="products">
      <div className="products-action">
        <button
          onClick={() => {
            navigate("/products/new");
          }}
        >
          Add Product
        </button>
      </div>
      <ProductsFilter
        filters={filters}
        setFilters={(newFilters) => {
          setFilters(newFilters);
        }}
      />
      {isLoading ? <LoadingSpinner /> : null}
      {products != null ? <ProductsTable products={products} /> : null}
    </div>
  );
}

const headerTitles = ["Image", "Title", "Category", "Price", "Action"];

function ProductsTable({ products }) {
  return (
    <div className="table">
      <div className="table-header">
        {headerTitles.map((title) => (
          <div key={title} className="table-header-cell">
            {title}
          </div>
        ))}
      </div>
      <div className="table-body">
        {products.map((product) => (
          <div key={product.id} className="table-row">
            <div className="table-body-cell">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="table-body-cell">{product.title}</div>
            <div className="table-body-cell">{product.category}</div>
            <div className="table-body-cell">{product.price}</div>
            <div className="table-body-cell">
              <Link to={`/products/${product.id}/edit`}>
                <EditIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
