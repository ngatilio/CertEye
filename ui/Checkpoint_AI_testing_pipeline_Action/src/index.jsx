import React from "react";
import ReactDOMClient from "react-dom/client";
import { ActionableItemsNrs } from "./screens/ActionableItemsNrs";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ActionableItemsNrs />);
