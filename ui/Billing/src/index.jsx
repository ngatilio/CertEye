import React from "react";
import ReactDOMClient from "react-dom/client";
import { Zerotrust } from "./screens/Zerotrust";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Zerotrust />);
