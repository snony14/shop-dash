import React from "react";

import { useCategories } from "../gateway/products";

import "./products-filter.css";

const limits = ["2", "5", "8", "10", "15", "20"];

function ProductsFilter({ filters = {}, setFilters }) {
  const { data: categories } = useCategories();

  return (
    <div className="products-filter">
      <div className="products-filter-limit">
        <span>Show</span>
        <select
          value={filters?.limit ?? "20"}
          onChange={(e) => {
            setFilters({ ...filters, limit: e.target.value });
          }}
        >
          {limits.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </select>
        entries
      </div>
      <div className="products-filter-categories">
        <div className="filter">
          <select
            onChange={(e) => {
              const { category: oldCategory, ...newFilters } = filters;
              const category = e.target.value;
              if (category === "All") {
                setFilters({ ...newFilters });
              } else {
                setFilters({ ...newFilters, category });
              }
            }}
            value={filters?.category ?? "All"}
          >
            {["All", ...(categories ?? [])].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <span>Sort by</span>
          <button
            className={
              filters?.sort === "asc" ? "filter-btn--selected" : undefined
            }
            onClick={() => {
              setFilters({ ...filters, sort: "asc" });
            }}
          >
            Asc
          </button>
          <button
            className={
              filters?.sort === "desc" ? "filter-btn--selected" : undefined
            }
            onClick={() => {
              setFilters({ ...filters, sort: "desc" });
            }}
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsFilter;
