import { useMutation, useQuery } from "@tanstack/react-query";

const PRODUCTS_QUERY_KEY = ["PRODUCTS"];

export const useProducts = (queryParams) => {
  return useQuery([...PRODUCTS_QUERY_KEY, queryParams], async () => {
    const searchParams = new URLSearchParams(queryParams);

    if (searchParams.has("category")) {
      const searchStr =
        searchParams.size > 0 ? "?" + searchParams.toString() : "";
      const category = searchParams.get("category");
      searchParams.delete("category");
      return fetch(
        `https://fakestoreapi.com/products/category/${category}${searchStr}`
      ).then((res) => res.json());
    }
    const searchStr =
      searchParams.size > 0 ? "?" + searchParams.toString() : "";
    return fetch(`https://fakestoreapi.com/products${searchStr}`).then((res) =>
      res.json()
    );
  });
};

export const useProduct = (productId) => {
  return useQuery(
    [...PRODUCTS_QUERY_KEY, productId],
    async () => {
      return fetch(`https://fakestoreapi.com/products/${productId}`).then(
        (res) => res.json()
      );
    },
    { enabled: !!productId }
  );
};

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (newProduct) =>
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
      }).then((res) => res.json()),
  });
};

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: (product) =>
      fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: "PUT",
        body: JSON.stringify(product),
      }).then((res) => res.json()),
  });
};

export const useCategories = () => {
  return useQuery([...PRODUCTS_QUERY_KEY, "categories"], async () => {
    return fetch("https://fakestoreapi.com/products/categories").then((res) =>
      res.json()
    );
  });
};
