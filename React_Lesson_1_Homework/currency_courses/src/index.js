import React from "react";
import ReactDOM from "react-dom/client";
import Grid from "./Grid";
import Header from "./Header";
import './index.css';


const header = ReactDOM.createRoot(document.querySelector(".header"));
const grid = ReactDOM.createRoot(document.querySelector(".grid"));
header.render(<Header />);
grid.render(<Grid/>);

