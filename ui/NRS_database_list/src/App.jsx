import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NrsDatabase } from "./screens/NrsDatabase";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <NrsDatabase />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
