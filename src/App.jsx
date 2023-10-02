import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./router/error-page";
import CreateProduct from "./router/create-product";
import EditProduct from "./router/edit-product";
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
        element: <EditProduct />,
      },
      {
        path: "products/new",
        element: <CreateProduct />,
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
