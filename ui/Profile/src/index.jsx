import React from "react";
import ReactDOMClient from "react-dom/client";
import { Profile } from "./screens/Profile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Profile />);
