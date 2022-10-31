import React from "react";

import Info from "./components/info";
import About from "./components/about";
import Interests from "./components/interests";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="app">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}
