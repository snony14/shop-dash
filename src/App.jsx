import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./router/error-page";
import NewProduct from "./router/new-product";
import ProductEdit from "./router/product-edit";
import Products from "./router/products";
import Root from "./router/root";

import "./App.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id/edit",
        element: <ProductEdit />,
      },
      {
        path: "products/new",
        element: <NewProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
