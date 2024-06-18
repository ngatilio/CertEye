import React from "react";
import ReactDOMClient from "react-dom/client";
import { PopupModal } from "./screens/PopupModal";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PopupModal />);
