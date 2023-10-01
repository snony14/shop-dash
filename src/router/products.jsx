import React, { useState } from "react";
import { Link } from "react-router-dom";

import editIcon from "../assets/edit.svg";
import ProductsFilter from "../components/products-filter";
import { useProducts } from "../gateway/products";

import "./products.css";

function Products() {
  const [filters, setFilters] = useState();
  const { data: products, isLoading } = useProducts(filters);

  return (
    <div className="products">
      <div className="products-action">
        <Link to="/products/new">Add Product</Link>
      </div>
      <ProductsFilter
        filters={filters}
        setFilters={(newFilters) => {
          setFilters(newFilters);
        }}
      />
      {isLoading ? "LOADING..." : null}
      {products != null ? <ProductsTable products={products} /> : null}
    </div>
  );
}

function ProductsTable({ products }) {
  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-cell">Image</div>
        <div className="table-header-cell">Title</div>
        <div className="table-header-cell">Category</div>
        <div className="table-header-cell">Price</div>
        <div className="table-header-cell">Action</div>
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
                <img src={editIcon} alt="edit icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
