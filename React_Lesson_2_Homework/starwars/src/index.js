import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import Header from "./components/Header/Header";

const header = ReactDOM.createRoot(document.querySelector(".header"));
header.render(<Header />);
const app = ReactDOM.createRoot(document.querySelector(".grid"));
app.render(<App />);
